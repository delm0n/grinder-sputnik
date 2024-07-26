<template>
  <section class="lamp">
    <div class="container">
      <div class="lamp-wrapper">
        <div class="lamp-wrapper__container">
          <div class="swiper-wrapper">
            <div v-for="(lamp, i) in lamps" :key="i" class="swiper-slide">
              <my-image
                :alt="'#'"
                :floder="'lamp'"
                :imgName="lamp.img"
                :mobile="false"
              />
            </div>
          </div>
          <div class="lamp-wrapper__laptop">
            <div v-for="(lamp2, i) in lamps" :key="i" class="swiper-slide">
              <my-image
                :alt="'#'"
                :floder="'lamp'"
                :imgName="lamp2.img"
                :mobile="false"
              />
            </div>
          </div>
          <div class="lamp-prev">
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

          <div class="lamp-next">
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

        <div class="lamp-wrapper__content">
          <div class="lamp__made-pagination"></div>
          <h2 class="lamp-wrapper__title">Светильник станочный светодиодный</h2>
          <p class="lamp-wrapper__subtitle">
            Мечта мастера — мощное регулируемое освещение
          </p>

          <p class="decr">
            Гараж, домашняя мастерская — особое пространство, в том числе, для
            тонких работ (паяние, шлифовка, торцовка и т. п.). Настольные лампы
            здесь неэффективны: маломощные, занимают много места.
          </p>

          <p class="decr decr-title">
            <span>Характеристики:</span>
          </p>

          <ul>
            <li>Светодиодный, регулируемая мощность до 10 Вт</li>
            <li>Крепится на опорном столике станка (толщиной до 10 мм)</li>
            <li>Ножка гибкая, можно регулировать угол наклона</li>
          </ul>

          <p class="decr">
            Профессиональный светильник не имеет аналогов, удобен для любого
            мастера.
          </p>

          <template v-for="item in getDops">
            <div :key="item.id" class="lamp-offer" v-if="item.id == 483319">
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

    computed: mapGetters(["isTest", "getDops"]),
    mounted() {
        let myLampSwiper;
        const lampSwiper = () => {
            myLampSwiper = new Swiper(".lamp-wrapper__container", {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".lamp-next",
                    prevEl: ".lamp-prev",
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

.lamp {
  overflow: hidden;
  padding: 100px 0 50px 0;

  color: #323232;
  font-family: Gilroy;

  @media (max-width: 991px) {
    padding: 60px 0 30px 0;
  }

  @media (max-width: 576px) {
    padding: 30px 0 15px 0;
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

    img {
      @media (max-width: 768px) {
        background: #f9f9f9;
        border-radius: 8px;
      }
    }
  }

  .lamp-wrapper {
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
        justify-content: space-between;

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

      .lamp-offer {
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

      .lamp-prev,
      .lamp-next {
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

      .lamp-next {
        right: 5px;
      }

      .lamp-prev {
        left: 5px;
        transform: rotate(180deg) translateY(50%);
      }
    }
  }
}
</style>