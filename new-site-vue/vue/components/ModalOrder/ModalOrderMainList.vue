<template>
  <div class="main-list">
    <div class="main-list__row">
      <droplist
        class="main-list__droplist"
        @action-droplist="actionDroplist"
        :array="getMain"
        :repeat="true"
        :nameModel="wndw < 391"
      />

      <div
        class="main-list__sale"
        v-html="'<span>Скидка&nbsp;</span>' + getMainSale"
      ></div>
    </div>

    <h4>Добавьте в заказ</h4>

    <div
      @click="$emit('change-showdop')"
      :class="['main-list__button', showdop ? 'open' : 'close']"
    >
      {{ showdop ? "Скрыть доп. товары" : "Добавить доп. товары" }}
    </div>
    <!-- место для кнопки добавить доп товары -->
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import Droplist from "../../UI/Droplist.vue";
export default {
  components: { Droplist },
  computed: {
    ...mapGetters(["getMain", "getMainSale"]),
  },
  props: {
    showdop: Boolean,
    wndw: Number,
  },
  methods: {
    ...mapMutations(["selectMain"]),

    actionDroplist(id) {
      this.selectMain(id);
    },
  },
};
</script>

<style lang="scss" >
.main-list {
  &__row {
    display: flex;
    align-items: stretch;
    gap: 10px;
  }

  &__droplist {
    max-width: 360px;
    width: 100%;

    @media (max-width: 1280px) {
      width: 280px;
    }

    // @media (max-width: 390px) {
    //   width: 100%;
    // }

    .dropdown-hero {
      border: 3px solid #f6640a;

      @media (max-width: 1280px) {
        border-radius: 10px;

        &--open {
          border-radius: 10px 10px 0 0;
        }
      }

      @media (max-width: 768px) {
        padding: 13px 16px;
      }

      p {
        color: #f6640a;
        font-family: "Gilroy";
        font-size: 18px;
        font-weight: 600;
        line-height: 22px;

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 18px;
        }
      }

      svg path {
        fill: #f6640a;
      }
    }

    li {
      font-family: "Gilroy" !important;
      font-size: 18px !important;
      font-weight: 600 !important;
      line-height: 22px !important;

      @media (max-width: 768px) {
        font-size: 16px !important;
        line-height: 18px !important;
      }
    }
  }

  &__sale {
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    color: #ffffff;
    background: #ff3838;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-width: 52px;
    }

    // @media (max-width: 390px) {
    //   display: none;
    // }

    span {
      @media (max-width: 1280px) {
        display: none;
      }
    }
  }

  h4 {
    margin: 20px 0 10px;
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    color: #323232b2;

    @media (max-width: 1280px) {
      display: none;
    }
  }

  &__button {
    @media (min-width: 1281px) {
      display: none;
    }
    cursor: pointer;
    transition: all 0.3s;
    max-width: 350px;
    margin: 10px 0 0;
    padding: 20px 10px;
    font-family: "Inter";
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 94.444% */
    text-decoration-line: underline;
    border-radius: 10px;
    @media (max-width: 768px) {
      padding: 16px 10px;
      max-width: 100%;
    }

    @media (max-width: 576px) {
      max-width: 100%;
    }

    &.close {
      color: #fff;
      background: #f6640a;
    }

    &.open {
      color: #646464;
      background: #ebebeb;

      @media (max-width: 768px) {
        border-radius: 10px 10px 0px 0px;
      }
    }
  }
}
</style>