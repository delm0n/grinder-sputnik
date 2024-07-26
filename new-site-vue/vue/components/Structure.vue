<template>
  <section id="structure">
    <div class="container">
      <div class="title">
        <h2>Гриндер «Спутник» — совершенство в каждой детали</h2>
        <p class="subtitle">
          {{ structureList.length }}
          {{ structureList.length > 4 ? "аргументов" : "аргумента" }} в пользу
          уникальной конструкции
        </p>
      </div>
      <div class="structure-wrapper">
        <structure-item
          @show-modal="showModal"
          v-for="(item, index) in structureList"
          :key="index"
          :item="item"
          :index="index"
        />
      </div>

      <div class="structure-label">
        <my-image
          class="structure-label__icon"
          :alt="'#'"
          :floder="'structure'"
          :imgName="'label'"
          :mobile="false"
        />
        <p>
          Вы получаете профессиональный гриндер с мощным двигателем, способным
          60 минут подряд работать без перегрева. За счёт поворотных столика и
          станины можно обрабатывать даже труднодоступные места, работать с
          вогнутыми и выпуклыми поверхностями. Капролоновый шкив способствует
          увеличению срока эксплуатации шлифовальной ленты.
        </p>
      </div>
    </div>

    <div id="structure-modal">
      <div class="structure-item structure-modal">
        <div class="structure-modal__img">
          <my-image
            v-for="(img, i) in [
              structureModal.imgList[0],
              structureModal.imgList[1],
            ]"
            :key="i"
            :alt="'#'"
            :floder="'structure'"
            :imgName="img"
            :mobile="false"
          />
        </div>
        <div class="structure-item__content structure-modal__content">
          <h3 v-html="structureModal.title"></h3>
          <p class="decr" v-html="structureModal.decr"></p>
          <ul>
            <li v-for="(li, i) in structureModal.list" :key="i">
              <b v-html="li.title"></b>
              <span v-html="li.text"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StructureItem from "./StructureItem.vue";
import MyImage from "../UI/MyImage.vue";

export default {
  components: {
    StructureItem,
    MyImage,
  },
  data() {
    return {
      structureList: [
        {
          label: {
            text: "Новинка",
            color: "red",
          },
          title: "Поворотная станина и опорный столик",
          decr: "Работа в горизонтальном и вертикальном положениях, под любым углом",
          list: [
            {
              title: "Подбор удобного положения",
              text: "Разворот поворотной станины — 90 градусов.",
            },

            {
              title: "Поворотный столик",
              text: "Опорный столик регулируется по высоте и углу наклона. Обработка даже труднодоступных мест и поверхностей.",
            },

            {
              title: "Химическое оксидирование",
              text: "Столик устойчив к механическим воздействиям. Обработка грубой текстуры и ржавчины без ущерба для поверхности.",
            },
          ],
          video: {
            poster: "structure-2-1",
            src: "structure-2",
          },
          imgList: ["structure-1-2", "structure-1-3"],
        },

        {
          label: {
            text: "45 метров в секунду",
            color: "yellow",
          },
          title: "Капролоновый шкив",
          decr: "Эксплуатация — в 1,5 раза дольше, чем у металлических аналогов",
          list: [
            {
              title: "Идеальный материал для ведущего ролика",
              text: "Самосмазывание поверхности, не подвержен коррозии.",
            },

            {
              title: "Высокая скорость ленты",
              text: "Низкий коэффициент трения позволяет работать на скорости до 24 м/с; с частотным преобразователем — до 45 м/с (гриндер на 380 В).",
            },

            {
              title: "Адаптер для сверлильного патрона",
              text: "Закрепляется дополнительно, для небольших токарных работ или фиксации оснастки.",
            },
          ],
          video: {
            poster: "structure-1-1",
            src: "structure-1",
          },

          imgList: ["structure-2-2", "structure-2-3"],
        },

        {
          label: {
            text: "Увеличенный жизненный цикл роликов",
            color: "blue",
          },
          title: "Мощный двигатель на 1,5 кВт",
          decr: "Асинхронный одно- либо трёхфазный двигатель на 220 В и 380 В по вашему выбору. Двигатели по ГОСТ 31606-2012",
          list: [
            {
              title: "Функциональность",
              text: "Возможность как шлифовать дерево, так и снимать ржавчину с металла.",
            },

            {
              title: "Производительность профессионального гриндера",
              text: "Скорость вращения двигателя — 2850 оборотов в минуту.",
            },

            {
              title: "Настройка — без потери мощности",
              text: "С частотным преобразователем (трёхфазный двигатель) можно плавно регулировать число оборотов ленты без потерь в мощности для двигателя.",
            },
          ],

          imgList: ["structure-3-1", "structure-3-2"],
        },

        {
          label: {
            text: "Доставка в прочном деревянном ящике",
            color: "green",
          },
          title: "Минимальное количество составных элементов",
          decr: "Вы экономите на запчастях. Конструкция гриндера настолько продуманна и проста, что ломаться там попросту нечему.",
          list: [
            {
              title: "Безопасная транспортировка",
              text: "В деревянном ящике гриндер поставляется в полной сборке. Изделие прикреплено к основанию, и ему не страшна даже длительная транспортировка.",
            },

            {
              title: "Быстрая сборка",
              text: "Чтобы приступить к работе, просто установите нужную ленту, отрегулируйте её длину и закрепите основание гриндера. Это займёт не более 5 минут!",
            },
          ],
          imgList: [
            "structure-4-1",
            "structure-4-2",
            "structure-4-3",
            "structure-4-4",
          ],
        },
      ],
      structureModal: {
        title: "",
        decr: "",
        list: [
          {
            title: "",
            text: "",
          },
        ],
        imgList: [],
      },
    };
  },
  methods: {
    showModal(item) {
      this.structureModal.title = item.title;
      this.structureModal.decr = item.decr;
      this.structureModal.list = item.list;
      this.structureModal.imgList = item.imgList;

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#structure-modal",
          },
        ]);
      }, 100);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#structure {
  @extend %padd;
  overflow: hidden;

  .structure-wrapper {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .structure-label {
    margin-top: 50px;
    padding: 30px;
    padding-left: 40px;
    position: relative;
    border-radius: 10px;
    border: 3px solid #f6640a;

    @media (max-width: 768px) {
      padding: 20px;
      padding-left: 25px;

      &__icon {
        width: 20px;
      }
    }

    &__icon {
      position: absolute;
      left: 0;
      top: 30px;
    }

    p {
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 131.818%;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}

#structure-modal {
  @extend %modal;
  .structure-modal {
    display: grid;
    grid-template-columns: 1.1fr 1.05fr;
    gap: 0 30px;
    align-items: center;
    color: #323232;
    font-family: "Gilroy";
    font-style: normal;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    &__img {
      .img-wrap {
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    &__content {
      max-width: 100%;

      h3 {
        border: none;
      }

      .decr,
      ul,
      span {
        display: flex;
      }
    }
  }
}
</style>