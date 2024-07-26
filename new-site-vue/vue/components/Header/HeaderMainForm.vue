<template>
  <div class="header-main-form">
    <div class="header-main-form--box">
      <div class="header-offer">
        <p>
          <span class="red">ДО {{ getDateHeader }}</span>

          Закажи&nbsp;гриндер
        </p>
        <p>
          <span class="red">с выгодой {{ getMainItem.sale }}</span>
          до&nbsp;повышения <br />
          3&nbsp;ленты&nbsp;-&nbsp;в&nbsp;комплекте
        </p>
      </div>
      <div class="header-prices">
        <div class="header-prices-wrap">
          <div v-cloak class="new-price">
            <span>
              {{ getLastPrice.toLocaleString() }}
            </span>
            ₽
          </div>
          <div v-cloak class="old-price">
            <span>
              {{ getLastOldPrice.toLocaleString() }}
            </span>
            ₽
          </div>
        </div>
        <p class="info">
          Оплата только после получения и осмотра. 100% гарантия безопасности
        </p>
      </div>

      <form action="" v-on:submit.prevent method="post" class="spnForm">
        <div class="user-info">
          <droplist
            :repeat="true"
            :array="getMain"
            @action-droplist="selectMain"
          />
          <input
            v-model="getUser.name"
            class="my-input"
            aria-label="Ваше имя"
            type="text"
            name="name"
            autocomplete="off"
            placeholder="Имя"
            required=""
          />
          <input
            class="my-input"
            aria-label="Ваш номер телефона"
            type="tel"
            name="phone"
            autocomplete="off"
            placeholder="Номер телефона"
            required=""
          />
        </div>

        <div class="dop-container">
          <p class="dop-title">Добавьте в заказ</p>

          <label
            v-for="(item, index) in getDopsFilter"
            :key="index"
            class="custom-checkbox"
            ><input
              class="custom-checkbox__input"
              type="checkbox"
              v-model="item.selected" /><span
              class="custom-checkbox__check"
              v-html="item.name"
            ></span
          ></label>
        </div>
        <div class="button-offer">
          <button
            @click="openModalSuccessOrder"
            type="submit"
            :class="[!isTest ? ' button' : 'button']"
          >
            Заказать
          </button>
          <div @click="showModal" class="button button-tinkoff">
            <my-image
              class="tinkoff-icon"
              :alt="'#'"
              :imgName="'tinkoff'"
              :floder="'src'"
              :mobile="false"
            />
          </div>
        </div>

        <form-helicon :main="true" :rassr="false" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormHelicon from "../FormHelicon.vue";
import Droplist from "../../UI/Droplist.vue";
import MyImage from "../../UI/MyImage.vue";
import { DOPTYPES } from "../../../js/vars/dop-types";

export default {
  computed: {
    ...mapGetters([
      "getMain",
      "getDateHeader",
      "getMainItem",
      "getLastPrice",
      "getLastOldPrice",
      "getDops",
      "getUser",
      "isTest",
    ]),

    getDopsFilter() {
      return this.getDops.filter((el) => el.headerForm);
    },
  },
  components: { FormHelicon, Droplist, MyImage },
  methods: {
    ...mapMutations([
      "selectMain",
      "changeUserRassrochka",
      "openModalSuccessOrder",
    ]),

    showModal() {
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
@import "../../../scss/_global.scss";

.header-main-form {
  width: 100%;
  font-family: "Gilroy";
  background: #ffffff;
  border: 2px solid #dadada;
  border-radius: 10px;
  padding: 30px 30px 36px;

  @media (max-width: 575px) {
    padding: 20px;
  }

  &--box {
    @media (max-width: 1366px) {
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .button-offer {
    display: flex;
    gap: 16px;
    margin-top: 30px;

    @media (max-width: 1366px) {
      justify-content: center;
    }

    @media (max-width: 576px) {
      gap: 10px;
    }

    .button-tinkoff {
      width: 77px;
      flex-grow: 0;
      flex-shrink: 0;

      @media (max-width: 576px) {
        padding: 0;
        width: 50px;
      }
    }
  }

  .dop-container {
    margin-top: 30px;

    .dop-title {
      color: #323232;
      font-family: "Gilroy";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 14px;
      margin-bottom: 20px;

      @media (max-width: 576px) {
        font-size: 16px;
        line-height: 14px;
        /* 87.5% */
      }
    }

    .custom-checkbox {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 17px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      &:hover .custom-checkbox__check:after {
        border-color: #2bc591;
        box-shadow: 0 0 5px 1px rgba(43, 197, 145, 0.45);
      }

      &__input {
        opacity: 0;
        pointer-events: none;
        position: absolute;

        &:checked + .custom-checkbox__check:after {
          background-color: #2bc591;
          border-color: #2bc591;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjE0Mjg4IDQuMDAwMDJMMy43MTQzMSA3LjIxNDNMOC44NTcxNyAxLjQyODU5IiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);
        }
      }

      &__check {
        padding-left: 26px;
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 14px;
        color: #323232;
        display: block;
        line-height: 21px;

        @media (max-width: 575px) {
          font-size: 16px;
          line-height: 16px;
        }

        &:after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          background-color: #fff;

          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          border: 1px solid #dadada;
          border-radius: 4px;
          background-position: center;
          background-repeat: no-repeat;
          transition: 0.4s all;
        }
      }
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      max-width: 100%;
    }
  }

  .header-offer {
    padding: 0;
    margin: 0;
    background: none;
    margin-bottom: 20px;

    @media (max-width: 575px) {
      margin-bottom: 15px;
    }

    p {
      font-weight: 900;
      text-transform: uppercase;
      font-size: 22px;
      line-height: 140%;
      text-align: center;

      @media (min-width: 1367px) {
        @include fluidFontSize(18, 22, 1367, 1920);
      }

      @media (max-width: 575px) {
        font-size: 3.8vw;
        line-height: 1.4;
        font-weight: 700;
      }
    }

    .red {
      //   font-weight: 600;
      color: #ff4e4e;
    }
  }

  .header-prices {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14px;
    border-top: 2px solid #dadada;
    max-width: 335px;
    margin: 0 auto 20px;
  }

  .header-prices-wrap {
    display: flex;
    align-items: center;
    width: fit-content;
    max-width: 100%;

    @media (max-width: 575px) {
      flex-direction: column;
    }
  }

  .old-price {
    margin-left: 25px;
    font-family: "Gilroy";
    font-weight: 400;
    font-size: 30px;
    line-height: 43px;
    text-decoration-line: line-through;

    color: #5f5f5f;

    @media (max-width: 575px) {
      padding: 0;
      margin: 0;
      font-size: 20px;
      line-height: 29px;
    }
  }

  .new-price {
    font-family: "Gilroy";
    font-weight: 900;
    font-size: 40px;
    line-height: 58px;
    letter-spacing: -0.05em;
    color: #2d2d2d;

    @media (max-width: 575px) {
      padding: 0;
      margin: 0;
      font-size: 35px;
      line-height: 36px;
    }
  }

  .info {
    margin: 4px 0 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #9b9b9b;

    line-height: 156.25%;

    @media (max-width: 1340px) {
      max-width: 600px;
    }

    @media (max-width: 575px) {
      font-size: 15px;
      line-height: 23px;
    }
  }
}
</style>