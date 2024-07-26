<template>
  <section class="nozzel">
    <div class="container">
      <div class="nozzel-wrapper">
        <div class="nozzel-wrapper__container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <video
                width="100%"
                class="lazy"
                preload="none"
                loop
                autoplay
                muted
                style="width: 100%"
                :data-poster="
                  `new-site-vue/build/images/nozzle/poster-nozzle.` +
                  (getWebp == 'webp' ? 'webp' : 'png')
                "
              >
                <source
                  :data-src="'new-site-vue/video/nozzle.mp4'"
                  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
              </video>
            </div>
            <!-- <div v-for="(lamp, i) in lamps" :key="i" class="swiper-slide">
                            <my-image :alt="''" :floder="'nozzel'" :imgName="lamp.img" u :mobile="false"
                                :lazyLoad="false" />
                        </div> -->
          </div>
          <div class="nozzel-wrapper__laptop">
            <div class="swiper-slide">
              <video
                width="100%"
                class="lazy"
                preload="none"
                loop
                autoplay
                muted
                style="width: 100%"
                :data-poster="
                  `new-site-vue/build/images/nozzle/poster-nozzle.` +
                  (getWebp == 'webp' ? 'webp' : 'png')
                "
              >
                <source
                  :data-src="'new-site-vue/video/nozzle.mp4'"
                  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
              </video>
            </div>
            <!-- <div v-for="(lamp2, i) in lamps" :key="i" class="swiper-slide">
                            <my-image :alt="''" :floder="'nozzel'" :imgName="lamp2.img" u :mobile="false" />
                        </div> -->
          </div>
          <div class="nozzel-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
            >
              <g filter="url(#filter0_d_1541_1124)">
                <circle
                  cx="25"
                  cy="25"
                  r="25"
                  transform="matrix(-1 0 0 1 64 10)"
                  fill="white"
                />
              </g>
              <path
                d="M32.5723 24.2861H39.0008L49.0008 35.0004L39.0008 45.7147H32.5723L42.5723 35.0004L32.5723 24.2861Z"
                fill="#646464"
              />
              <defs>
                <filter
                  id="filter0_d_1541_1124"
                  x="0"
                  y="0"
                  width="78"
                  height="78"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.547135 0 0 0 0 0.547135 0 0 0 0 0.547135 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1541_1124"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1541_1124"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div class="nozzel-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
            >
              <g filter="url(#filter0_d_1541_1124)">
                <circle
                  cx="25"
                  cy="25"
                  r="25"
                  transform="matrix(-1 0 0 1 64 10)"
                  fill="white"
                />
              </g>
              <path
                d="M32.5723 24.2861H39.0008L49.0008 35.0004L39.0008 45.7147H32.5723L42.5723 35.0004L32.5723 24.2861Z"
                fill="#646464"
              />
              <defs>
                <filter
                  id="filter0_d_1541_1124"
                  x="0"
                  y="0"
                  width="78"
                  height="78"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.547135 0 0 0 0 0.547135 0 0 0 0 0.547135 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1541_1124"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1541_1124"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div class="nozzel-wrapper__content">
          <div class="nozzel__made-pagination"></div>
          <h2 class="nozzel-wrapper__title">Насадка для зачистки труб</h2>
          <p class="nozzel-wrapper__subtitle">
            Единственное устройство для качественной обработки круглых труб
          </p>

          <p class="decr">
            Применима для любого гриндера с опорным столиком. Функции: снятие
            ржавчины, старой краски; обработка перед покраской, сваркой;
            матирование. Главное преимущество — равномерная обработка трубы без
            существенного истончения металла. Подача трубы — автоматическая при
            установке столика под углом 3–5°.
          </p>

          <p class="decr decr-title">
            <span>Характеристики:</span>
          </p>

          <ul>
            <li>диаметр труб — 25–80 мм;</li>
            <li>толщина опорного столика — до 25 мм;</li>
            <li>количество подшипников (закрытого типа) — 6 шт.;</li>
            <li>
              размеры: высота общая — 270 мм; ширина — 40 мм; длина струбцины
              —145 мм;
            </li>
            <li>материал — сталь СТ–3.</li>
          </ul>

          <template v-for="item in getDops">
            <div :key="item.id" class="nozzel-offer" v-if="item.id == 483322">
              <div class="offer-prices">
                <div class="discount">
                  <p>-{{ item.sale.toLocaleString() }}</p>
                </div>
                <div class="old">
                  <p v-html="item.oldPrice.toLocaleString() + ' руб.'"></p>
                </div>
                <div class="new">
                  <p v-html="item.price.toLocaleString() + ' руб.'"></p>
                </div>
              </div>
              <button
                :class="[!isTest ? ' button' : 'button']"
                class="btn"
                data-fancybox
                data-src="#modal-order"
                @click="item.selected = true"
              >
                Заказать со станком
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import { Swiper, Navigation, Pagination } from "swiper";
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
    components: { MyImage },
    data() {
        return {
            lamps: [
                {
                    img: "lamp-1",
                },
                {
                    img: "lamp-2",
                },
                {
                    img: "lamp-3",
                },
                {
                    img: "lamp-4",
                },
            ],
        };
    },

    computed: mapGetters(["isTest", "getDops", "getWebp"]),
    mounted() {
        let myLampSwiper;
        const lampSwiper = () => {
            myLampSwiper = new Swiper(".nozzel-wrapper__container", {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".nozzel-next",
                    prevEl: ".nozzel-prev",
                },
                pagination: {
                    el: '.lamp__made-pagination',
                    type: 'progressbar',
                },
                modules: [Navigation, Pagination],
            });
        };

        addEventListener("resize", (event) => {
            myLampSwiper.destroy(true, true);
            lampSwiper();
        });
        lampSwiper();
    },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.nozzel {
  overflow: hidden;
  padding: 50px 0 100px 0;

  color: #323232;
  font-family: Gilroy;

  @media (max-width: 991px) {
    padding: 30px 0 60px 0;
  }

  @media (max-width: 576px) {
    padding: 15px 0 30px 0;
  }

  img {
    max-width: 100%;
  }

  .btn {
    width: 341px;
    max-width: 100%;

    @media (max-width: 576px) {
      width: 225px;
    }
  }

  &__made-pagination {
    @media (min-width: 769px) {
      display: none;
    }

    margin-bottom: 20px;
    height: 3px !important;
    position: relative !important;
    background: #cecece !important;

    .swiper-pagination-progressbar-fill {
      background: #f6640a !important;
    }
  }

  .swiper-wrapper {
    background: #f9f9f9;
    border-radius: 8px;

    @media (max-width: 1199px) and (min-width: 769px) {
      display: none;
    }

    @media (max-width: 768px) {
      width: 96%;
      background: #fff;
      overflow: visible;
    }
  }

  .swiper-slide {
    height: auto;
    video {
      border-radius: 10px;
      @media (max-width: 768px) {
        background: #f9f9f9;
        border-radius: 8px;
      }
    }
  }

  .nozzel-wrapper {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    align-items: center;
    gap: 30px;
    padding: 50px 30px;

    @media (max-width: 1199px) and (min-width: 769px) {
      gap: 0px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 20px 0;
    }

    @media (max-width: 576px) {
      gap: 10px;
    }

    &__title {
      margin-bottom: 20px;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 59px;

      @media (max-width: 576px) {
        font-size: 22px;
        line-height: 29px;
        margin-bottom: 5px;
      }
    }

    &__subtitle {
      font-size: 27px;
      font-style: normal;
      font-weight: 400;
      line-height: 34px;
      margin-bottom: 30px;

      @media (max-width: 576px) {
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 20px;
      }
    }

    &__laptop {
      display: none;

      @media (max-width: 1199px) and (min-width: 769px) {
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: 1040px;
        overflow-x: hidden;
        padding-right: 10px;
        //justify-content: space-between;
        justify-content: center;
        &::-webkit-scrollbar {
          width: 3px;
          height: 3px;
        }

        &::-webkit-scrollbar-track {
          background-color: #cecece;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #f6640a;
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: #f6640a;
        }
      }
    }

    &__content {
      font-style: normal;

      @media (max-width: 768px) {
        padding: 0 20px;
      }

      .decr {
        font-size: 22px;
        font-weight: 400;
        line-height: 131.818%;
        margin-bottom: 20px;

        @media (max-width: 576px) {
          font-size: 15px;
          line-height: 22px;
        }

        &-title {
          margin-bottom: 0px;
        }

        span {
          font-weight: 600;
        }
      }

      ul {
        margin-bottom: 20px;

        li {
          padding-left: 20px;
          font-size: 22px;
          font-weight: 400;
          line-height: 131.818%;
          position: relative;

          @media (max-width: 576px) {
            font-size: 15px;
            line-height: 22px;
          }

          &:before {
            content: "•";
            position: absolute;
            left: 5px;
          }

          span {
            font-weight: 300;
          }
        }
      }

      .nozzel-offer {
        display: flex;
        gap: 40px;

        @media (max-width: 1199px) {
          flex-direction: column;
          align-items: center;
          gap: 20px;
          justify-content: center;
        }

        @media (max-width: 768px) {
          flex-direction: column;
          gap: 10px;
        }
      }

      .offer-prices {
        display: grid;
        grid-template-columns: auto auto;
        max-width: 165px;
        align-items: center;
        gap: 5px;
        position: relative;

        @media (max-width: 1199px) {
          display: grid;
          grid-template-columns: auto;
          justify-items: center;
        }

        .new {
          grid-column: 1/3;
          grid-row: 2/3;

          @media (max-width: 1199px) {
            grid-column: 1/2;
          }

          p {
            white-space: nowrap;
            color: #323232;
            font-size: 27px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;

            @media (max-width: 576px) {
              font-size: 18px;
            }
          }
        }

        .old {
          grid-column: 1/2;
          grid-row: 1/2;

          @media (max-width: 1199px) {
            grid-row: 3/4;
          }

          p {
            white-space: nowrap;
            color: #c8c8c8;
            font-size: 18px;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
            text-decoration: line-through;

            @media (max-width: 576px) {
              font-size: 15px;
            }
          }
        }

        .discount {
          grid-column: 2/3;
          grid-row: 1/2;
          display: flex;
          padding: 5px 10px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 50px;
          background: #ff5655;

          @media (max-width: 1199px) {
            grid-column: 1/2;
          }

          @media (max-width: 576px) {
            padding: 0px 10px;
            grid-column: 1/2;
            max-width: max-content;
          }

          p {
            color: #fff;
            font-family: "Inter";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px;
            text-align: center;

            @media (max-width: 576px) {
              font-size: 12px;
              line-height: 19px;
            }
          }
        }
      }
    }

    .img-wrap {
      picture {
        justify-content: center;
      }
    }

    &__container {
      overflow: hidden;
      position: relative;

      @media (max-width: 1199px) {
        padding: 0 20px;
      }

      @media (max-width: 768px) {
        padding: 0 40px 0 20px;
      }

      .swiper-wrapper {
        @media (max-width: 1199px) and (min-width: 769px) {
          flex-direction: column;
          gap: 30px;
        }
      }

      .nozzel-prev,
      .nozzel-next {
        position: absolute;
        top: 50%;
        cursor: pointer;
        user-select: none;
        transform: translateY(-50%);
        z-index: 6;

        svg {
          display: block;
          max-width: 100%;

          circle {
            opacity: 0;
            transition: opacity 0.2s;
          }

          &:hover circle {
            opacity: 1;
          }
        }

        @media (max-width: 1199px) {
          display: none;
        }
      }

      .nozzel-next {
        right: 5px;
      }

      .nozzel-prev {
        left: 5px;
        transform: rotate(180deg) translateY(50%);
      }
    }
  }
}
</style>