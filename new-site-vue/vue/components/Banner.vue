<template>
  <section id="season-banner" :class="[getWebp, seasonCondition()]">
    <div class="season-banner container">
      <div class="season-banner__title">
        <p class="title-main">{{ seasonCondition(true) }}</p>

        <p class="title-sub">Успей забрать гриндер «Удачный» по суперцене!</p>
      </div>

      <div class="season-banner__container">
        <div
          v-for="(item, index) in getMain"
          v-bind:key="index"
          class="season-banner__item"
        >
          <div class="item-content">
            <div class="item-content__name">
              <div
                :class="[
                  'svg-box checkbox-svg-box',
                  item.selected ? ' svg-box--active' : '',
                ]"
                @click="selectMain(item.id)"
              >
                <div v-show="item.selected"></div>
              </div>
              <p v-html="item.name"></p>
            </div>
            <div class="item-content__price">
              <p class="new">{{ item.price.toLocaleString() }} РУБ.</p>
              <p class="old">{{ item.oldPrice.toLocaleString() }} РУБ.</p>
            </div>
          </div>
          <div class="item-sale">
            <p v-html="'-' + item.sale"></p>
          </div>
        </div>

        <div class="season-banner__offer">
          <p>ИТОГО: {{ getLastPrice.toLocaleString() }} РУБ.</p>
          <a
            @click="openModal"
            href="#order-model"
            data-touch="false"
            :class="[!isTest ? ' button' : 'button']"
            class="button-green fancybox"
            >Заказать с выгодой</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  computed: mapGetters([
    "getDops",
    "getLastPrice",
    "getWebp",
    "getMain",
    "isTest",
  ]),
  methods: {
    ...mapMutations(["selectDop", "selectMain", "changeUserRassrochka"]),

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

    seasonCondition(retText = false) {
      const dateCond = new Date().getMonth();

      this.seasonHeader = "";
      this.seasonClass = "";

      if (dateCond === 11 || dateCond === 0 || dateCond === 1) {
        this.seasonHeader = "Зимняя распродажа!";
        this.seasonClass = "winter-new";
      }
      if (dateCond === 2 || dateCond === 3 || dateCond === 4) {
        this.seasonHeader = "Открываем дачный сезон!";
        this.seasonClass = "spring-new";
      }
      if (dateCond === 5 || dateCond === 6 || dateCond === 7) {
        this.seasonHeader = "Жаркая распродажа!";
        this.seasonClass = "summer-new";
      }
      if (dateCond === 8 || dateCond === 9 || dateCond === 10) {
        this.seasonHeader = "Завершаем дачный сезон!";
        this.seasonClass = "autumn-new";
      }

      return retText ? this.seasonHeader : this.seasonClass;
    },
  },

  components: {
    MyImage,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#season-banner {
  @mixin banner($format) {
    background: url("/images/conditional-banner/winter-new." + $format)
      no-repeat #f6fcfa;
    background-position: 50%;
    overflow: hidden;
    background-size: cover;

    &.winter-new {
      background-image: url("/images/conditional-banner/winter-new." + $format) !important;

      .season-banner__title {
        background-color: #f6640a;
      }
    }
    &.spring-new {
      background-image: url("/images/conditional-banner/spring-new." + $format) !important;

      .season-banner__title {
        background-color: #c6a2ff;
      }
    }
    &.summer-new {
      background-image: url("/images/conditional-banner/summer-new." + $format) !important;

      .season-banner__title {
        background-color: #f6640a;
      }
    }
    &.autumn-new {
      background-image: url("/images/conditional-banner/autumn-new." + $format) !important;

      .season-banner__title {
        background-color: #5c2c2c;
      }
    }

    @media (max-width: 1280px) {
      background-size: cover;
    }

    @media (max-width: 768px) {
      background-image: url("/images/winter-banner/winter-bg--mobile." + $format) !important;
      background-color: #f6fcfa;
      background-repeat: no-repeat;
      background-position: bottom right;
      background-size: 100% auto;

      &.spring-new {
        background-image: url("/images/conditional-banner/spring-new--mobile." + $format) !important;
      }
      &.summer-new {
        background-image: url("/images/conditional-banner/summer-new--mobile." + $format) !important;
      }
      &.autumn-new {
        background-image: url("/images/conditional-banner/autumn-new--mobile." + $format) !important;
      }
    }
  }

  &.webp {
    @include banner("webp");
  }

  &.png {
    @include banner("png");
  }

  .season-banner {
    // max-width: 1420px;
    // margin: 0 auto;
    padding: 100px 20px;

    @media (max-width: 768px) {
      padding: 50px 20px;
    }
    @media (max-width: 576px) {
      max-width: 425px;
    }
    &__container {
      @media (min-width: 992px) {
        padding-left: 30px;
      }
    }

    &__title {
      padding: 20px 30px;
      border-radius: 20px;
      background: #f6640a;
      margin-bottom: 50px;
      width: max-content;
      max-width: 100%;

      @media (max-width: 768px) {
        margin: 0 auto 30px;
      }

      .title-main {
        color: #fff;
        font-family: "Gilroy";
        font-size: 44px;
        font-style: normal;
        font-weight: 1000;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 10px;

        @media (max-width: 768px) {
          font-size: 22px;
          text-align: center;
        }
      }

      .title-sub {
        color: #fff;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 34px; /* 154.545% */

        @media (max-width: 768px) {
          font-size: 18px;
          text-align: center;
        }
      }
    }

    &__item {
      display: flex;
      position: relative;
      max-width: 756px;
      width: 100%;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.15);

      &:not(:last-child) {
        margin-bottom: 20px;

        @media (max-width: 576px) {
          margin-bottom: 10px;
        }
      }

      .item-content {
        padding: 15px 20px;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;

        @media (max-width: 576px) {
          flex-direction: column;
          align-items: flex-start;
          padding: 10px;
        }

        &__name {
          display: flex;
          gap: 10px;
          align-items: center;

          p {
            color: #565656;
            font-family: "Gilroy";
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 25px;
            @media (max-width: 576px) {
              font-size: 16px;
              margin-right: 30px;
            }
          }
        }

        &__price {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 5px;

          @media (max-width: 576px) {
            flex-direction: row;
            padding-left: 40px;
            align-items: flex-end;
          }

          .new {
            color: #323232;
            text-align: right;
            font-family: "Gilroy";
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            white-space: nowrap;

            @media (max-width: 576px) {
              font-size: 18px;
            }
          }

          .old {
            color: #c8c8c8;
            text-align: right;
            font-family: "Gilroy";
            font-size: 18px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            white-space: nowrap;
            text-decoration: line-through;

            @media (max-width: 576px) {
              font-size: 15px;
            }
          }
        }
      }

      .item-sale {
        padding: 9px;
        background: #ff4e4f;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 576px) {
          border-radius: 0px 10px 0px 4px;
          background: #ff4e4f;
          padding: 10px 3px 8px 2px;
          position: absolute;
          right: 0;
          width: 30px;
        }
        p {
          color: #fff;
          // text-align: right;
          font-family: "Gilroy";
          font-size: 27px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;

          width: 68px;
          text-align: center;

          @media (max-width: 576px) {
            font-size: 10.8px;
          }
        }
      }
    }

    &__offer {
      display: flex;
      gap: 30px;
      align-items: center;
      margin-top: 50px;

      @media (max-width: 768px) {
        margin: 30px auto 0;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
      }

      @media (max-width: 576px) {
        gap: 10px;
        flex-direction: column;
      }

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 27px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        @media (max-width: 576px) {
          font-size: 18px;
          letter-spacing: 0.36px;
        }
      }

      .button-green {
        max-width: 340px;
      }
    }
  }
}
</style>