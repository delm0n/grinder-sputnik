<template>
  <section id="comparison">
    <div
      :data-bg="'/new-site-vue/build//images/comparison/bg-4.' + getWebp"
      class="comparison-bg lazy"
    >
      <div class="container">
        <div class="comparison-wrapper">
          <div class="udachniy-wrapper">
            <div class="udachniy-wrapper__title">
              <my-image
                :alt="'самое '"
                :floder="'comparison'"
                :imgName="'star'"
                :mobile="false"
              />
              <p>
                Лучшее <br />
                промышленное <br />
                решение <br />
                {{ getYear }}&nbsp;года
              </p>
            </div>
            <div class="udachniy-wrapper__content">
              <div class="card-item">
                <my-image
                  class="card-item__img sputnik"
                  :alt="'Гриндер'"
                  :floder="'comparison'"
                  :mobile="false"
                  :imgName="'ginder'"
                />

                <div class="card-item__title">Гриндер «СПУТНИК»</div>
                <ul>
                  <li>1,5 кВт</li>
                  <li>Трёхфазный, с частотным преобразователем</li>
                  <li>Станина поворотная</li>
                  <li>Приводной шкив из капролона</li>
                  <li>Столик большой, регулируемый</li>
                  <li>Биение минимально за счёт конструкции</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="analog-slider__container">
            <div class="analog-slider">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in analogList"
                  :key="index"
                  class="swiper-slide"
                >
                  <div class="card-item bad">
                    <p class="card-item__subtitle">
                      Сравните, и всё станет очевидно
                    </p>

                    <my-image
                      class="card-item__img"
                      :alt="'аналог гриндера удачный'"
                      :floder="'comparison'"
                      :mobile="false"
                      :imgName="item.img"
                    />

                    <div class="card-item__title" v-html="item.title"></div>
                    <ul>
                      <li
                        v-for="(li, idx) in item.char"
                        :class="li.color ? 'green' : 'red'"
                        :key="idx"
                        v-html="li.text"
                      ></li>
                    </ul>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";
import { Swiper, Navigation } from "swiper";

export default {
  computed: mapGetters(["getWebp", "getYear"]),
  data() {
    return {
      analogList: [
        {
          img: "model-1",
          title: "Модель на 610 мм",
          char: [
            {
              text: "1,1 кВт",
              color: false,
            },

            {
              text: "Однофазный, без регулятора мощности",
              color: false,
            },

            {
              text: "Станина неподвижная",
              color: false,
            },

            {
              text: "Шкив стальной: высокий износ, перегрев",
              color: false,
            },

            {
              text: "Столик маленький, регулируемый",
              color: false,
            },

            {
              text: "Вибрация сильная в связи с малой массой",
              color: false,
            },
          ],
        },

        {
          img: "model-1",
          title: "Прямой аналог",
          char: [
            {
              text: "1,5 кВт",
              color: true,
            },

            {
              text: "Однофазный, с регулятором мощности",
              color: false,
            },

            {
              text: "Станина неподвижная",
              color: false,
            },

            {
              text: "Без ведущего ролика, риск соскальзывания ленты",
              color: false,
            },

            {
              text: "Столик маленький, регулируемый",
              color: false,
            },

            {
              text: "Вибрация сильная в связи с малой массой",
              color: false,
            },
          ],
        },
      ],
    };
  },
  components: {
    MyImage,
  },

  mounted() {
    let myCompareSwiper;
    const compareSwiper = () => {
      myCompareSwiper = new Swiper(".analog-slider", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,
        speed: 400,
        navigation: {
          nextEl: ".sldr-next",
          prevEl: ".sldr-prev",
        },
        modules: [Navigation],
      });
    };

    const windowbreakpoint = window.matchMedia(
      "(max-width: 1366px) and (min-width: 769px)"
    );
    const breakpointChecker = () => {
      if (windowbreakpoint.matches) {
        if (myCompareSwiper) {
          return myCompareSwiper.destroy(true, true);
        }
      } else {
        return compareSwiper();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();

    if (window.innerWidth > 767) {
      this.gsap.to("#comparison .comparison-bg", {
        backgroundPosition: "0% 70%",
        ease: "none",
        scrollTrigger: {
          trigger: "#comparison",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#comparison {
  overflow: hidden;
  max-width: 1920px;
  margin: 0 auto;

  .comparison-bg {
    @extend %padd;
    transition: all 0s ease;
    background-repeat: no-repeat !important;
    background-attachment: inherit !important;
    background-size: cover;
  }

  .comparison-wrapper {
    display: flex;
    gap: 30px;

    @media (max-width: 1366px) {
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }

    @media (max-width: 768px) {
      margin: 0 auto;
      max-width: 453px;
      gap: 30px;
    }

    .udachniy-wrapper {
      display: flex;
      align-items: stretch;

      @media (max-width: 1366px) {
        width: 100%;
      }

      @media (max-width: 768px) {
        flex-direction: column;
      }

      &__title {
        border-radius: 20px 0px 0px 20px;
        background: #f6640a;
        padding: 30px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 50px;

        @media (max-width: 1366px) and (min-width: 769px) {
          max-width: 50%;
          width: 100%;
        }

        @media (max-width: 768px) {
          gap: 20px;
          border-radius: 20px 20px 0px 0px;
          padding: 30px 20px;
        }

        p {
          color: #fff;
          text-align: center;
          font-family: "Gilroy";
          font-size: 34px;
          font-style: normal;
          font-weight: 600;
          line-height: 115%;
          text-transform: uppercase;

          @media (min-width: 1366px) {
            @include fluidFontSize(24, 34, 992, 1920);
          }

          @media (max-width: 768px) {
            br {
              display: none;
            }

            font-size: 22px;
            line-height: 29px;
          }
        }

        .img-wrap {
          margin: 0 auto;
          picture {
            justify-content: center;
          }

          img {
            aspect-ratio: 1 / 1;
            max-width: 240px;
            width: 100%;
          }

          @media (max-width: 768px) {
            max-width: 115px;
            width: 100%;
          }
        }
      }

      &__content {
        border-radius: 0 20px 20px 0;
        background: #fff;
        padding: 15px 30px 40px;
        max-width: 453px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 1366px) and (min-width: 769px) {
          max-width: 50%;
          width: 100%;
        }

        @media (max-width: 768px) {
          border-radius: 0px 0px 20px 20px;
        }

        @media (max-width: 576px) {
          padding: 15px 20px 30px;
        }
      }
    }

    .analog-slider {
      &__container {
        position: relative;

        padding: 0 60px;
        max-width: calc(33% + 60px * 2);

        @media (max-width: 1440px) {
          max-width: calc(31% + 30px * 2);
          padding: 0 30px;
        }

        @media (max-width: 1366px) {
          max-width: 453px;
          width: 100%;
          padding: 0px;
        }

        @media (max-width: 1366px) and (min-width: 769px) {
          max-width: 100%;
        }
      }

      .swiper-wrapper {
        @media (max-width: 1366px) and (min-width: 769px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;

          .swiper-slide {
            opacity: 1 !important;
          }
        }

        .swiper-slide {
          height: auto;
          transition: opacity 0.1s;
          opacity: 0;

          //   .card-item {
          padding: 30px 30px 40px;
          border-radius: 20px;
          background: #fff;

          @include aspect() {
            aspect-ratio: 381/257;
          }

          @media (max-width: 576px) {
            padding: 20px 20px 30px;
          }
          //   }

          &-active {
            opacity: 1;
          }
        }
      }
    }

    .card-item {
      font-family: "Gilroy";
      font-style: normal;
      color: #323232;

      &__img {
        margin-bottom: 30px;
      }

      &__title {
        font-size: 27px;
        font-weight: 700;
        line-height: 125.926%;
        margin-bottom: 10px;

        @include fluidFontSize(24, 27, 992, 1920);

        @media (max-width: 768px) {
          font-size: 22px;
          line-height: 29px;
        }
      }

      &__subtitle {
        color: #646464;
        font-size: 22px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 30px;
        @include fluidFontSize(20, 22, 992, 1920);
        text-align: center;

        @media (max-width: 1366px) {
          display: none;
        }
      }

      .sputnik {
        aspect-ratio: 374 / 307;
        width: 100%;
      }

      ul {
        padding-left: 22px;
        li {
          font-size: 22px;
          font-weight: 500;
          line-height: normal;
          position: relative;

          &:not(:last-child) {
            margin-bottom: 10px;
          }

          @include fluidFontSize(20, 22, 992, 1920);

          @media (max-width: 768px) {
            font-size: 18px;
          }

          &::before {
            content: "";
            position: absolute;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNiIgY3k9IjYuNSIgcj0iNiIgZmlsbD0iIzQ5QkYwMCIvPgo8L3N2Zz4K);
            width: 12px;
            height: 12px;
            top: 50%;
            left: -22px;
            transform: translateY(-50%);
          }
        }
      }

      &.bad {
        picture {
          justify-content: center;
        }

        ul li.red::before {
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBpZD0iRWxsaXBzZSAyNjEiIGN4PSI2IiBjeT0iNi41IiByPSI2IiBmaWxsPSIjRkYwMDAwIi8+Cjwvc3ZnPgo=);
        }
      }
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

    @media (min-width: 769px) {
      transition: all 0.3s;
      circle,
      path {
        transition: all 0.3s;
      }

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

    @media (max-width: 1366px) and (min-width: 769px) {
      display: none;
    }

    @media (max-width: 576px) {
      width: 25px;
      height: 25px;
    }
  }

  .sldr-next {
    right: 0;
    @media (max-width: 1366px) {
      transform: translate(50%);
    }
  }
  .sldr-prev {
    left: 0;
    @media (max-width: 1366px) {
      transform: translate(-50%);
    }
  }
}
</style>