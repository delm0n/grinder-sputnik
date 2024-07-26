<template>
  <section id="complectation">
    <div class="container">
      <div class="complectation-container">
        <div class="title-wrap">
          <div class="complectation-title-container">
            <div class="complectation-title">
              <h2>
                Полная <br />
                комплектация
              </h2>
            </div>
            <p>Докупать ничего не нужно</p>
          </div>
        </div>

        <div class="complectation-wrapper">
          <div class="complectation-wrapper__items">
            <div
              v-for="(item, index) in complect"
              :key="index"
              @click="openModal(item)"
              @mouseenter="hoverEnter(index)"
              @mouseleave="hoverLeave(index)"
              :class="[
                'complectation-item',
                'complectation-item-' + (index + 1),
                item.hover ? 'complectation-item--active' : '',
              ]"
            >
              <p v-html="index + 1 + '. ' + item.name"></p>
            </div>
          </div>
          <div class="complectation-wrapper__imgs">
            <div class="main-box">
              <my-image
                :class="['complectation-img', 'main']"
                :alt="'#'"
                :floder="'complectation'"
                :mobile="false"
                :imgName="'main'"
              />
              <div
                v-for="(item, index) in complect"
                :key="index"
                @click="openModal(item)"
                :class="[
                  'plus',
                  'plus-' + (index + 1),
                  item.hover ? 'plus--active' : '',
                ]"
              >
                <svg
                  @mouseenter="hoverEnter(index)"
                  @mouseleave="hoverLeave(index)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#F6640A"
                    fill-opacity="0.4"
                  />
                  <circle cx="24" cy="24" r="17" fill="#F6640A" />
                  <path
                    d="M22.672 32.944C22.4373 32.944 22.2453 32.8693 22.096 32.72C21.9467 32.5707 21.872 32.3787 21.872 32.144V26.096H15.952C15.7173 26.096 15.5253 26.0213 15.376 25.872C15.2267 25.7227 15.152 25.5413 15.152 25.328V23.312C15.152 23.0773 15.2267 22.8853 15.376 22.736C15.5253 22.5867 15.7173 22.512 15.952 22.512H21.872V16.656C21.872 16.4213 21.9467 16.2293 22.096 16.08C22.2453 15.9307 22.4373 15.856 22.672 15.856H24.88C25.1147 15.856 25.3067 15.9307 25.456 16.08C25.6053 16.2293 25.68 16.4213 25.68 16.656V22.512H31.6C31.8133 22.512 31.9947 22.5867 32.144 22.736C32.2933 22.8853 32.368 23.0773 32.368 23.312V25.328C32.368 25.5413 32.2933 25.7227 32.144 25.872C31.9947 26.0213 31.8133 26.096 31.6 26.096H25.68V32.144C25.68 32.3787 25.6053 32.5707 25.456 32.72C25.3067 32.8693 25.1147 32.944 24.88 32.944H22.672Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="complectation-modal" style="display: none">
      <div class="modal-wrapper">
        <my-image
          class="modal-wrapper__img"
          :alt="'автоклав крестьянка с тен'"
          :floder="'complectation'"
          :mobile="false"
          :imgName="modal.img"
        />
        <div class="modal-wrapper__title">
          <p v-html="modal.title"></p>
        </div>
        <div class="modal-wrapper__text">
          <p class="modal-text" v-html="modal.text"></p>

          <p class="char-title" v-if="modal.char">Характеристики:</p>
          <ul class="char-list" v-if="modal.char">
            <li v-for="(item, index) in modal.char" :key="index">
              <span v-html="item[0]"></span> —
              <b v-html="item[1]"></b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";

export default {
  components: {
    MyImage,
  },
  data() {
    return {
      break1280: window.innerWidth < 1281,

      modal: {
        img: "modal-1",
        text: "",
        title: "",
        char: [],
      },
      complect: [
        {
          name: "Электродвигатель",

          img: "main",
          hover: false,
          imgModal: "modal-1",
          char: [
            ["Мощность", "1,5 кВт"],
            ["Скорость вращения", "2850 об/мин"],
            [
              "Тип двигателя",
              "однофазный (от сети 220 В) или трёхфазный (380 В)",
            ],
          ],
          text: `
           Двигатель на 1,5 кВт — это гарантия, что гриндер справится с обработкой большинства металлов и сплавов. С ним можно одновременно шлифовать дерево и снимать ржавчину с металла. Скорость вращения двигателя — 2850 об/мин. Модель в версии с асинхронным однофазным двигателем работает от сети 220 В, в версии с асинхронным 3-фазным двигателем — от сети 380 и 220 В (с частотным преобразователем)..`,
        },

        {
          name: "Узел натяжения",
          hover: false,
          imgModal: "modal-2",
          text: `
          Следствие длительной эксплуатации ленты — её растяжение. Для компенсации этого предусмотрен механизм натяжения. Надёжное крепление с помощью регулировочного винта предотвращает любые соскальзывания ленты в процессе работы. Пружинный преднатяжитель формирует постоянное равномерное натяжение ленты. Настройка положения ленты с помощью узла натяжения производится после каждой смены ленты и запуска в работу после простоя.`,
        },

        {
          name: "Рама (станина)",
          char: [
            ["Материал", "сталь СТ–45"],
            ["Толщина", "10 мм"],
            ["Угол поворота ленты ", "90 градусов"],
          ],
          hover: false,
          imgModal: "modal-3",
          text: `
          Рама — платформа для крепления основных комплектующих гриндера. Выполнена из прочной стали СТ–45, толщина — 10 мм. Основание может закрепляться на любой плоской поверхности (в нём присутствуют 4 специальных отверстия).
          <br><br>
          Станина — поворотная. Угол разворота — до 180 градусов. Угол поворота ленты — 90⁰С. Широкий диапазон регулировок позволяет обрабатывать даже труднодоступные места и поверхности.
          `,
        },

        {
          name: "Ролики (2 шт.)",
          char: [
            ["Количество", "2 шт."],
            ["Материал", "сталь СТ–45 "],
            ["Класс прочности", "10,9"],
          ],
          hover: false,
          imgModal: "modal-4",
          text: `Ролики имеют высокую прочность. Ролики выполнены из износостойкой стали СТ–45. Класс прочности — 10,9. Валы бочкообразные - лента при работе не сползает.`,
        },

        {
          name: "Приводной шкив",
          hover: false,
          imgModal: "modal-5",
          text: `
          Приводной шкив (ведущий ролик) выполнен из капролона. Он имеет эффект самосмазывания и не подвержен коррозии. Коэффициент трения капролона в 2 раза ниже, чем у металла. Благодаря этим показателям шкив из капролона в 1,5 раза долговечнее металлического. Линейная скорость ленты — до 24 м/с; с частотным преобразователем — от 8 до 45 м/с. 
          <br><br>
          На ведущем ролике предусмотрен адаптер для сверлильного патрона.
          `,
          char: [
            ["Материал", "капролон"],
            ["Размеры ", "160 х 54 мм"],
            ["Линейная скорость", "24 м/с"],
          ],
        },

        {
          name: "Опорная пластина",
          char: [
            ["Материал", "марганцевая сталь 65Г"],
            ["Толщина", "10 мм"],
            ["Размеры", "50 х 160 мм"],
          ],
          hover: false,
          imgModal: "modal-6",
          text: `Опорная пластина позволяет снизить силу трения при скольжении ленты. Сделана из прочной марганцевой стали, толщина — 10 мм. Пластина отшлифована с 2 сторон, что снижает трение ленты и повышает срок её эксплуатации.`,
        },

        {
          name: "Опорный столик",
          modalName: "Опорный столик",
          // img: "table",
          hover: false,
          imgModal: "modal-7",

          char: [
            ["Материал", "сталь СТ–45"],
            ["Толщина", "8 мм"],
            ["Размеры", "130 х 300 мм"],
          ],

          text: `Опорный столик — поворотный, регулируется по высоте и углу наклона. Широкий диапазон регулировок позволяет обрабатывать в том числе труднодоступные места и поверхности. Дополнительное преимущество — столик удобный, достаточно большой (размер — 130 х 300 мм). Столики металлические, химически оксидированные.`,
        },

        {
          name: "Абразивные ленты (3&nbsp;шт.)",
          // img: "lenta",
          hover: false,
          imgModal: "modal-8",
          text: `
         3 ленты, входящие в этот набор, подходят для работы с углеродистой и легированной сталью, цветными металлами, твёрдыми породами дерева. 
        <br><br>
        В основе — хлопчатобумажная лента, рабочее тело — электрокорунд.
                  
          `,
          char: [
            ["Гритность", "Р60, P100, Р180"],
            ["Размер", "50 х 915 мм"],
          ],
        },

        {
          name: "Инструкция и гарантийный талон",
          //  ? img: "book",
          hover: false,
          imgModal: "modal-9",
          char: [["Гарантийный срок", "3 года"]],
          text: `Чтобы ваша работа с гриндером «Спутник» была максимально эффективной и безопасной, мы предоставляем инструкцию по эксплуатации. Она содержит подробное описание всех комплектующих, основные характеристики, специфику работы, ухода, меры предосторожности.
          <br><br>
          Мы — производитель, уверенный в качестве собственного оборудования, потому предлагаем на свои изделия гарантию. Для гриндера «Спутник» это 3 года. Гарантийный талон — документ, на основании которого может быть осуществлён ремонт, замена оборудования либо возврат финансовых средств в течение срока гарантии.`,
        },
      ],
    };
  },
  methods: {
    hoverEnter(index) {
      this.complect[index].hover = true;
    },
    hoverLeave(index) {
      this.complect[index].hover = false;
    },

    modalSet(img, text, title, char) {
      this.modal.img = img;
      this.modal.text = text;
      this.modal.title = title;
      this.modal.char = char;
    },

    openModal(item) {
      this.modalSet(
        item.imgModal,
        item.text,
        item.modalName ? item.modalName : item.name,
        item.char
      );

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#complectation-modal",
          },
        ]);
      }, 400);
    },
  },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 1280px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.break1280 = false;
      } else {
        this.break1280 = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#complectation {
  overflow: hidden;
  background: #f9f9f9;
  padding: 100px 0;
  @media (max-width: 991px) {
    padding: 60px 0;
  }
  @media (max-width: 576px) {
    padding: 30px 0;
  }

  $middle-line: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjk1IiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIwIDAgNjk1IDQ0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kXzk0XzkxKSI+CjxwYXRoIGQ9Ik0xNyAxNi45MThDMTYuNDQ3NyAxNi45MTggMTYgMTcuMzY1NyAxNiAxNy45MThDMTYgMTguNDcwMyAxNi40NDc3IDE4LjkxOCAxNyAxOC45MThWMTYuOTE4Wk02NzkgMTcuOTE4TDY2OSAxMi4xNDQ1VjIzLjY5MTVMNjc5IDE3LjkxOFpNMTcgMTguOTE4SDY3MFYxNi45MThIMTdWMTguOTE4WiIgZmlsbD0iIzIzNjJCMSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfOTRfOTEiIHg9IjAiIHk9IjAuMTQ0NTMxIiB3aWR0aD0iNjk1IiBoZWlnaHQ9IjQzLjU0NjkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI4Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC42NSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Xzk0XzkxIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93Xzk0XzkxIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=);
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .complectation-container {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    padding: 0 20px 50px;

    img:not(.loaded) {
      opacity: 0;
    }

    .img-wrap.loaded {
      img:not(.loaded) {
        opacity: 1;
      }
    }
  }

  .title-wrap {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;

    margin: 0 auto 20px;

    .complectation-toggle {
      display: flex;
      gap: 30px;
      justify-content: center;
      flex-wrap: wrap;
      align-self: center;
      width: 100%;
      max-width: 512px;

      @media (min-width: 1280px) {
        align-self: flex-start;
        padding-top: 20px;
      }

      @media (max-width: 768px) {
        gap: 15px;
        align-items: center;
      }

      .toggle-item {
        color: #f6640a;
        text-align: center;
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        white-space: nowrap;
        background: #fff;
        border-radius: 30px;
        border: 2px solid #f6640a;
        transition: all 0.3s;
        cursor: pointer;
        padding: 10px;
        max-width: 241px;
        width: 100%;

        &:hover {
          border: 2px solid rgba(35, 98, 177, 0.7);
          color: rgba(35, 98, 177, 0.7);
        }

        @media (max-width: 768px) {
          max-width: 148px;
          font-size: 16px;
        }

        &--active {
          color: #fff !important;
          background: #f6640a !important;
        }
      }
    }

    .complectation-title {
      &-container {
        flex-direction: column;
        gap: 20px;
        align-items: center;
        display: flex;

        p {
          color: #646464;
          text-align: center;
          font-family: "Gilroy";
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 123.333%;

          @include fluidFontSize(18, 30, 320, 992);
        }
      }
      h2 {
        color: #fff;
        text-align: center;
        font-family: "Gilroy";
        font-size: 44px;
        font-style: normal;
        font-weight: 600;
        line-height: 113.462%;
        text-transform: uppercase;

        @include fluidFontSize(22, 44, 320, 992);
        @media (min-width: 769px) {
          br {
            display: none;
          }
        }
      }

      padding: 10px 20px;
      border-radius: 0px 0px 10px 10px;
      background: #f6640a;

      @media (max-width: 992px) {
        margin: 0 auto;
      }
    }
  }

  .complectation-wrapper {
    display: grid;
    grid-template-columns: calc(342px + 20px) 1fr;
    max-width: 1178px;
    margin: 0 auto;

    @media (max-width: 1280px) {
      grid-template-columns: minmax(0, 336px) minmax(335px, 1fr);
      gap: 20px;
    }
    @media (max-width: 1090px) {
      grid-template-columns: minmax(0, 316px) minmax(335px, 1fr);
      gap: 20px;
    }
    // 309px

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    &__items {
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 5;
      background: #fff;

      @media (min-width: 1281px) {
        padding: 80px 20px 20px 0px;
      }

      @media (max-width: 992px) {
        display: none;
      }

      .complectation-item {
        border-radius: 10px;
        background-color: #f9f9f9;
        padding: 10px 20px;
        transition: background-color 0.4s;
        cursor: pointer;

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        @media (min-width: 1281px) {
          &-6 {
            margin-bottom: 140px !important;
          }
        }

        p {
          color: #323232;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 131.818%;

          @media (max-width: 1024px) {
            @include fluidFontSize(16, 18, 768, 1024);
          }
        }

        &--active {
          background-color: #f6640a;

          p {
            color: #fff;
          }
        }
      }
    }

    &__imgs {
      grid-row: 1/2;
      overflow: hidden;
      z-index: 4;

      grid-column: 2/3;
      align-self: center;

      @media (max-width: 992px) {
        align-self: center;
        max-width: 540px;
        grid-column: 1 / -1;
        width: 100%;
        margin: 25px auto;
      }

      @media (max-width: 576px) {
        max-width: 400px;
        margin: 0 auto;
      }

      .main-box {
        position: relative;
        aspect-ratio: 1 / 1;
        max-width: 775px;
        width: 100%;
        margin-left: auto;

        img {
          max-width: 100%;
        }
      }

      .plus {
        position: absolute;
        cursor: pointer;
        z-index: 10;
        animation: pulse 2s linear infinite;

        &:hover {
          animation: none;
        }

        svg {
          * {
            transition: all 0.4s;
          }
        }

        @media (max-width: 576px) {
          width: 25px;
          height: 25px;

          svg {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        &--active {
          svg {
            circle {
              fill: #f9f9f9;

              &:last-child {
                fill: #f9f9f9;
                opacity: 0.7;
              }
            }

            path {
              fill: #323232;
              opacity: 0.7;
            }
          }
        }

        &-1 {
          top: 15%;
          right: 23%;
        }

        &-2 {
          top: 28%;
          right: 11px;
        }

        &-3 {
          top: 49%;
          right: 48.5%;
        }

        &-4 {
          top: 53%;
          right: 10%;
        }

        &-5 {
          top: 43%;
          right: 10%;
        }

        &-6 {
          top: 60%;
          right: 13%;
        }

        &-7 {
          bottom: 33%;
          left: 8%;
        }

        &-8 {
          top: 23%;
          left: 10%;
        }

        &-9 {
          bottom: 26px;
          left: 15%;
        }
      }
    }
  }
}

#complectation-modal {
  @extend %modal;

  .modal-wrapper {
    @media (min-width: 769px) {
      display: grid;
      grid-template-columns: 1.05fr 1.1fr;
    }

    &__title {
      font-weight: 700;
    }

    &__img {
      aspect-ratio: 1 / 1;
      width: 100%;
    }

    .modal-text {
      ul {
        padding-left: 20px;
        li {
          list-style: disc;

          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
    }

    .char-title {
      margin: 20px 0 10px;
      color: #323232;
      font-family: "Gilroy";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px; /* 135% */

      @media (max-width: 768px) {
        margin: 6px 0;
        font-size: 18px;
      }
    }

    .char-list {
      padding-left: 20px;

      li {
        color: #323232;
        font-family: "Gilroy";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        list-style: disc;
        b {
          font-weight: 600;
        }
      }
    }
  }
}
</style>