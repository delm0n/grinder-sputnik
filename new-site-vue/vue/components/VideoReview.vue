<template>
  <section id="video-review">
    <div class="container">
      <div class="title">
        <h2>Видеообзоры от владельцев «СПУТНИКА»</h2>
      </div>

      <div class="row">
        <div class="video-review-wrapper">
          <div v-if="!media1024" class="swiper-wrapper">
            <div
              v-for="(item, index) in videos"
              :key="index"
              class="swiper-slide video-container"
            >
              <template v-for="(video, idx) in item">
                <a
                  v-if="idx < 4"
                  :key="idx"
                  data-fancybox
                  :href="video.link"
                  class="video-block"
                >
                  <my-image
                    class="preview"
                    :alt="'#'"
                    :floder="'video-review'"
                    :imgName="video.img"
                    :mobile="false"
                  />

                  <div class="video-title">
                    <p v-html="video.title"></p>
                  </div>

                  <svg
                    class="yotb"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="45"
                    viewBox="0 0 64 45"
                    fill="none"
                  >
                    <rect width="64" height="45" rx="10" fill="#FF3838" />
                    <path
                      d="M43 23.5L27.25 32.5933L27.25 14.4067L43 23.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </template>
            </div>
          </div>

          <div v-else class="swiper-wrapper">
            <template v-for="(item, index) in videos">
              <div
                v-for="(video, idx) in item"
                :key="[idx, index]"
                class="swiper-slide"
              >
                <a data-fancybox :href="video.link" class="video-block">
                  <my-image
                    class="preview"
                    :alt="'#'"
                    :floder="'video-review'"
                    :imgName="video.img"
                    :mobile="false"
                  />

                  <div class="video-title">
                    <p v-html="video.title"></p>
                  </div>

                  <svg
                    class="yotb"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="45"
                    viewBox="0 0 64 45"
                    fill="none"
                  >
                    <rect width="64" height="45" rx="10" fill="#FF3838" />
                    <path
                      d="M43 23.5L27.25 32.5933L27.25 14.4067L43 23.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </template>
          </div>

          <div class="sldr-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path d="M23 0H14L0 15L14 30H23L9 15L23 0Z" fill="#F6640A" />
            </svg>
          </div>
          <!-- <div class="video-pagination"></div> -->
          <div class="sldr-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path d="M0 0H9L23 15L9 30H0L14 15L0 0Z" fill="#F6640A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation, Pagination } from "swiper";
import MyImage from "../UI/MyImage.vue";

export default {
  data() {
    return {
      media1024: window.innerWidth < 993,
      videos: [
        [
          {
            link: "https://www.youtube.com/watch?v=ynIaKhwEM_Y",
            img: "video-1",
            title: "Гриндер Спутник. Обзор и тест",
          },

          {
            link: "https://www.youtube.com/watch?v=RLoCO-hJwB0",
            img: "video-2",
            title: "Гриндер СПУТНИК - мечта домашнего мастера!",
          },

          {
            link: "https://www.youtube.com/watch?v=2J0KDzEneJo",
            img: "video-3",
            title: `Новые работы на гриндере " СПУТНИК "`,
          },
          {
            link: "https://www.youtube.com/watch?v=yC8rsfisWj8",
            img: "video-4",
            title: "Новый Гриндер СПУТНИК",
          },
        ],

        [
          {
            link: "https://www.youtube.com/watch?v=zfhiynV7NBg",
            img: "video-5",
            title: "ДНЕПР МТ в BMW r100. СОБИРАЮ С НУЛЯ СВОИМИ РУКАМИ!",
          },

          {
            link: "https://www.youtube.com/watch?v=7qbcWLr6VYM",
            img: "video-6",
            title: "Гриндер СПУТНИК. Как он в РАБОТЕ?",
          },
        ],
      ],
    };
  },
  components: { MyImage },

  mounted() {
    let myVideoSwiper;
    let myVideoSwiperMobile;

    const videoSwiper = () => {
      myVideoSwiper = new Swiper(".video-review-wrapper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: ".sldr-next",
          prevEl: ".sldr-prev",
        },
        modules: [Navigation],
      });
    };

    const videoSwiperMobile = () => {
      myVideoSwiperMobile = new Swiper(".video-review-wrapper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: ".sldr-next",
          prevEl: ".sldr-prev",
        },
        // pagination: {
        //   el: ".video-pagination",
        //   type: "bullets",
        //   clickable: true,
        // },Pagination,
        modules: [Navigation],
      });
    };

    const windowbreakpoint = window.matchMedia("(max-width: 1024px)");
    const breakpointChecker = () => {
      if (windowbreakpoint.matches) {
        this.media1024 = true;

        if (myVideoSwiper) {
          myVideoSwiper.destroy(true, true);
        }
        setTimeout(() => {
          return videoSwiperMobile();
        }, 100);
      } else {
        this.media1024 = false;

        if (myVideoSwiperMobile) {
          myVideoSwiperMobile.destroy(true, true);
        }
        setTimeout(() => {
          return videoSwiper();
        }, 100);
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>


<style lang="scss">
@import "../../scss/_global.scss";

#video-review {
  @extend %padd;
  overflow: hidden;

  picture {
    justify-content: center;
  }

  .video-container {
    grid-auto-flow: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  }

  .video-block {
    position: relative;
    cursor: pointer;
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 576px) {
      border-radius: 8.5px;
      //   border-radius: 0;
      //   display: flex;
      //   flex-direction: column;
      //   gap: 35px;
    }

    .preview {
      grid-row: 1/2;
      grid-column: 1/2;

      @include aspect() {
        aspect-ratio: 107/60;
      }
    }

    .video-title {
      grid-row: 2/3;
      grid-column: 1/2;

      background: #f6640a;
      padding: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: #fff;
        text-align: center;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 25px; /* 138.889% */
        text-transform: uppercase;
        @include fluidFontSize(16, 18, 992, 1920);

        @media (max-width: 576px) {
          font-size: 12px;
          line-height: 19px; /* 158.333% */
        }
        // @media (max-width: 576px) {
        //   color: #323232;
        //   text-align: center;
        //   font-family: "Inter";
        //   font-size: 16px;
        //   font-style: normal;
        //   font-weight: 600;
        //   line-height: 18px; /* 112.5% */

        //   @include fluidFontSize(13, 16, 321, 576);
        // }
      }
    }

    @media (min-width: 769px) {
      &:hover {
        .yotb {
          transform: translate(-50%, -80%) scale(1.1);
          path {
            fill: #ff3838;
          }

          rect {
            fill: #fff;
          }
        }
      }
    }

    .yotb {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -80%);
      transform-origin: center;
      transition: all 0.3s;
      * {
        transition: all 0.3s;
      }

      @media (max-width: 576px) {
        width: 52px;
        height: 37px;
      }

      // @media (max-width: 375px) {
      //   top: 29%;
      //   transform: translate(-50%);
      // }
    }
  }

  .row {
    margin: 0 auto;
    position: relative;
    padding: 0 46px;

    @media (max-width: 1024px) {
      max-width: calc(640px + 26px * 2);
    }

    @media (max-width: 576px) {
      padding: 0 20px;
    }

    .video-review-wrapper {
      overflow: hidden;
    }

    // .video-pagination {
    //   @media (min-width: 577px) {
    //     display: none;
    //   }
    //   z-index: 10;
    //   position: absolute;
    //   bottom: 50px;
    //   margin: 0;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;

    //   @media (max-width: 576px) {
    //     gap: 5px;
    //   }

    //   .swiper-pagination-bullet {
    //     width: 10px;
    //     height: 10px;
    //     @media (max-width: 576px) {
    //       width: 7px;
    //       height: 7px;
    //     }

    //     background: rgba(190, 190, 190, 0.5);
    //     border-radius: 100%;
    //     margin: 0;
    //     opacity: 1;

    //     &-active {
    //       background: #323232;
    //     }
    //   }
    // }

    .sldr-prev,
    .sldr-next {
      position: absolute;
      top: 50%;
      cursor: pointer;
      user-select: none;
      transform: translateY(-50%);
      z-index: 6;

      @media (max-width: 576px) {
        // transform: translateY(calc(-50% - 64px / 2.5));
        svg {
          width: 13px;
          height: 16px;
        }
      }
    }

    .sldr-next {
      right: 0;
    }
    .sldr-prev {
      left: 0;
    }
  }
}
</style>