<template>
  <section id="tinkoff-block">
    <div class="container">
      <div class="row">
        <div
          v-for="(item, idx) in rassrochkaItems"
          :key="idx"
          class="rassrochka__item-box"
        >
          <div class="rassrochka__item-wrap">
            <p class="rassrochka__item-title">{{ item.title }}</p>
            <p class="rassrochka__item-text" v-html="item.text"></p>
            <div class="rassrochka__item-imgs-wrap">
              <my-image
                v-for="(img, index) in item.imgs"
                :key="index"
                :alt="'#'"
                :imgName="img"
                :floder="'rassrochka'"
                :media="577"
              />
            </div>
          </div>
        </div>
        <div class="bank-box">
          <div class="bank-box__img">
            <my-image
              class="logo"
              :alt="'автоклав крестьянка в рассрочку'"
              :imgName="'tinkoff-logo'"
              :floder="'rassrochka'"
              :media="577"
            />

            <div>
              <p className="bank-box__title">Рассрочка от&nbsp;Тинькофф</p>
              <p className="bank-box__subtitle">
                на 4 месяца без процентов и&nbsp;переплат
              </p>
            </div>
          </div>
          <div class="bank-box__text">
            <div
              class="bank-box__step"
              v-for="(step, index) in steps"
              :key="index"
            >
              <span>Шаг {{ index + 1 }}</span>
              <p v-html="step"></p>
            </div>

            <div class="bank-box__offer">
              <button @click="openModal" class="button button-tinkoff">
                <my-image
                  class="tinkoff-icon"
                  :alt="'#'"
                  :imgName="'tinkoff'"
                  :floder="'src'"
                  :mobile="false"
                />
                Заказать
              </button>
              <p>
                от {{ Math.round(getMainPrices[0] / 4).toLocaleString() }} РУБ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: { MyImage },
  data() {
    return {
      rassrochkaItems: [
        {
          title: "Доставка",
          text: "по всей России от 1&nbsp;дня курьером&nbsp;или&nbsp;ТК",
          imgs: ["dpd", "delovie-linii", "pochta", "peck"],
        },
        {
          title: "Оплата",
          text: "картой или наличными после получения товара",
          imgs: ["mastercard", "mir", "visa"],
        },
      ],

      steps: [
        "Нажмите кнопку «Купить в рассрочку».",
        "В появившемся окне выберите <br> нужную комплектацию.",
        "Нажмите «Заказать».",
      ],
    };
  },
  computed: mapGetters(["getMainPrices"]),

  methods: {
    ...mapMutations(["changeUserRassrochka"]),

    openModal() {
      this.changeUserRassrochka(true);
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#tinkoff-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#tinkoff-block {
  @extend %padd;
  background: #f9f9f9;

  .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    gap: 30px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  .rassrochka__item {
    &-wrap {
      width: 100%;
      height: 100%;
      padding: 30px;
      // background: linear-gradient(
      //   103.2deg,
      //   rgba(244, 244, 244, 0.78) -29.21%,
      //   rgba(238, 238, 238, 0.24) 82.36%
      // );
      // border-radius: 10px;

      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);

      @media (max-width: 575px) {
        padding: 30px 20px;
      }
    }

    &-title {
      margin-bottom: 20px;

      color: #323232;
      font-family: "Gilroy";
      font-size: 52px;
      font-style: normal;
      font-weight: 600;
      line-height: 113.462%;

      @include fluidFontSize(38, 52, 992, 1920);

      @media (max-width: 992px) {
        margin-bottom: 10px;
      }

      @media (max-width: 768px) {
        font-size: 27px;
        line-height: 34px;
      }
    }

    &-text {
      color: #646464;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 131.818%;

      @include fluidFontSize(20, 22, 992, 1920);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
      }
    }

    &-imgs-wrap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
      width: 100%;
      column-gap: 35px;
      row-gap: 30px;
      margin-top: 40px;

      @media (max-width: 425px) {
        flex-wrap: wrap;
      }

      img {
        max-width: 100%;
      }

      @media (max-width: 575px) {
        column-gap: 20px;
        row-gap: 30px;
        margin-top: 28px;
      }
    }
  }

  .bank-box {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    grid-column: 2/3;
    grid-row: 1/3;

    @media (max-width: 1024px) {
      grid-column: 1/2;
      grid-row: 3/4;
    }

    .logo {
      margin-bottom: 15px;
    }

    &__title {
      color: #323232;
      font-family: "Gilroy";
      font-size: 52px;
      font-style: normal;
      font-weight: 600;
      line-height: 113.462%;
      margin-bottom: 20px;

      @include fluidFontSize(38, 52, 992, 1920);

      @media (max-width: 768px) {
        font-size: 27px;
        margin-bottom: 10px;
        line-height: 34px;
      }

      @media (max-width: 576px) {
        text-align: center;
      }
    }

    &__subtitle {
      color: #646464;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 131.818%;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 24px;
      }

      @media (max-width: 576px) {
        text-align: center;
      }
    }

    &__img {
      align-items: center;
      background: #fceb0a;
      border-radius: 10px 10px 0 0;
      // display: flex;
      // flex-direction: column;
      height: 100%;
      // justify-content: center;
      max-height: 50%;
      padding: 30px;

      align-items: center;
      justify-content: center;
      display: grid;
      gap: 30px;

      @media (max-width: 768px) {
        gap: 10px;
      }

      picture {
        justify-content: center;
      }

      @media (min-width: 577px) {
        grid-template-columns: 1fr 76%;
      }
    }

    &__text {
      flex-grow: 1;
      padding: 30px;

      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);

      @media (max-width: 768px) {
        padding: 30px 20px;
      }
    }

    &__step {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 20px;

        @media (max-width: 768px) {
          margin-bottom: 10px;
        }
      }

      span {
        margin-right: 13px;
        color: #323232;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        white-space: nowrap;

        @include fluidFontSize(18, 22, 992, 1920);

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 25px;
        }
      }

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;

        @include fluidFontSize(18, 22, 992, 1920);

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 25px;
        }
      }
    }

    &__offer {
      display: flex;
      // justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 40px;
      gap: 23px;

      @media (max-width: 768px) {
        gap: 20px;
        flex-direction: column-reverse;
        margin-top: 20px;
      }

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.36px;

        @media (max-width: 768px) {
          font-size: 22px;
          font-weight: 700;
          line-height: 29px;
        }
      }
    }
  }
}
</style>
