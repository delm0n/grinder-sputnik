<template>
  <section id="things">
    <div class="container">
      <div class="title">
        <h2>«СПУТНИК» — ГРИНДЕР БОЛЬШИХ ВОЗМОЖНОСТЕЙ</h2>
        <p class="subtitle">
          С профессиональным станком любая задача станет проще
        </p>
      </div>

      <div class="things-container">
        <div class="things-wrapper">
          <div class="things-slider">
            <div class="swiper-wrapper">
              <div
                v-for="(item, index) in photoList"
                :key="index"
                class="swiper-slide things-item"
              >
                <my-image
                  :alt="item.title"
                  :floder="'things'"
                  :media="769"
                  :imgName="item.img"
                />

                <div class="things-item__title">
                  <p v-html="item.title"></p>
                </div>
              </div>
            </div>
            <div class="things-pagination"></div>
            <div class="things-prev">
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
            <div class="things-next">
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

      <div class="things-offer">
        <p>от {{ getMainPrices[0].toLocaleString() }} РУБ.</p>
        <button @click="openModal" class="button">
          {{ !getMobile ? "Оставить заявку" : "Заказать" }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";
import { Swiper, Pagination, Navigation } from "swiper";

export default {
  computed: mapGetters(["getMobile", "getMainPrices"]),
  components: {
    MyImage,
  },
  data() {
    return {
      photoList: [
        {
          title: "Полировка",
          img: "thing-1",
        },

        {
          title: "Торцовка",
          img: "thing-2",
        },

        {
          title: "Обработка дерева",
          img: "thing-3",
        },

        {
          title: "Зачистка",
          img: "thing-4",
        },

        {
          title: "Заточка",
          img: "thing-5",
        },

        {
          title: "Снятие фасок",
          img: "thing-6",
        },

        {
          title: "Вывод спусков",
          img: "thing-7",
        },

        {
          title: "Обработка выпуклых <br> поверхностей",
          img: "thing-8",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["changeUserRassrochka"]),

    openModal() {
      this.changeUserRassrochka(false);

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-order",
          },
        ]);
      }, 10);
    },
  },
  mounted() {
    let myPhotoSwiper;
    const photoSwiper = () => {
      myPhotoSwiper = new Swiper(".things-slider", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: false,
        pagination: {
          el: ".things-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".things-next",
          prevEl: ".things-prev",
        },
        modules: [Pagination, Navigation],
        breakpoints: {
          0: {
            slidesPerView: "auto",
            spaceBetween: 10,
            loop: false,
          },

          768: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },

          993: {
            slidesPerView: 3,
          },

          1137: {
            slidesPerView: 4,
          },
        },
      });
    };
    photoSwiper();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#things {
  @extend %padd;
  overflow: hidden;

  .things-container {
    position: relative;
    padding: 0 40px;

    @media (max-width: 768px) {
      padding: 0;
      // max-width: 370px;
      // margin: 0 auto;
    }

    .things-prev,
    .things-next {
      @media (max-width: 768px) {
        display: none;
      }

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 6;

      &.swiper-button-disabled {
        opacity: 0.6;
      }
    }
    .things-prev {
      left: 0;
      @media (max-width: 576px) {
        left: -14px;
      }
    }
    .things-next {
      right: 0;
      @media (max-width: 576px) {
        right: -14px;
      }
    }
  }

  .things-wrapper {
    overflow: hidden;
    .swiper-slide {
      @media (max-width: 576px) {
        max-width: 250px;
      }
    }
  }

  .things-offer {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;

    @media (max-width: 576px) {
      flex-direction: column;
      gap: 10px;
      margin-top: 30px;
    }

    p {
      color: #323232;
      font-family: "Gilroy";
      font-size: 27px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      white-space: nowrap;

      @media (max-width: 576px) {
        font-size: 18px;
      }
    }
  }

  .things-pagination {
    @media (min-width: 993px) {
      display: none;
    }

    margin-top: 10px;
    height: 2px;
    position: relative;
    background: #cecece;
    .swiper-pagination-progressbar-fill {
      background: #f6640a;
    }
  }

  .things-item {
    overflow: hidden;
    border-radius: 10px;

    width: 100%;
    @media (max-width: 768px) {
      max-width: 306px;
    }
    .img-wrap {
      aspect-ratio: 306 / 512;
      width: 100%;

      img {
        width: 100%;
      }

      @media (max-width: 768px) {
        aspect-ratio: 306/306;
      }
    }

    &__title {
      background: #f6640a;
      height: 89px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      @media (max-width: 576px) {
        height: 70px;
      }

      p {
        font-family: "Gilroy";
        font-size: 27px;
        font-weight: 700;
        text-align: center;
        color: #fff;
        @include fluidFontSize(20, 27, 769, 1920);

        @media (max-width: 576px) {
          font-size: 18px;
        }
      }
    }
  }
}
</style>