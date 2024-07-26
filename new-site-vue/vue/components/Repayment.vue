<template>
  <section id="repayment" class="repayment">
    <div :data-bg="getBg" class="repayment-bg lazy">
      <div class="container">
        <h3 class="repayment__heading">
          Забирайте покупку сейчас — платите потом
        </h3>
        <div class="repayment__box">
          <div class="repayment__tinkoff">
            <div class="repayment__wrapper repayment__tinkoff-wrapper">
              <div>
                <div class="repayment__logo repayment__tinkoff-logo">
                  <img
                    src="new-site-vue/images/repayment/tinkoff-rassr.svg"
                    alt=""
                  />
                </div>
                <h3 class="repayment__title">Рассрочка от <br />Тинькофф</h3>
                <p class="repayment__desc">
                  от
                  {{ Math.round(getMain[0].price / 4).toLocaleString() }}
                  руб./мес. на 4 месяца без первого взноса и переплат
                </p>
              </div>
              <button
                class="repayment__btn"
                data-fancybox
                data-src="#modal-tinkoff"
                @click="changeUserRassrochka(false)"
              >
                Оставить заявку
              </button>
            </div>
            <div class="repayment__img repayment__tinkoff-img">
              <my-image
                :alt="'#'"
                :floder="'repayment'"
                :imgName="'tinkoff-img'"
                :mobile="false"
              />
            </div>
          </div>
          <div class="repayment__sber">
            <div class="repayment__wrapper repayment__sber-wrapper">
              <div>
                <div class="repayment__logo repayment__sber-logo">
                  <img
                    src="new-site-vue/images/repayment/sber-kredit.svg"
                    alt=""
                  />
                </div>
                <h3 class="repayment__title">Кредит на <br />любой срок</h3>
                <p class="repayment__desc">
                  от
                  {{ Math.round(getMain[0].price / 12).toLocaleString() }}
                  руб./мес. на 6/9/10/12 мес.
                </p>
              </div>
              <button
                class="repayment__btn"
                data-fancybox
                data-src="#modal-sber"
                @click="changeUserRassrochka(false)"
              >
                Оставить заявку
              </button>
            </div>
            <div class="repayment__img repayment__sber-img img-1">
              <my-image
                :alt="'#'"
                :floder="'repayment'"
                :imgName="'sber-img'"
                :mobile="false"
              />
            </div>
            <div class="repayment__img repayment__sber-img img-2">
              <my-image
                :alt="'#'"
                :floder="'repayment'"
                :imgName="'sber-img-tablet'"
                :mobile="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="js">
import { useStore } from 'vuex';
import { computed } from 'vue';
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
    components: {
        MyImage,
    },
    setup() {
        const store = useStore();
        const changeUserRassrochka = (isActive) => store.commit('changeUserRassrochka', isActive)
        const getMain = computed(() => store.getters.getMain)
        return { changeUserRassrochka, getMain }
    },
    mounted() {
        this.gsap.to("#repayment .repayment-bg", {
            backgroundPosition: "0% 80%",
            ease: "none",
            scrollTrigger: {
                trigger: "#repayment",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

    },
  computed: {
    ...mapGetters(["getWebp"]),

    getBg() {
        return window.innerWidth > 576 ? 'new-site-vue/build/images/repayment/bg.' + this.getWebp : 'new-site-vue/build/images/repayment/bg-mob.' + this.getWebp 
    }
  },

};
</script>



<style lang="scss">
.repayment {
  margin: 0 auto;
  max-width: 1920px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none !important;
    width: 282px;
  }

  img {
    max-width: 100%;
    display: block;
  }

  &-bg {
    // background: url("../../build/images/repayment/bg.png");
    transition: all 0s ease;
    background-repeat: no-repeat !important;
    background-attachment: inherit !important;
    padding: 100px 0;
    overflow: hidden;

    @media (max-width: 1199px) {
      padding: 60px 0;
    }

    @media (max-width: 576px) {
      padding: 30px 0;
      //   background: url("../../build/images/repayment/bg-mob.png") !important;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__heading {
    color: #323232;
    text-align: center;
    font-family: Gilroy;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 50px;

    @media (max-width: 1250px) {
      br {
        display: none;
      }
    }

    @media (max-width: 1199px) {
      margin-bottom: 30px;
    }

    @media (max-width: 576px) {
      font-size: 27px;
      line-height: 35px;
    }
  }

  &__box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  &__tinkoff {
    grid-column: 1/2;
    grid-row: 1/2;
    border: 3px solid #e8e8e8;
    background: #fff;
    padding: 30px 0 30px 30px;
    border-radius: 30px;
    display: flex;

    @media (max-width: 1199px) {
      grid-column: 1/3;
      grid-row: 1/2;
      border: 2px solid #e8e8e8;
    }

    @media (max-width: 576px) {
      padding: 20px 0 20px 20px;
    }

    &-wrapper {
      width: 62%;
    }

    &-img {
      width: 38%;
    }
  }

  &__sber {
    grid-column: 2/3;
    grid-row: 1/2;
    background: linear-gradient(171deg, #d8f1ff 6.57%, #d0ffc9 154.28%);
    padding: 30px 0 30px 30px;
    border-radius: 30px;
    display: flex;

    @media (max-width: 1199px) {
      grid-column: 1/3;
      grid-row: 2/3;
    }

    @media (max-width: 576px) {
      padding: 20px 0 20px 20px;
    }

    &-wrapper {
      width: 54%;
    }

    &-img {
      width: 46%;

      &.img-1 {
        @media (max-width: 1199px) {
          display: none;
        }

        @media (max-width: 576px) {
          display: block;
        }
      }

      &.img-2 {
        display: none;

        @media (max-width: 1199px) {
          display: block;
        }

        @media (max-width: 576px) {
          display: none;
        }
      }
    }
  }

  &__img {
    margin: auto;

    img {
      width: auto;
    }
  }

  &__logo {
    img {
      width: auto;
    }
  }

  &__tinkoff-logo {
    margin-bottom: 10px;
  }

  &__sber-logo {
    margin-bottom: 30px;
  }

  &__title {
    color: #323232;
    font-family: Gilroy;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
    margin-bottom: 10px;

    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 30px;
    }
  }

  &__desc {
    color: #646464;
    font-family: Gilroy;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px;
    margin-bottom: 20px;

    @media (max-width: 576px) {
      font-size: 18px;
      line-height: 25px;
    }
  }

  &__btn {
    color: #323232;
    font-family: Gilroy;
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    text-align: left;
    text-decoration-line: underline;
    text-underline-offset: 6px;

    @media (max-width: 576px) {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
  }
}
</style>