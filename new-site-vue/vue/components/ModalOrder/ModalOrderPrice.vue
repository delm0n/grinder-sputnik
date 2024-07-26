<template>
  <div class="offer-container">
    <div class="offer-box">
      <template v-if="!getUser.rassrochka">
        <p class="p-header">
          <span class="new"
            >{{ getLastPriceWithCount.toLocaleString() }} ₽</span
          >
          <span class="old"
            >{{ getLastOldPriceWithCount.toLocaleString() }} ₽</span
          >
        </p>

        <p class="p-bottom">Итого к оплате</p>
      </template>
      <template v-else>
        <p class="p-header">
          <span class="new">0 ₽</span>
          <span class="old"
            >{{ getLastOldPriceWithCount.toLocaleString() }} ₽</span
          >
        </p>

        <p class="p-bottom">
          Со следующего месяца <br />
          {{ (getLastPriceWithCount / 4).toLocaleString("ru-RU") }}
          руб/мес
        </p>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "getUser",
      "getLastPriceWithCount",
      "getLastOldPriceWithCount",
    ]),
  },
};
</script>


<style lang="scss" scoped>
.offer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.offer-box {
  flex-grow: 1;

  .p-header {
    display: flex;
    align-items: center;
    gap: 13px;
    justify-content: center;

    .new {
      display: block;
      font-size: 50px;
      font-weight: 600;
      line-height: 50px;
      color: #ffffff;

      @media (max-width: 1024px) {
        font-size: 30px;
        font-weight: 900;
        line-height: 30px;
      }
    }

    .old {
      display: block;
      font-size: 30px;
      font-weight: 900;
      line-height: 50px;
      color: #999999;
      text-decoration: line-through;

      @media (max-width: 1024px) {
        font-size: 22px;
        font-weight: 900;
        line-height: 22px;
      }
    }
  }

  .p-bottom {
    font-family: "Gilroy";
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-top: 10px;
    padding-top: 5px;
    border-top: 1px solid #ffffff;
    color: #ffffff;

    @media (max-width: 1024px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
}
</style>