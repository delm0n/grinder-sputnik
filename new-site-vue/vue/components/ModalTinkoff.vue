<template>
  <div id="modal-tinkoff" class="modal-tinkoff modal" style="display: none">
    <button class="modal-tinkoff__close close">Закрыть</button>
    <div class="modal-tinkoff__container">
      <div class="modal-tinkoff__box">
        <h3 class="modal-tinkoff__title">Рассрочка от Тинькофф</h3>
        <ul class="modal-tinkoff__list">
          <li class="modal-tinkoff__item">
            <img src="new-site-vue/images/repayment/step.svg" />
            <p class="modal-tinkoff__item-desc">На 4 месяца</p>
          </li>
          <li class="modal-tinkoff__item">
            <img src="new-site-vue/images/repayment/step.svg" />
            <p class="modal-tinkoff__item-desc">Без первого взноса</p>
          </li>
          <li class="modal-tinkoff__item">
            <img src="new-site-vue/images/repayment/step.svg" />
            <p class="modal-tinkoff__item-desc">Без переплат</p>
          </li>
        </ul>
      </div>

      <div class="modal-tinkoff__img">
        <my-image
          :alt="'#'"
          :floder="'repayment'"
          :imgName="'tinkoff-modal'"
          :mobile="false"
        />
      </div>
      <div class="modal-tinkoff__column">
        <droplist
          class="content-droplist modal-order__dropdown modal-tinkoff__dropdown"
          :repeat="true"
          :array="getMain"
          @action-droplist="actionDroplist"
        />
        <form
          action=""
          v-on:submit.prevent
          method="post"
          class="spnForm form-order"
        >
          <div class="modal-tinkoff__inputs">
            <input class="input" type="text" name="name" placeholder="Имя" />

            <input
              class="input"
              type="text"
              name="phone"
              placeholder="Номер телефона"
            />
          </div>

          <form-helicon :main="true" :dops="false" :rassrochka="true" />
          <div
            class="modal-tinkoff__price"
            v-for="item in getMain"
            :key="item.id"
          >
            <p
              v-if="item.selected"
              v-html="Math.round(item.price / 4).toLocaleString() + ` РУБ/МЕС`"
            ></p>
          </div>

          <button class="modal-tinkoff__btn">Купить в рассрочку</button>
          <p class="modal-tinkoff__form-desc">
            Мы свяжемся с Вами в течение 10 минут и уточним детали заказа
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import { useStore } from 'vuex';
import { computed } from 'vue';
import { mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";
import FormHelicon from "../components/FormHelicon.vue";
import Droplist from '../UI/Droplist.vue';

export default defineComponent({
    components: { Droplist, FormHelicon, MyImage },

    setup() {
        const store = useStore();
        const newPriceStrengthening = computed(() => store.getters.getNewPriceStrengthening)
        const changeMainProduct = (id) => store.commit('changeMainProduct', id)

        const getMain = computed(() => store.getters.getMain)
        return {
            changeMainProduct, getMain, newPriceStrengthening
        };
    },
    methods: {
        ...mapMutations(["selectMain"]),

        actionDroplist(id) {
            this.selectMain(id);
        },

    },
});
</script>

<style lang="scss">
.modal-tinkoff {
  max-width: 1005px;
  border-radius: 10px;

  @media (max-width: 700px) {
    max-width: 500px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none !important;
  }

  img {
    max-width: 100%;
    display: block;
  }

  &.fancybox__content {
    padding: 50px !important;

    @media (max-width: 700px) {
      padding: 25px !important;
    }
  }

  img {
    width: auto;
  }

  &__container {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    position: relative;

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  &__img {
    grid-column: 1/2;
    grid-row: 1/3;
    align-self: center;

    @media (max-width: 768px) {
      margin: 20px auto 0 auto;
    }

    @media (max-width: 700px) {
      grid-column: 1/2;
      grid-row: 2/3;
      margin: 0 auto 20px auto;
      max-width: 300px;
    }

    img {
      margin: 0 auto;
    }
  }

  &__column {
    grid-column: 2/3;
    grid-row: 2/3;

    @media (max-width: 700px) {
      grid-column: 1/2;
      grid-row: 3/4;
    }
  }

  &__dropdown {
    margin-bottom: 20px !important;
    max-width: 358px !important;

    @media (max-width: 700px) {
      margin: 0px auto 20px auto !important;
    }

    @media (max-width: 575px) {
      margin: 0 auto 10px auto !important;
    }
  }

  .dropdown-hero p {
    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  .dropdown-item {
    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  &__box {
    grid-column: 2/3;
    grid-row: 1/2;

    @media (max-width: 700px) {
      grid-column: 1/2;
      grid-row: 1/2;
      text-align: center;
    }
  }

  &__title {
    color: #323232;
    font-family: Gilroy;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
    margin-bottom: 20px;

    @media (max-width: 575px) {
      font-size: 22px;
      line-height: 29px;
      margin-bottom: 10px;
    }
  }

  &__list {
    @media (max-width: 700px) {
      margin: auto;
      max-width: 358px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    &-desc {
      color: #323232;
      font-family: Gilroy;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 25px;

      @media (max-width: 575px) {
        font-size: 15px;
        line-height: 22px;
      }
    }

    @media (max-width: 575px) {
      img {
        width: 20px;
      }
    }
  }

  &__price {
    color: #323232;

    font-family: Gilroy;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;

    @media (max-width: 700px) {
      text-align: center;
    }

    @media (max-width: 575px) {
      font-size: 18px;
    }
  }

  input,
  textarea {
    width: 100%;
    border: none;
    background: #fff;
    outline: none !important;
  }

  .input {
    height: 54px;
    padding: 0 20px;
    border-radius: 10px;
    background: #f3f3f3;
    color: #555555;
    font-family: Inter;
    font-size: 20px;

    @media (max-width: 576px) {
      height: 48px;
      padding: 0 20px;
      font-size: 15px;
    }
  }

  &__inputs {
    margin: 0 0 30px 0;
    max-width: 358px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 700px) {
      margin: 0 auto 30px auto;
    }

    @media (max-width: 575px) {
      margin: 0 auto 20px auto;
      gap: 10px;
    }
  }

  &__form-desc {
    color: #323232;
    max-width: 358px;
    font-family: Gilroy;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;

    @media (max-width: 768px) {
      margin: 0 auto;
    }

    @media (max-width: 575px) {
      text-align: center;
      font-size: 15px;
      line-height: 22px;
    }
  }

  &__btn {
    display: flex;
    width: 318px;
    height: 77px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 15px;
    background: #fceb0a !important;
    color: #323232;
    font-family: Inter;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
    /* 62.963% */
    margin-bottom: 10px;

    @media (max-width: 700px) {
      margin: 0px auto 10px auto;
    }

    @media (max-width: 575px) {
      width: 220px;
      font-size: 18px;
      height: 57px;
    }
  }

  .close {
    top: -40px !important;
    position: absolute;
    right: 0;
    color: #fff;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    @media (max-width: 575px) {
      font-size: 18px;
      top: -30px !important;
    }
  }

  .is-close {
    opacity: 0 !important;
    width: 100px;
  }
}
</style>