<template>
  <div id="order-success" style="display: none">
    <h4>
      {{ getModalSuccess[0] }}
    </h4>

    <p class="descr" v-html="getModalSuccess[1]"></p>

    <form action="" v-on:submit.prevent method="post">
      <div class="input-block">
        <label for="phone" class="order-success__label">
          <input class="my-input" type="text" name="phone" />
        </label>
      </div>
      <span></span>

      <input type="hidden" name="order" data-order="-1" value="" />
      <button type="submit" class="button">Подтвердить</button>
      <div v-html="getMetric"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getModalSuccess", "getMetric", "getUser"]),
};
</script>

<style lang="scss">
#order-success {
  border-radius: 10px;
  background: #fff;
  max-width: 745px;
  width: 100%;

  @media (max-width: 576px) {
    padding: 30px 20px 20px !important;
    max-width: 300px;
    width: 100%;
  }

  .is-close {
    top: 5px;
    right: 5px;
    color: #323232;
    svg {
      filter: none;
    }
  }

  .input-block {
    max-width: 358px;
    width: 100%;
    margin: 30px auto;
  }

  h4 {
    font-family: "Gilroy";
    font-size: 27px;
    font-weight: 600;
    line-height: 34px;
    text-align: center;
    margin-bottom: 20px;
  }

  .descr {
    font-family: "Gilroy";
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    text-align: center;
    margin-bottom: 0;
  }

  h3 {
    color: #323232;
    text-align: center;
    font-family: "Roboto";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 39px; /* 121.875% */
    margin-bottom: 10px;

    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 29px; /* 131.818% */
    }
  }

  .decr {
    color: #323232;
    text-align: center;
    font-family: "Roboto";
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 29px; /* 131.818% */
    max-width: 570px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 576px) {
      font-size: 18px;
      line-height: 25px; /* 138.889% */
    }
  }

  .button {
    margin: 30px auto 0;
  }
}
</style>