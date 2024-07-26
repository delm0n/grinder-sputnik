<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__column-links">
          <div class="footer__column-one">
            <button class="footer__column-btn" @click="descriptionListOne = !descriptionListOne">
              <p>Покупателям</p> <svg :class="{ 'rotated': descriptionListOne }" xmlns="http://www.w3.org/2000/svg"
                width="20" height="12" viewBox="0 0 20 12" fill="none">
                <g clip-path="url(#clip0_1339_405)">
                  <path
                    d="M9.12319 10.8768C9.60744 11.3611 10.3926 11.3611 10.8768 10.8768L18.7681 2.98551C19.2524 2.50126 19.2524 1.71613 18.7681 1.23188C18.2839 0.747629 17.4988 0.747629 17.0145 1.23188L10 8.24638L2.9855 1.23187C2.50125 0.747622 1.71613 0.747621 1.23188 1.23187C0.747629 1.71612 0.747628 2.50125 1.23188 2.9855L9.12319 10.8768ZM8.76 9L8.76 10L11.24 10L11.24 9L8.76 9Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1339_405">
                    <rect width="20" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div class="footer__column-list footer__column-list-one"
              v-bind:class="{ 'list-active': descriptionListOne }">
              <li v-for="(item, index) in nav" :key="index" class="footer__column-item">
                <p v-on:click="scrollToSection(item.selector)" v-text="item.name"></p>
              </li>
            </div>

          </div>
          <div class="footer__column-two">
            <button class="footer__column-btn" @click="descriptionListTwo = !descriptionListTwo">
              <p>Партнёрам</p> <svg :class="{ 'rotated': descriptionListTwo }" xmlns="http://www.w3.org/2000/svg"
                width="20" height="12" viewBox="0 0 20 12" fill="none">
                <g clip-path="url(#clip0_1339_405)">
                  <path
                    d="M9.12319 10.8768C9.60744 11.3611 10.3926 11.3611 10.8768 10.8768L18.7681 2.98551C19.2524 2.50126 19.2524 1.71613 18.7681 1.23188C18.2839 0.747629 17.4988 0.747629 17.0145 1.23188L10 8.24638L2.9855 1.23187C2.50125 0.747622 1.71613 0.747621 1.23188 1.23187C0.747629 1.71612 0.747628 2.50125 1.23188 2.9855L9.12319 10.8768ZM8.76 9L8.76 10L11.24 10L11.24 9L8.76 9Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1339_405">
                    <rect width="20" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div class="footer__column-list footer__column-list-two"
              v-bind:class="{ 'list-active': descriptionListTwo }">
              <p class="footer__column-item">
                <a :href="opt ? '/opt' : '/'">Оптовикам</a>

              </p>
              <p class="footer__column-item"      data-fancybox
              data-src="#modal-blogers">Блогерам</p>
            </div>
          </div>
          <div class="footer__column-three">
              <p class="footer__column-heading">Прочее</p> 
            <div class="footer__column-list">
              <p class="footer__column-item">
                <my-image class="pdf-icon" :floder="'src'" :imgName="'pdf-icon'" :alt="'#'" :mobile="false"
                  :lazyLoad="false" />
                <a download href="/uploadupdate/instruction.pdf">Скачать инструкцию</a>
              </p>
              <p class="footer__column-item">
                <my-image class="centr-icon" :floder="'src'" :imgName="'centr-icon'" :alt="'#'" :mobile="false"
                  :lazyLoad="false" />
                <a  data-fancybox
                data-src="#modal-centr">Обратиться в сервисный центр</a>
              </p>
            </div>
          </div>
        </div>


        <div class="footer__column-info">
          <div class="footer__column-phone">
            <img src="new-site-vue/images/src/phone-footer.svg" alt="">
            <a class="footer__phone" href="tel:88002505932">{{ getPhone }}</a>

          </div>
          <ul>
            <li class="footer__info">
              <span>ИНН:</span> 432500888349
            </li>
            <li class="footer__info">
              <span>ОГРНИП:</span> 314744919000039
            </li>
            <li class="footer__info">
              <span>Адрес фактический:</span> 610006, г. Киров, Октябрьский&nbsp;пр-т, д.&nbsp;24
            </li>
            <li class="footer__info">
              <span>Адрес для корреспонденции:</span> 610000, а/я 154
            </li>
          </ul>


        </div>
      </div>
      <div class="footer__border"></div>
      <div class="footer__bottom">
        <div class="footer__bottom-info">
          <div class="footer__logo">
            <my-image :alt="'Helicon'" :floder="'src'" :mobile="false" :imgName="'logo-footer'" />
            <span class="footer__logo-info">Официальный сайт производителя</span>
          </div>
          <p class="footer__copyright">
            ©2010-{{ getYear }}<br /> grinder-sputnik.ru | Все права защищены.
          </p>
        </div>
        <div class="footer__dropdown">
          <img src="new-site-vue/images/src/planeta.svg" alt="">
          <p>Русский</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
            <path
              d="M13.5 11C13.5 10.1716 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.1716 10.5 11L13.5 11ZM10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97918 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11L10.5 12L13.5 12L13.5 11L10.5 11Z"
              fill="white" />
          </svg>
        </div>

      </div>

    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  props: {
    opt: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.setInitialState();
    window.addEventListener('resize', this.setInitialState);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setInitialState);
  },
  methods: {
    setInitialState() {
      if (window.innerWidth > 991) {
        this.descriptionListOne = true;
        this.descriptionListTwo = true;
      } else {
        this.descriptionListOne = false;
        this.descriptionListTwo = false;
      }
    },
    scrollToSection(selector) {
      this.gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: selector },
      });
    },
  },
  data() {
    return {
      descriptionListOne: false,
      descriptionListTwo: false,
      nav: [
        {
          name: "Преимущества",
          selector: "#structure",
        },

        {
          name: "Комплектация",
          selector: "#complectation",
        },
        {
          name: "Рассрочка",
          selector: "#repayment",
        },

        {
          name: "Отзывы",
          selector: "#feedback",
        },
      ],
    };
  },
  computed: mapGetters(["getPhone", "getYear", "isTest"]),
};
</script>

<style lang="scss">
.footer {
  padding: 50px 0;
  background: #2f2f2f;

  @media (max-width: 575px) {
    padding: 30px 0;
  }

  &__row {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 50px;

    @media (max-width: 991px) {
      flex-direction: column;
    }

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  &__dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid #FFF;
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    width: 180px;
  }

  .footer__column-list-one,
  .footer__column-list-two {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s;
  }

  .footer__column-list.list-active {
    max-height: 200px;
  }

  .footer__column-btn svg {
    transition: transform 0.3s ease;
  }

  .footer__column-btn svg.rotated {
    transform: rotate(180deg);

    path {
      fill: #B6B6B6;
    }
  }

  &__column {
    &-links {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 30px;

      @media (max-width: 1250px) {
        grid-template-columns: auto auto;
      }

      @media (max-width: 991px) {
        grid-template-columns: auto;
        gap: 20px;
      }
    }

    &-one {
      grid-column: 1/2;
      grid-row: 1/2;

      @media (max-width: 1250px) {
        grid-row: 1/3;
      }

      @media (max-width: 991px) {
        grid-row: 1/2;
      }
    }

    &-two {
      grid-column: 2/3;
      grid-row: 1/2;

      @media (max-width: 991px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    }

    &-three {
      grid-column: 3/4;
      grid-row: 1/2;

      @media (max-width: 1250px) {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      @media (max-width: 991px) {
        grid-column: 1/2;
        grid-row: 3/4;
      }
    }
&-heading {
  margin-bottom: 10px;
      color: #FFF;
      font-family: Gilroy;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 29px;
      background: none;
      border: none;

}
    &-btn {
      margin-bottom: 10px;
      color: #FFF;
      font-family: Gilroy;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 29px;
      background: none;
      border: none;
      cursor: pointer;

      svg {
        display: none;
      }

      @media (min-width: 992px) {
        pointer-events: none;
        cursor: default;
      }

      @media (max-width: 991px) {
        border-bottom: 1px solid;
        width: 100%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
          display: block;
        }
      }

    }

    &-item {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #F1F1F1;
      font-family: Gilroy;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      cursor: pointer;
      transition: color 0.2s;

      @media (max-width: 991px) {
        color: rgba(255, 255, 255, 0.70);
      }

      &:hover {
        color: #f7660e;
      }

      a {
        color: #F1F1F1;
        font-family: Gilroy;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px;
        transition: color 0.2s;

        &:hover {
          color: #f7660e;
        }

        @media (max-width: 991px) {
          color: rgba(255, 255, 255, 0.70);
        }
      }

      .img-wrap {
        flex-shrink: 0;
      }
    }

    &-item:not(:last-child) {
      margin-bottom: 10px;
    }

    &-info {
      height: max-content;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid #FFF;
      max-width: 455px;

      @media (max-width: 991px) {
        max-width: initial;
      }

      @media (max-width: 575px) {
        padding: 10px;
      }
    }

    &-phone {
      display: flex;
      gap: 5px;
      align-items: center;
      margin-bottom: 20px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 13px;
    flex-shrink: 0;

    @media (max-width: 575px) {
      svg {
        width: 34px;
      }
    }

    img {
      max-width: 180px;
      width: 100%;
    }
  }

  &__phone {
    color: #FFF;
    font-family: Gilroy;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
  }

  &__logo-info {
    width: 110px;
    color: #FFF;
    font-family: Inter;
    font-size: 11.705px;
    font-style: normal;
    font-weight: 200;
    line-height: 17.557px;

    @media (max-width: 1250px) {
      display: none;
    }
  }

  &__info {
    color: #646464;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 575px) {}

    span {
      font-weight: 500;
    }
  }

  &__info:not(:last-child) {
    margin-bottom: 10px;
  }

  &__border {
    height: 2px;
    background: #fff;
  }

  &__bottom {
    margin-top: 20px;
    gap: 20px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &-info {
      display: flex;
      gap: 25px;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
        align-items: start;
      }
    }
  }

  &__copyright {
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    br {
      display: none;
    }

    @media (max-width: 575px) {
      br {
        display: block;
      }
    }

  }
}
</style>
