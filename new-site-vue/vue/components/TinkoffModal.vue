<template>
  <div id="tinkoff-modal">
    <div class="tinkoff-wrapper">
      <div class="tinkoff-wrapper__img">
        <my-image
          :alt="'Тинькофф'"
          :floder="'rassrochka'"
          :imgName="'tinkoff'"
          :mobile="false"
        />
      </div>

      <form
        action=""
        v-on:submit.prevent
        method="post"
        class="spnForm tinkoff-wrapper__content"
      >
        <p class="tinkoff-title">Рассрочка от Тинькофф</p>

        <ul>
          <li
            v-for="(item, index) in [
              'На 4 месяца',
              'Без первого взноса',
              'Без переплат',
            ]"
            :key="index"
            class="tinkoff-li"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <rect y="0.5" width="30" height="30" rx="15" fill="#34A848" />
              <path
                d="M6.875 14.875L12.5 20.5L21.875 11.125"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>

            <span v-html="item"></span>
          </li>
        </ul>

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
            v-model="getUser.phone"
            class="my-input"
            aria-label="Ваш номер телефона"
            type="tel"
            name="phone"
            autocomplete="off"
            placeholder="+7"
            required=""
          />
        </div>

        <div class="tinkoff-offer">
          <p class="tinkoff-price">
            {{ Math.round(getMainItem.price / 4).toLocaleString() }} РУБ/МЕС
          </p>

          <button
            @click="openModalSuccessOrder"
            type="submit"
            class="button button-tinkoff"
          >
            Купить в рассрочку
          </button>

          <p class="decr">
            Мы свяжемся с Вами в течение 10 минут и уточним детали заказа
          </p>
        </div>

        <form-helicon :main="true" :rassr="true" :dops="false" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormHelicon from "./FormHelicon.vue";
import Droplist from "../UI/Droplist.vue";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { FormHelicon, Droplist, MyImage },
  computed: mapGetters(["getMain", "getUser", "getMainItem"]),
  methods: mapMutations(["selectMain", "openModalSuccessOrder"]),
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#tinkoff-modal {
  @extend %modal;
  padding-bottom: 10px !important;

  @media (max-width: 425px) {
    padding: 20px;
  }

  .tinkoff-wrapper {
    display: grid;
    grid-template-columns: 1.1fr 1.05fr;
    gap: 0 30px;
    align-items: center;
    color: #323232;
    font-family: "Gilroy";
    font-style: normal;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media (max-width: 768px) {
        gap: 25px;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      &__img {
        display: none;
      }
    }
  }

  .tinkoff-li {
    display: flex;
    align-items: center;
    gap: 10px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    span {
      display: block;
      color: #323232;
      font-family: "Gilroy";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 25px; /* 138.889% */

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: normal;
      }
    }

    @media (max-width: 768px) {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .tinkoff-title {
    font-size: 27px;

    font-weight: 600;
    line-height: 34px; /* 125.926% */

    @media (max-width: 768px) {
      font-size: 22px;
      text-align: center;
      line-height: normal;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 358px;
    width: 100%;

    @media (max-width: 768px) {
      gap: 15px;
    }

    input {
      max-width: 100%;

      border-color: #f3f3f3;
      background: #f3f3f3;

      &::-webkit-input-placeholder,
      &::-moz-placeholder,
      &:-moz-placeholder,
      &:-ms-input-placeholder {
        color: #8b8b8b;
      }
    }
  }

  .dropdown {
    .dropdown-hero {
      border: 3px solid #646464;

      @media (max-width: 768px) {
        padding: 13px 10px;
      }

      p {
        color: #565656;
        font-family: "Gilroy";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }

    .dropdown-list {
      border: 3px solid #646464;
    }
  }

  .tinkoff-offer {
    .button-tinkoff {
      border-radius: 15px;
      max-width: 318px;

      @media (max-width: 768px) {
        margin: 0 auto;
        max-width: 192px;
        font-size: 16px;
        border-radius: 10px;
      }
    }

    .decr {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 300;
      line-height: 25px; /* 138.889% */
      max-width: 358px;
      width: 100%;

      @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
        line-height: normal;
      }
    }
  }

  .tinkoff-price {
    font-size: 27px;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 22px;
      text-align: center;
    }
  }
}
</style>