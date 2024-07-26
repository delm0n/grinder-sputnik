<template>
  <section id="photo">
    <div class="container">
      <div class="title">
        <h2>Галерея</h2>
      </div>

      <div class="photo-wrapper">
        <div v-if="!getMobile" class="photo-grid">
          <a
            v-for="(photo, index) in photoList"
            :key="index"
            class="photo-grid__item"
            :href="
              'new-site-vue/build/images/photo/' +
              photo.href +
              (getWebp === 'webp' ? '.webp' : '.png')
            "
            data-fancybox="gallery"
          >
            <picture>
              <source
                :srcset="
                  img
                    ? 'new-site-vue/build/images/photo/' + photo.src + '.webp'
                    : ''
                "
                type="image/webp"
              />
              <img
                :style="'aspect-ratio: ' + photo.asprat"
                :src="
                  img
                    ? 'new-site-vue/build/images/photo/' + photo.src + '.png'
                    : ''
                "
                alt="Фото гриндера"
              />
            </picture>
          </a>
        </div>

        <div v-if="getMobile" class="photo-slider">
          <div class="swiper-wrapper">
            <div
              v-for="(slide, index) in photoList"
              :key="index"
              class="swiper-slide"
            >
              <a
                :href="
                  'new-site-vue/build/images/photo/' +
                  slide.href +
                  (getWebp === 'webp' ? '.webp' : '.png')
                "
                data-fancybox="gallery"
                class="photo-wrapper__img"
              >
                <picture>
                  <source
                    :srcset="
                      'new-site-vue/build/images/photo/' +
                      slide.src +
                      '@05x.webp'
                    "
                    type="image/webp"
                  />
                  <img
                    :src="
                      'new-site-vue/build/images/photo/' +
                      slide.src +
                      '@05x.png'
                    "
                    alt="Фото гриндера"
                  />
                </picture>
              </a>
            </div>
          </div>
          <div class="photo-slider-pagination"></div>
        </div>

        <div class="photo-video">
          <video
            ref="video"
            preload="none"
            loop
            :poster="'new-site-vue/build/images/photo/photo-video.' + getWebp"
            muted
            class="video-lazy"
          >
            <source
              :data-lazy="'new-site-vue/video/photo-video.mp4'"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Swiper, Pagination } from "swiper";
import uuidv4 from "../mixins/uuidv4";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  computed: mapGetters(["getWebp", "getMobile"]),
  data() {
    return {
      img: false,
      id: null,
      photoList: [
        {
          href: "photo-1__modal",
          src: "photo-1",
          asprat: "1/1",
        },

        {
          href: "photo-2__modal",
          src: "photo-2",
          asprat: "1/1",
        },

        {
          href: "photo-3__modal",
          src: "photo-3",
          asprat: "1/1",
        },

        {
          href: "photo-4__modal",
          src: "photo-4",
          asprat: "439/205",
        },

        {
          href: "photo-5__modal",
          src: "photo-5",
          asprat: "1/1",
        },
      ],
    };
  },
  mixins: [uuidv4],
  mounted() {
    this.id = this.uuidv4();

    if (this.img == false) {
      this.gsap.timeline({
        delay: 4,
        scrollTrigger: {
          id: this.id,
          once: true,
          trigger: "#photo",
          start: "-60% bottom",
          onEnter: this.loadImg,
          onEnterBack: this.loadImg,
        },
      });
    }

    let myPhotoSwiper;
    const photoSwiper = () => {
      myPhotoSwiper = new Swiper(".photo-slider", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".photo-slider-pagination",
          type: "bullets",
          clickable: true,
        },
        modules: [Pagination],
      });
    };

    const photoSwiperbreakpoint = window.matchMedia("(min-width: 769px)");
    const breakpointChecker = () => {
      if (!photoSwiperbreakpoint.matches) {
        // this.mobile = false;
        setTimeout(() => {
          return photoSwiper();
        }, 20);
      } else {
        // this.mobile = true;

        setTimeout(() => {
          if (myPhotoSwiper) {
            return myPhotoSwiper.destroy(true, true);
          }
        }, 10);
      }
    };

    photoSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  methods: {
    loadImg() {
      this.img = true;
      this.loadVideo();
    },

    loadVideo() {
      let video = this.$refs.video;
      let source = video.querySelector("source");

      source.src = source.dataset.lazy;
      video.load();
      video.classList.add("video-lazy--loaded");
      video.play();

      source.removeAttribute("data-lazy");
      ScrollTrigger.getById(this.id).kill(true);
      this.gsap.timeline().kill(true);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#photo {
  @extend %padd;
  overflow: hidden;

  img {
    max-width: 100%;

    &[src=""] {
      opacity: 0;
    }
  }

  .photo-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 1199px) {
      gap: 20px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      max-width: 391px;
      margin: 0 auto;
    }

    .photo-grid {
      display: grid;
      grid-template-columns: 453fr 212fr;
      gap: 30px;

      @media (max-width: 1199px) {
        gap: 20px;
      }

      &__item {
        display: block;
        border-radius: 10px;
        // border: 2px solid #b9b9b9;
        background: #f9f9f9;
        overflow: hidden;
        width: 100%;
        cursor: zoom-in;

        &:hover {
          img {
            transform: scale(1.05);
          }
        }

        &:nth-child(1) {
          grid-column: 1/2;
          grid-row: 1/3;
        }

        &:nth-child(4) {
          grid-column: 1/2;
          grid-row: 3/4;
        }
      }

      img {
        transition: transform 0.4s;
        transform: scale(1);
        width: 100%;
      }
    }

    .photo-video {
      border-radius: 10px;
      border: 2px solid #b9b9b9;
      background: white;
      overflow: hidden;

      display: flex;
      align-items: stretch;

      video {
        max-width: 100%;
        aspect-ratio: 1/1;
        // height: 100%;
      }
    }

    .photo-slider {
      overflow: hidden;
      @media (max-width: 768px) {
        padding-bottom: 20px;
      }

      &-pagination {
        @media (min-width: 769px) {
          display: none;
        }
        margin: 0;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        padding-top: 10px;

        @media (max-width: 576px) {
          gap: 5px;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          @media (max-width: 576px) {
            width: 7px;
            height: 7px;
          }
          border: 1px solid #323232;
          background: #fff;
          border-radius: 100%;
          margin: 0;
          opacity: 1;

          &-active {
            background: #323232;
          }
        }
      }
    }
  }
}
</style>