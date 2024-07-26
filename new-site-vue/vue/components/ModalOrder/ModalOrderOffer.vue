<template>
  <div class="offer-box">
    <button @click="openModalSuccessOrder" type="submit" class="button">
      Заказать
    </button>

    <label class="checkbox-v2 form-order__rassrochka">
      <input
        v-model="getUser.rassrochka"
        class="checkbox-v2__disabled"
        type="checkbox"
      />
      <span class="checkbox-v2__active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" rx="5" fill="#2AA000" />
          <path
            d="M6 11.9121L10.1394 16.051L18.5 8.08398"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </span>
      <span class="checkbox-v2__name">Покупка в рассрочку </span>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters(["getUser"]),
  methods: mapMutations(["openModalSuccessOrder"]),
};
</script>

<style lang="scss" scoped>
@import "../../../scss/_global.scss";

.offer-box {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  align-self: stretch;

  .checkbox-v2__name {
    @include fluidFontSize(15, 20, 768, 1920);
    line-height: 18px;
  }

  @media (min-width: 1281px) {
    .checkbox-v2__active {
      border-color: #ffffff;
    }
    .checkbox-v2__name {
      color: #ffffff;
    }
  }

  @media (max-width: 1280px) {
    flex-direction: column-reverse;

    .button {
      max-width: 260px;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .button {
      max-width: 225px;
      font-size: 18px;
      padding: 20px 0;
      line-height: 17px;
    }
  }
}
</style>