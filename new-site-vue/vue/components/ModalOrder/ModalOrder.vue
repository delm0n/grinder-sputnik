<template>
  <div id="modal-order" ref="myModal">
    <form
      action=""
      v-on:submit.prevent
      method="post"
      class="spnForm order-wrapper"
    >
      <div class="order-wrapper__title">
        <h3 class="content-title">Оформление заказа</h3>
        <p class="content-descr">
          После отправки формы мы свяжемся с Вами в течение 10 минут и уточним
          детали доставки
        </p>
      </div>

      <modal-order-main-list
        @change-showdop="showdop = !showdop"
        :showdop="showdop"
        :wndw="wndw"
        class="order-wrapper__mainlist"
      />

      <modal-order-dop-list
        :showdop="collapseDops"
        :class="['order-wrapper__doplist', collapseDops ? 'mt-crutch' : '']"
      />

      <modal-order-img class="order-wrapper__img" />

      <modal-order-input class="order-wrapper__input" />

      <modal-order-offer class="order-wrapper__offer" />

      <modal-order-price
        :class="['order-wrapper__price', !collapseDops ? 'mt-crutch' : '']"
      />

      <form-helicon :rassr="true" :main="true" />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FormHelicon from "../FormHelicon.vue";
import ModalOrderDopList from "./ModalOrderDopList.vue";
import ModalOrderInput from "./ModalOrderInput.vue";
import ModalOrderMainList from "./ModalOrderMainList.vue";
import ModalOrderOffer from "./ModalOrderOffer.vue";
import ModalOrderPrice from "./ModalOrderPrice.vue";
import ModalOrderImg from "./ModalOrderImg.vue";

export default {
  data() {
    return {
      wndw: window.innerWidth,
      showdop: false,
      observer: null,
    };
  },
  components: {
    ModalOrderMainList,
    ModalOrderDopList,
    FormHelicon,
    ModalOrderInput,
    ModalOrderPrice,
    ModalOrderOffer,
    ModalOrderImg,
  },
  computed: {
    ...mapGetters(["getDopsSelectedBoolean"]),

    collapseDops() {
      return this.wndw < 1281 ? this.showdop : true;
    },
  },

  mounted() {
    addEventListener("resize", (event) => {
      this.wndw = window.innerWidth;
    });

    //если есть активный доп, то автоматически разворачивается при открытии модального окна
    this.$nextTick(() => {
      this.observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          this.getDopsSelectedBoolean
            ? (this.showdop = true)
            : (this.showdop = false);
        }
      });

      this.observer.observe(this.$refs.myModal, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["style"],
      });
    });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
};
</script>

<style lang="scss">
@import "../../../scss/_global.scss";

#modal-order {
  background: #ffffff;
  border-radius: 10px;
  display: none;
  width: 100%;
  max-width: 1300px;

  cursor: default;
  font-family: "Gilroy";
  color: #323232;
  padding: 0;

  @media (max-width: 1280px) {
    max-width: 720px;
  }
  @media (max-width: 992px) {
    max-width: 640px;
  }
  @media (max-width: 768px) {
    max-width: 380px;
  }
  .is-close {
    width: 100px;

    &::before {
      content: "Закрыть";
      color: #fff;
      font-family: "Inter";
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
    svg {
      display: none;
    }
  }

  .order-wrapper {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 35% auto minmax(200px, 310px);

    @media (min-width: 1360px) {
      grid-template-columns: 35% auto minmax(277px, 310px);
    }

    @media (max-width: 1280px) {
      grid-template-columns: 1fr 0.8fr;
      gap: 20px;
    }

    &__title {
      grid-column: 2/4;
      grid-row: 1/2;
      margin: 30px 30px 0;
      padding-bottom: 20px;
      border-bottom: 1px solid #d0d0d0;

      @media (max-width: 1280px) {
        grid-row: 1/2;
        grid-column: 1/3;
        text-align: center;
      }

      @media (max-width: 768px) {
        margin: 20px 20px 0;
      }

      .content-title {
        font-size: 27px;
        font-weight: 600;
        line-height: 34px;

        @media (max-width: 1024px) {
          font-size: 22px;
          line-height: 29px;
        }
      }

      .content-descr {
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        margin-top: 10px;

        @media (max-width: 1024px) {
          font-size: 18px;
          line-height: 25px;
        }
      }
    }

    &__mainlist {
      grid-column: 2/4;
      grid-row: 2/3;
      margin: 20px 30px 0;

      @media (max-width: 1280px) {
        grid-column: 2/3;
        grid-row: 3/4;
        margin: 0 30px 0 0;
        align-self: flex-start;
      }

      @media (max-width: 768px) {
        margin: 0 20px;
        grid-column: 1/3;
        grid-row: 4/5;
      }
    }

    &__doplist {
      grid-column: 2/4;
      grid-row: 3/4;
      margin: 0 30px 0;
      padding-bottom: 20px;
      // border-bottom: 1px solid #d0d0d0;

      @media (max-width: 1280px) {
        grid-column: 1/3;
        grid-row: 4/5;

        padding-bottom: 0;
        // border-bottom: none;
      }

      @media (max-width: 768px) {
        margin: 0 20px 0;
        grid-column: 1/3;
        grid-row: 5/6;

        &.mt-crutch {
          margin-top: -20px;
        }
      }
    }

    &__img {
      grid-column: 1/2;
      grid-row: 1/4;
      padding: 30px 0 20px;

      @media (max-width: 1280px) {
        grid-column: 1/2;
        grid-row: 2/4;
        padding: 15px 0;
        margin: 0 0 0 30px;
      }

      @media (max-width: 768px) {
        margin: 0 20px;
        grid-row: 3/4;
        grid-column: 1/3;
      }
    }

    &__input {
      grid-column: 2/3;
      grid-row: 4/5;
      padding: 20px 15px 30px 30px;
      background: #323232;

      @media (max-width: 1280px) {
        background: none;
        padding: 0;
        grid-column: 2/3;
        grid-row: 2/3;
        margin: 0 30px 0 0;
        align-self: flex-end;
      }

      @media (max-width: 768px) {
        margin: 0 20px;
        grid-row: 2/3;
        grid-column: 1/3;
      }
    }

    &__price {
      grid-column: 1/2;
      grid-row: 4/5;
      background: #323232;
      padding: 20px 30px;

      @media (max-width: 1280px) {
        grid-column: 1/3;
        grid-row: 5/6;

        &.mt-crutch {
          margin-top: -20px;
        }
      }

      @media (max-width: 768px) {
        padding: 20px 20px;

        grid-column: 1/3;
        grid-row: 6/7;
      }
    }

    &__offer {
      grid-column: 3/4;
      grid-row: 4/5;
      padding: 20px 30px 0 0;
      background: #323232;

      @media (max-width: 1280px) {
        padding: 0;
        background: none;
        grid-column: 1/3;
        grid-row: 6/7;
        margin: 0 auto;
      }

      @media (max-width: 768px) {
        grid-column: 1/3;
        grid-row: 7/8;
      }
    }
  }
}
</style>