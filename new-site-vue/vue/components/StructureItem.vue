<template>
  <div class="structure-item">
    <div class="structure-item__content">
      <div :class="'label ' + item.label.color">
        <p v-text="item.label.text"></p>
      </div>
      <h3 v-html="item.title"></h3>
      <p class="decr" v-html="item.decr"></p>
      <ul>
        <li v-for="(li, i) in item.list" :key="i">
          <b v-html="li.title"></b>
          <span v-html="li.text"></span>
        </li>
      </ul>

      <p @click="$emit('show-modal', item)" class="modal-button">Подробнее</p>
    </div>
    <div class="structure-item__slider-container">
      <div :class="'structure-item__slider structure-item__slider-' + index">
        <div class="swiper-wrapper">
          <div v-if="item.video" class="swiper-slide">
            <my-video
              :poster="'structure/' + item.video.poster"
              :src="item.video.src"
            />
          </div>
          <div v-for="(img, i) in item.imgList" :key="i" class="swiper-slide">
            <my-image
              :alt="'#'"
              :floder="'structure'"
              :imgName="img"
              :mobile="false"
            />
          </div>
        </div>

        <svg
          class="sldr-prev"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle cx="25" cy="25" r="25" fill="#F6640A" />
          <path
            d="M31.4287 14.2852H25.0001L15.0001 24.9994L25.0001 35.7137H31.4287L21.4287 24.9994L31.4287 14.2852Z"
            fill="white"
          />
        </svg>

        <svg
          class="sldr-next"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle
            cx="25"
            cy="25"
            r="25"
            transform="matrix(-1 0 0 1 50 0)"
            fill="#F6640A"
          />
          <path
            d="M18.5723 14.2861H25.0008L35.0008 25.0004L25.0008 35.7147H18.5723L28.5723 25.0004L18.5723 14.2861Z"
            fill="white"
          />
        </svg>

        <div class="sldr-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import MyVideo from "../UI/MyVideo.vue";
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";

export default {
  components: {
    MyImage,
    MyVideo,
  },
  props: {
    item: Object,
    index: Number,
  },
  mounted() {
    let mySwiper;

    const SwiperLoad = () => {
      mySwiper = new Swiper(".structure-item__slider-" + this.index, {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,

        navigation: {
          nextEl: ".sldr-next",
          prevEl: ".sldr-prev",
        },
        pagination: {
          el: ".sldr-pagination",
          type: "progressbar",
        },
        loop: true,
        modules: [Navigation, Pagination],

        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            loop: false,
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
          },

          577: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },
        },
      });
    };

    SwiperLoad();

    // if (document.getElementById("app").dataset.autoplay) {
    //   this.observer = new IntersectionObserver(
    //     ([entry]) => {
    //       if (entry && entry.isIntersecting) {
    //         mySwiper.autoplay.start();
    //       } else {
    //         mySwiper.autoplay.stop();
    //       }
    //     },
    //     { threshold: [0.5] }
    //   );

    //   this.observer.observe(this.$el);
    // }
  },
  // destroyed() {
  //   if (document.getElementById("app").dataset.autoplay) {
  //     this.observer.disconnect();
  //   }
  // },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.structure-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    max-width: 665px;
    margin: 0 auto;
  }

  &:nth-child(2n-1) {
    @media (min-width: 769px) {
      flex-direction: row-reverse;
    }
  }

  &__content {
    max-width: 50%;
    width: 100%;

    @media (max-width: 991px) {
      max-width: 100%;
    }
    color: #323232;
    font-family: "Gilroy";
    font-style: normal;

    .label {
      margin-bottom: 20px;
      padding: 5px 20px;
      border-radius: 30px;
      max-width: max-content;

      @media (max-width: 768px) {
        margin-bottom: 10px;
        padding: 5px 10px;
      }

      &.red {
        background: #ff4e4f;
      }

      &.yellow {
        background: linear-gradient(
          94deg,
          rgba(255, 138, 0, 0.8) -22.04%,
          rgba(250, 255, 0, 0.74) 185.17%
        );
      }

      &.blue {
        background: #1cc6eb;
      }

      &.green {
        background: #2aa000;
      }

      p {
        color: #fff;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        line-height: normal;

        @media (max-width: 992px) {
          @include fluidFontSize(12, 14, 320, 992);
        }
      }
    }

    h3 {
      font-size: 27px;
      font-weight: 600;
      line-height: 125.926%;
      margin-bottom: 20px;

      @media (max-width: 1199px) {
        padding-bottom: 15px;
        border-bottom: 2px solid #e8e8e8;
        margin-bottom: 0;
      }

      @include fluidFontSize(22, 27, 992, 1920);
    }

    .decr {
      font-size: 22px;
      font-weight: 400;
      line-height: 131.818%;

      @include fluidFontSize(18, 22, 992, 1920);

      padding-bottom: 15px;
      border-bottom: 2px solid #e8e8e8;

      @media (max-width: 1199px) {
        display: none;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 30px;
      padding-top: 28px;

      @media (max-width: 1199px) {
        gap: 20px;
      }

      @media (max-width: 576px) {
        display: none;
      }

      li {
        font-size: 18px;
        line-height: 138.889%;
        position: relative;
        padding-left: 40px;

        @include fluidFontSize(16, 18, 992, 1920);

        @media (max-width: 576px) {
          padding-left: 27px;
        }

        &::before {
          content: "";
          position: absolute;
          top: -4px;
          left: 0;
          width: 30px;
          height: 30px;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODc1IDE0LjM3NUwxMi41IDIwTDIxLjg3NSAxMC42MjUiIHN0cm9rZT0iI0Y2NjQwQSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-position: center;

          @media (max-width: 576px) {
            width: 22px;
            height: 22px;
            top: 0;
          }
        }

        b {
          font-weight: 500;
        }

        span {
          display: block;
          margin-top: 7.5px;
          font-weight: 300;

          @media (max-width: 1199px) {
            display: none;
          }
        }
      }
    }
  }

  &__slider {
    &-container {
      max-width: 665px;
      position: relative;
      width: 48.86%;
      overflow: hidden;

      @media (max-width: 991px) {
        width: 100%;
      }

      @media (max-width: 576px) {
        width: calc(100% + 40px);
        // margin: 0 -20px;
      }
    }

    .sldr-prev,
    .sldr-next {
      position: absolute;
      top: 50%;
      cursor: pointer;
      user-select: none;
      transform: translateY(-50%);
      z-index: 6;
      transition: all 0.3s;

      circle {
        fill: transparent;
        transition: all 0.3s;
      }
      path {
        fill: #f6640a;
        transition: all 0.3s;
      }

      @media (min-width: 769px) {
        &:hover {
          circle {
            fill: #fff;
            box-shadow: 0px 4px 14px 0px rgba(140, 140, 140, 0.15);
          }

          path {
            fill: #f6640a;
          }
        }
      }

      @media (max-width: 576px) {
        display: none;
      }
    }

    .sldr-next {
      right: 20px;
      @media (max-width: 1366px) {
        right: 10px;
      }
    }
    .sldr-prev {
      left: 20px;
      @media (max-width: 1366px) {
        left: 10px;
      }
    }

    .sldr-pagination {
      @media (min-width: 577px) {
        display: none;
      }

      margin-top: 10px;
      height: 2px;
      position: relative;
      background: #cecece;
      width: calc(100% - 40px) !important;
      transform: translateX(20px);

      .swiper-pagination-progressbar-fill {
        background: #f7660e;
      }
    }

    .swiper-slide {
      video,
      img {
        width: 100%;
        aspect-ratio: 1/1;
      }

      img {
        &:not(.loaded) {
          opacity: 0;
        }
      }
    }
  }

  .modal-button {
    @media (min-width: 1199px) {
      display: none;
    }

    cursor: pointer;
    margin-top: 30px;
    color: #323232;
    font-family: "Inter";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.18px;
    text-decoration-line: underline;

    @media (max-width: 576px) {
      margin-top: 15px;
    }
  }
}
</style>