<template>
  <div class="slider-gallery">
    <div ref="sliderGallery">
      <div class="swiper-wrapper">
        <div v-for="(image, index) in images" :key="index" class="swiper-slide">
          <div class="img-wrap">
            <img
              draggable="false"
              :src="'new-site-vue/build/images/dops/' + image + webp"
              :alt="'#'"
              loading="lazy"
            />
          </div>

          <div class="swiper-lazy-preloader"></div>
        </div>
      </div>
      <div
        ref="sliderGallery__pagination"
        class="slider-gallery__pagination"
      ></div>
    </div>

    <div class="swiper-mouseover"></div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
export default {
  props: {
    images: Object,
    webp: String,
  },

  mounted() {
    let context = this;
    const sliderGallery = new Swiper(this.$refs.sliderGallery, {
      spaceBetween: 10,
      slidesPerView: "auto",
      slidesPerGroup: 1,
      grabCursor: true,
      loop: true,
      lazy: true,
      pagination: {
        el: this.$refs.sliderGallery__pagination,
        type: "bullets",
        clickable: true,
      },
      allowTouchMove: true,
      modules: [Navigation, Pagination],

      on: {
        init: function () {
          const swiper = this;
          const container = swiper.wrapperEl.parentElement.parentElement;
          const mouseoverLayerClass = "swiper-mouseover-layer";
          let mouseover = container.querySelector(".swiper-mouseover");

          if ("ontouchstart" in window) {
            if (mouseover) {
              mouseover.remove();
            }
            return false;
          }

          if (!mouseover) {
            mouseover = document.createElement("div");
            mouseover.className = "swiper-mouseover";
            container.appendChild(mouseover);
          } else {
            mouseover.innerHTML = "";
          }

          mouseover
            .querySelectorAll(`.${mouseoverLayerClass}`)
            .forEach((element) => {
              element.removeEventListener("mouseover", handleMouseOver);
              element.removeEventListener("mouseout", handleMouseOut);
            });

          for (let i = 0; i < context.images.length; i++) {
            const mouseoverLayer = document.createElement("div");
            mouseoverLayer.className = mouseoverLayerClass;
            mouseoverLayer.setAttribute("swiper-slide-index", i);
            mouseover.appendChild(mouseoverLayer);
            mouseoverLayer.addEventListener("mouseover", handleMouseOver);
            mouseoverLayer.addEventListener("mouseout", handleMouseOut);
          }

          console.log(context.images);

          function handleMouseOver() {
            const index = this.getAttribute("swiper-slide-index");
            swiper.slideTo(index, swiper.params.speed);
          }

          function handleMouseOut() {
            swiper.slideTo(0, swiper.params.speed);
          }
        },
      },
    });
  },
};
</script>

<style lang="scss">
.swiper-mouseover {
  display: flex;
  position: absolute;
  inset: 0;
  z-index: 11;
  top: 0;
  bottom: 50px;
  cursor: pointer;

  @media (max-width: 576px) {
    display: none;
  }
}

.swiper-mouseover-layer {
  flex: 1 0 0%;
  height: 100%;
}

.slider-gallery {
  max-width: 333px;
  .swiper-lazy-preloader {
    border-color: #f6640a;
    border-top-color: transparent;
    animation: rotated 1s ease 2;

    @keyframes rotated {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .swiper-slide {
    height: auto;

    .img-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
  overflow: hidden;

  .slider-gallery__pagination {
    position: absolute;
    z-index: 12;
    bottom: 10px !important;
    display: flex;
    justify-content: center;
    gap: 0;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    .swiper-pagination-bullet {
      margin: 0 !important;
      width: 10px;
      height: 10px;
      border: none;
      opacity: 1;
      background: #cacaca !important;

      &-active {
        background: #f6640a !important;
      }
    }
  }
}
</style>