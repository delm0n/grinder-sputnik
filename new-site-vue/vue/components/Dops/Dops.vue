<template>
  <section id="dops">
    <div class="container">
      <div class="title">
        <h2>Дополнительные товары</h2>
      </div>

      <template v-if="!getMobile">
        <!-- 1920px - 768px -->
        <transition-group tag="div" class="dops-wrapper" name="cards">
          <dop-item
            v-for="(dop, index) in dopsFilter"
            @open-modal="openModal"
            :key="index"
            :dop="dop"
            :webp="getWebp == 'webp' ? '.webp' : '.png'"
          />
        </transition-group>

        <div class="button-show hyperlink" @click="changeShowMore(!showMore)">
          {{ !showMore ? "Показать ещё" : "Скрыть" }}
        </div>

        <div class="dops-pagination">
          <div class="bullets">
            <template v-for="(item, index) in getDops">
              <div
                :key="index"
                @click="changeActivePage(index)"
                :class="[
                  'bullet',
                  Math.ceil(index / COUNT) + 1 == page ? 'bullet--active' : '',
                ]"
                v-if="index % COUNT == 0"
              >
                {{ Math.ceil(index / COUNT) + 1 }}
              </div>
            </template>
          </div>
          <p>Показывать по {{ COUNT }}</p>
        </div>

        <!-- 1920px - 768px -->
      </template>

      <template v-else>
        <!-- 768px - 0 -->
        <dop-mobile-slider
          class="dops-slider"
          :dops="getDops"
          @open-modal="openModal"
          :webp="getWebp == 'webp' ? '.webp' : '.png'"
        />
        <!-- 768px - 0 -->
      </template>

      <div class="offer">
        <p>ИТОГО: {{ getLastPriceWithCountDop.toLocaleString() }} РУБ.</p>
        <button class="button" @click="toOrder()">Оформить заказ</button>
      </div>
    </div>

    <dop-modal :modal="modal" :webp="getWebp == 'webp' ? '.webp' : '.png'" />
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DopItem from "./DopItem.vue";
import DopMobileSlider from "./DopMobileSlider.vue";
import DopModal from "./DopModal.vue";

export default {
  data() {
    return {
      width1280: window.innerWidth < 1281,
      showMore: false,
      dopsFilter: [],
      page: 1,
      modal: {
        title: "",
        text: "",
        video: "",
        modalDop: "lamp-poster",
      },
    };
  },
  methods: {
    ...mapMutations(["setDopModal", "setDop"]),

    changeShowMore(bool) {
      this.showMore = bool;
      this.countOfShow(0, this.COUNT);
      this.page = 1;
    },

    changeActivePage(index) {
      if (Math.ceil(index / this.COUNT) + 1 != this.page) {
        this.countOfShow(
          Math.ceil(index / this.COUNT) * this.COUNT,
          (Math.ceil(index / this.COUNT) + 1) * this.COUNT
        );
        this.page = Math.ceil(index / this.COUNT) + 1;
        this.animationOpacity();
      }
    },

    countOfShow(startIndex, endIndex) {
      startIndex < 0 ? (startIndex = 0) : "";
      this.dopsFilter = this.getDops.slice(startIndex, endIndex);
    },

    animationOpacity() {
      this.gsap.fromTo(
        "#dops .dops-wrapper .dop-item__wrapper",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
    },

    openModal(item) {
      this.modal.title = item.name;
      this.modal.text = item.descriptionDop;
      item.modalDop
        ? (this.modal.modalDop = item.modalDop)
        : (this.modal.modalDop = "lamp-poster");
      item.video ? (this.modal.video = item.video) : (this.modal.video = "");

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#dops-modal",
          },
        ]);
      }, 100);
    },

    toOrder() {
      this.setDop();
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-order",
          },
        ]);
      }, 100);
    },
  },
  computed: {
    ...mapGetters([
      "getDops",
      "getMobile",
      "getLastPriceWithCountDop",
      "getWebp",
    ]),

    COUNT() {
      //по сколько показывать
      if (this.width1280) {
        return this.showMore ? 9 : 3;
      } else {
        return this.showMore ? 20 : 4;
      }
    },
  },
  mounted() {
    // брейкпоинт на 1280px
    const count_breakpoint = window.matchMedia("(max-width: 1280px)");
    const breakpointChecker = () => {
      if (count_breakpoint.matches) {
        this.width1280 = true;
        this.countOfShow(0, this.COUNT);
      } else {
        this.width1280 = false;
        this.countOfShow(0, this.COUNT);
      }
    };
    count_breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  components: { DopItem, DopModal, DopMobileSlider },
};
</script>

<style lang="scss">
@import "../../../scss/_global.scss";

#dops {
  @extend %padd;
  @media (max-width: 768px) {
    margin: 30px 0;
  }
  overflow: hidden;

  .cards-enter-from,
  .cards-enter-active {
    transform: scale(0.95) translatey(-30px);
    opacity: 0;
  }

  .cards-leave-to {
    transform: translatey(30px);
    opacity: 0;
  }

  .dops-wrapper {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-top: 50px;

    @media (max-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    & > div {
      transition: all 0.3s ease-in-out;
    }
  }

  .button-show {
    margin-top: 50px;
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #e8e8e8;
    padding: 20px;
    color: #565656;
    text-align: center;
    font-family: "Gilroy";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 138.889% */
    text-decoration-line: underline;
  }

  .dops-pagination {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .bullets {
      display: flex;
      align-items: center;
      gap: 10px;

      .bullet {
        cursor: pointer;
        border: 2px solid #323232;
        border-radius: 10px;
        background: #fff;
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
        display: flex;
        color: #323232;
        text-align: center;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-transform: uppercase;
        transition: all 0.2s 0.1s;

        &--active {
          color: #fff;
          background: #323232;
        }

        &:hover {
          opacity: 0.5;
        }
      }
    }

    p {
      color: #323232;
      text-align: right;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .dops-slider {
    max-width: 333px;
    margin: 30px auto 40px;
  }

  .offer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      margin-top: 30px;
    }

    p {
      min-width: 235px;
      font-family: "Gilroy";
      text-align: center;
      font-size: 27px;
      font-weight: 600;
      line-height: 33.08px;
      color: #323232;

      @media (max-width: 576px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>