<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__column-logo">
          <div class="footer__logo">
            <my-image
              :alt="'Helicon'"
              :floder="'src'"
              :mobile="false"
              :imgName="'logo-footer'"
            />
            <span class="footer__logo-info"
              >Официальный сайт производителя</span
            >
          </div>
          <a class="footer__phone" href="tel:88002505932">{{ getPhone }}</a
          ><span class="footer__text" @click="openModalCall()"
            >Заказать звонок</span
          >
        </div>
        <div class="footer__column-info">
          <p class="footer__info">
            <span>ИНН:</span> 432500888349<br /><span>ОГРНИП:</span>
            314744919000039
          </p>
          <p class="footer__info">
            <span>Адрес почтовый (фактический):</span><br />610006,
            г.&nbsp;Киров, Октябрьский&nbsp;пр-т, д.&nbsp;24
          </p>
          <p class="footer__info">
            <span>Для корреспонденции: </span>610000, а/я&nbsp;154
          </p>
        </div>
        <div class="footer__column-links">
          <ul class="footer__list">
            <li class="footer__item">
              <a
                target="_blank"
                class="footer__link"
                href="uploadupdate/confidentiality.pdf"
                >Политика конфиденциальности</a
              >
            </li>
            <li class="footer__item">
              <a
                target="_blank"
                class="footer__link"
                href="uploadupdate/oferta-rus.pdf"
                >Договор оферты</a
              >
            </li>
          </ul>
        </div>

        <div class="footer__column-button">
          <a
            :href="opt ? '/opt' : '/'"
            :class="[!isTest ? ' button' : 'button']"
            class="footer__btn"
            >{{ opt ? "Купить оптом" : "Купить в розницу" }}</a
          >
        </div>
      </div>
    </div>
    <div class="footer__border"></div>
    <div class="container">
      <p class="footer__copyright">
        © 2010 - {{ getYear }} grinder-sputnik.ru Все права защищены.<br />Использование
        материалов разрешено только с согласия правообладателей. Полное или
        частичное копирование сайта запрещено и преследуется по закону.
      </p>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  props: {
    opt: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: mapGetters(["getPhone", "getYear", "isTest"]),
  methods: {
    ...mapMutations(["openModalSuccessManager"]),

    openModalCall() {
      this.openModalSuccessManager();
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-call",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
.footer {
  padding: 60px 0 30px 0;
  background: #2f2f2f;
  @media (max-width: 575px) {
    padding: 30px 0;
  }
  &__row {
    // display: flex;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto 1fr;
    gap: 20px;

    justify-content: space-between;
    width: 100%;
    // gap: 170px;
    margin-bottom: 68px;

    @media (max-width: 1280px) {
      gap: 30px;
      margin-bottom: 38px;
    }

    @media (max-width: 1115px) {
      grid-template-columns: repeat(2, auto);
    }

    // @media (max-width: 991px) {
    //   flex-wrap: wrap;
    //   max-width: 700px;
    //   margin: 0 auto 30px auto;
    // }
    @media (max-width: 768px) {
      display: flex;
      gap: 20px;
      flex-direction: column;
    }
  }
  &__column-logo {
    // flex-grow: 1;
    flex-shrink: 0;
    padding-top: 15px;
    @media (max-width: 1280px) {
      flex-grow: 0;
    }
    // @media (max-width: 991px) {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   flex: 0 1 100%;
    // }
    @media (max-width: 768px) {
      align-items: flex-start;
      padding-bottom: 5px;
    }
  }
  &__column-info,
  &__column-links {
    // @media (max-width: 991px) {
    //   flex: 0 1 calc(50% - 15px);
    // }
    @media (max-width: 575px) {
      flex: 0 1 100%;
    }
  }

  &__column-info,
  &__column-logo {
    grid-row: 1/3;
  }
  @media (min-width: 1116px) {
    &__column-links {
      grid-column: 3/4;
      grid-row: 1/2;
    }

    &__column-button {
      grid-column: 3/4;
      grid-row: 2/3;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
    @media (max-width: 575px) {
      margin-bottom: 20px;

      svg {
        width: 34px;
      }
    }

    .footer-logo {
      max-width: 189px;
      width: 100%;

      @media (max-width: 1280px) {
        max-width: 159px;
      }

      @media (max-width: 768px) {
        max-width: 130px;
      }
    }

    img {
      max-width: 215px;
      width: 100%;
    }
  }
  &__logo-name {
    font-family: "Gilroy";
    font-weight: 900;
    font-size: 52px;
    line-height: 1;
    letter-spacing: 0.01em;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 32px;
    }
  }
  &__logo-border {
    display: block;
    height: 38px;
    width: 1px;
    background: #9b9b9b;
    @media (max-width: 575px) {
      height: 30px;
    }
  }
  &__logo-info {
    max-width: 155px;
    font-family: "Inter";
    font-weight: 200;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 12px;
      line-height: 15px;
    }
  }

  &__phone {
    font-size: 32px;
    font-family: "Gilroy";

    font-weight: 600;
    color: #ffffff;
    transition: 0.3s opacity ease;

    letter-spacing: 0.32px;

    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 575px) {
      margin-top: 5px;
      font-size: 20px;
    }
  }
  &__text {
    display: block;

    color: #c9c9c9;
    font-family: "Inter";
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 0.18px;
    text-decoration-line: underline;

    @media (max-width: 575px) {
      font-size: 14px;
    }
  }
  &__info {
    font-family: "Inter";
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    line-height: 25px;
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 140%;
    }
    span {
      color: rgba(255, 255, 255, 1);
    }
  }
  &__info:first-child {
    margin-bottom: 50px;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 575px) {
      margin-bottom: 20px;
    }
  }
  &__info:last-child {
    margin-top: 30px;
    @media (max-width: 575px) {
      margin-top: 20px;
    }
  }
  &__item:not(:last-child) {
    margin-bottom: 15px;
  }
  &__link {
    font-family: "Inter";
    font-size: 18px;
    color: #ffffff;
    text-decoration-line: underline;
    transition: 0.3s opacity ease;
    &:hover {
      opacity: 0.5;
    }
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 140%;
    }
  }
  &__btn {
    @media (max-width: 1280px) {
      width: 100%;
    }
    @media (max-width: 575px) {
      max-width: 205px;
      margin-top: 20px;
    }
  }
  &__border {
    height: 1px;
    background: #fff;
    opacity: 0.1;
  }
  &__copyright {
    align-self: flex-start;
    font-family: "Inter";
    max-width: 479px;
    margin-top: 30px;
    font-size: 12px;
    line-height: 140%;
    color: #ffffff;
    @media (max-width: 575px) {
      font-size: 10px;
    }
  }
}
</style>
