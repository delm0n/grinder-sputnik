<template>
  <section id="model">
    <div class="container">
      <div class="title">
        <h2>Выберите свой гриндер «СПУТНИК»</h2>
      </div>
      <div class="model-wrapper">
        <div class="model-wrapper__img">
          <my-image
            :alt="getMainItem.name"
            :floder="'model'"
            :imgName="'grinder-big'"
            :mobile="false"
            :lazyLoad="false"
          />
        </div>
        <div class="model-wrapper__content">
          <div class="content-container">
            <droplist
              :repeat="true"
              :array="getMain"
              @action-droplist="selectMain"
            />
          </div>

          <div class="content-container">
            <ul class="char">
              <li
                v-for="(item, index) in getMainItem.charList"
                :key="index"
                class="content-text"
              >
                {{ item[0] }} —
                <b v-html="item[1]"></b>
              </li>
            </ul>
          </div>

          <div class="content-container content-complect">
            <my-image
              class="box"
              :alt="'#'"
              :floder="'model'"
              :imgName="'box'"
              :mobile="false"
            />
            <p class="content-text">
              <span> В комплекте:</span> гриндер, 3 абразивные ленты (Р60, P100,
              Р180), гарантийный талон, инструкция
            </p>
          </div>

          <div class="price-offer">
            <p class="discont">Экономия {{ getMainItem.sale }}</p>
            <p
              class="new"
              v-html="getMainItem.price.toLocaleString() + ' РУБ.'"
            ></p>
            <p
              class="old"
              v-html="getMainItem.oldPrice.toLocaleString() + ' РУБ.'"
            ></p>
          </div>

          <div class="button-offer">
            <button
              @click="showModal(false, '#modal-order')"
              :class="[!isTest ? ' button' : 'button']"
            >
              Заказать
            </button>
            <div
              @click="showModal(true, '#tinkoff-modal')"
              class="button button-tinkoff"
            >
              <my-image
                class="tinkoff-icon"
                :alt="'#'"
                :imgName="'tinkoff'"
                :floder="'src'"
                :mobile="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";
import Droplist from "../UI/Droplist.vue";

export default {
  components: {
    MyImage,
    Droplist,
  },
  computed: mapGetters(["getMainItem", "getMain", "isTest"]),

  methods: {
    ...mapMutations(["selectMain", "changeUserRassrochka"]),

    showModal(bool, src) {
      this.changeUserRassrochka(bool);

      setTimeout(() => {
        Fancybox.show([
          {
            src: src,
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#model {
  overflow: hidden;
  @extend %padd;

  .model-wrapper {
    display: flex;
    gap: 30px;

    @media (max-width: 1024px) {
      flex-direction: column;
      max-width: 574px;
      margin: 0 auto;
    }

    @media (max-width: 992px) {
      gap: 20px;
    }

    &__img {
      border-radius: 10px;
      background: #f9f9f9;
      max-width: 816px;
      min-width: calc((100% - 30px) / 2);
      flex-grow: 1;

      display: flex;
      align-items: center;
    }

    &__content {
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      padding: 30px;
      max-width: 574px;

      @media (max-width: 576px) {
        padding: 20px 10px;
      }

      .content-container {
        border-bottom: 4px solid #e0e0e0;
        padding-bottom: 20px;

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        .content-text {
          color: #323232;
          font-family: "Gilroy";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 138%;

          @media (min-width: 1025px) {
            @include fluidFontSize(16, 18, 1025, 1400);
          }

          @media (max-width: 992px) {
            font-size: 16px;
            line-height: 22px;
          }

          @media (max-width: 576px) {
            font-size: 15px;
            line-height: 20px;
          }

          span {
            font-weight: 500;
          }

          b {
            font-weight: 600;
            white-space: nowrap;
          }
        }

        &.content-complect {
          display: flex;
          gap: 10px;
          align-items: center;

          .box {
            flex-shrink: 0;
          }
        }

        ul.char {
          padding-left: 40px;

          @media (max-width: 576px) {
            padding-left: 34px;
          }

          li {
            position: relative;

            &:not(:last-child) {
              margin-bottom: 10px;
            }

            &:before {
              content: "";
              background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODc1IDE0LjM3NUwxMi41IDIwTDIxLjg3NSAxMC42MjUiIHN0cm9rZT0iI0Y2NjQwQSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==)
                no-repeat;
              width: 30px;
              height: 30px;
              background-position: center;
              position: absolute;
              left: -40px;
              top: 50%;
              background-size: 100%;
              transform: translateY(-50%);

              @media (max-width: 576px) {
                width: 24px;
                height: 24px;
                left: -34px;
              }
            }
          }
        }
      }

      .price-offer {
        display: grid;
        grid-template-columns: repeat(2, auto);
        width: max-content;
        gap: 10px;
        align-items: flex-end;
        margin: 0 auto 20px;

        .discont {
          grid-column: 1/3;
          grid-row: 1/2;
          align-self: center;
          margin: 0 auto;
          border-radius: 50px;
          background: #ff3838;
          display: flex;
          padding: 5px 10px;
          justify-content: center;
          align-items: center;
          width: max-content;

          color: #fff;
          font-family: "Inter";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 23px; /* 143.75% */
        }

        .new {
          color: #323232;
          font-family: "Gilroy";
          font-size: 27px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .old {
          color: #c8c8c8;
          font-family: "Gilroy";
          font-size: 18px;
          font-style: normal;
          font-weight: 900;
          line-height: normal;
          text-decoration: line-through;
        }
      }

      .button-offer {
        display: flex;
        gap: 16px;
        margin-top: 10px;

        justify-content: center;

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
    }
  }
}
</style>
