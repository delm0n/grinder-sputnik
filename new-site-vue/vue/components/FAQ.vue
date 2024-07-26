<template>
  <section id="faq">
    <div class="container">
      <div class="title">
        <h2>Часто задаваемые вопросы</h2>
      </div>
      <div class="faq-wrapper">
        <div v-for="(item, index) in questions" :key="index" class="faq-item">
          <div @click="showHide(index)" class="faq-item__title">
            <h3>
              <span> ? </span>
              <b v-html="item.title"> </b>
            </h3>
            <svg
              :style="
                item.open
                  ? 'transform: rotate(180deg)'
                  : 'transform: rotate(0deg)'
              "
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M3 3L13.3572 11.7638C14.0168 12.3219 14.9832 12.3219 15.6428 11.7638L26 3"
                stroke="#FED740"
                stroke-width="5.30769"
                stroke-linecap="round"
              />
              <path
                d="M3 16.2695L13.3572 25.0333C14.0168 25.5915 14.9832 25.5915 15.6428 25.0333L26 16.2695"
                stroke="#FED740"
                stroke-width="5.30769"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <collapse :when="item.open">
            <div class="faq-item__content">
              <div class="text-box">
                <p v-html="item.content"></p>
              </div>
            </div>
          </collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Collapse } from "vue-collapsed";

export default {
  components: {
    Collapse,
  },

  data() {
    return {
      questions: [
        {
          title:
            "Сколько времени гриндер «Спутник» может работать без перерыва?",
          content: `Согласно проведённым испытаниям и полученным отзывам, максимальное время непрерывной работы гриндера без сильного перегрева — 1,5 часа. Рекомендованное время непрерывной эксплуатации изделия — 60 минут. Далее желателен перерыв на 5–10 минут. `,
          open: false,
        },

        {
          title: "С каким напряжением сети работает гриндер «Спутник»?",
          content: `Гриндер «Спутник» с однофазным двигателем работает от обычной сети с напряжением 220 В. Гриндер «Спутник» с трёхфазным двигателем может работать от сети на 380 В либо от сети на 220 В, если применяется частотный преобразователь.`,
          open: false,
        },

        {
          title: "Зачем у гриндера «Спутник» в комплекте сразу 3 ленты?",
          content:
            "Использование лент разной зернистости — необходимость для многофункционального гриндера. Мы предлагаем три типа лент (Р60, Р100 и Р180) с возможностью обработки металла, дерева, стекла, пластика и полимеров, керамики.",
          open: false,
        },

        {
          title:
            "Какие задачи может решать гриндер «Спутник» с использованием дополнительных приспособлений?",
          content: `Модуль для выведения спусков упрощает заточку ножей и даже позволяет создать лезвие с нуля. С контуровочным модулем и лентой 50х1200 мм гриндер может обрабатывать вогнутые контуры, шлифовать цилиндрические углубления и создавать малые радиусы. Патрон для сверления применим для небольших токарных работ и фиксации любой оснастки. Войлочная лента 50х915 используется для зеркальной полировки стали. Частотный преобразователь позволяет плавно регулировать число оборотов, переходить с одного материала на другой.`,
          open: false,
        },

        {
          title:
            "Можно ли подключить гриндер, предназначенный для сети 220 В, к сети 380 В и наоборот, и как это сделать?",
          content: `Подключить однофазный гриндер, предназначенный для сети 220 В, к сети 380 В, к сожалению, не получится. Гриндер с трёхфазным двигателем, предназначенный для сети 380 В, вы легко подключите к сети 220 В, используя частотный преобразователь. Модель частотного преобразователя можно выбрать и подключить самостоятельно, согласно инструкции для частотного преобразователя. В нашем ассортименте — частотные преобразователи IDS Drive, тип N.`,
          open: false,
        },

        {
          title:
            "Что лучше, использовать преобразователь частоты или конденсатор для гриндера с трёхфазным двигателем на 380&nbsp;В?",
          content: `Лучше применять преобразователь частоты. Такое устройство, как пусковой конденсатор, позволит вам достичь только 50% КПД. С частотным преобразователем КПД двигателя будет примерно в 1,5 раза выше. К тому же он позволяет регулировать скорость вращения, препятствует перегреванию, а также имеет ряд иных встроенных защит.`,
          open: false,
        },
      ],
    };
  },

  methods: {
    showHide(i) {
      this.questions.forEach((element, index) => {
        index == i
          ? (element.open = element.open == true ? false : true)
          : (element.open = false);
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#faq {
  @extend %padd;
  overflow: hidden;
  background: #f5f5f5;

  .faq-item {
    &:not(:last-child) {
      margin-bottom: 30px;

      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }

    &__title {
      border-radius: 10px;
      padding: 10px 30px;
      cursor: pointer;
      user-select: none;
      // min-height: 100px;
      display: flex;
      align-items: center;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      gap: 15px;
      justify-content: space-between;

      background: #ffffff;
      border-radius: 10px;

      @media (max-width: 768px) {
        padding: 14px;
        min-height: 70px;
      }

      &:hover {
        h3 span {
          background-color: #fed740;
        }
      }

      h3 {
        display: flex;
        gap: 20px;
        align-items: center;

        b {
          color: #323232;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 131.818%;

          @include fluidFontSize(18, 22, 993, 1920);

          @media (max-width: 576px) {
            font-size: 16px;
            line-height: 21px;
          }
        }

        span {
          flex-shrink: 0;
          transition: all 0.3s;
          border-radius: 100%;
          background-color: #f6640a;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;

          color: #fff;
          font-family: "Gilroy";
          font-size: 22.759px;
          font-style: normal;
          font-weight: 1000;
          line-height: 30px; /* 131.818% */

          @media (max-width: 576px) {
            display: none;
          }
        }
      }

      svg {
        flex-shrink: 0;
        transform-origin: center;
        transition: all 0.4s;
        width: 30px;
        height: 30px;

        @media (max-width: 992px) {
          width: 24px;
          height: 24px;
        }
      }
    }

    &__content {
      border-radius: 0px 0px 10px 10px;
      background: rgba(255, 255, 255, 0.5);

      transition: all 0.4s ease;
      max-width: 80%;
      margin: 0 auto;

      @media (max-width: 992px) {
        max-width: 95%;
      }

      .text-box {
        padding: 50px;

        @media (max-width: 1280px) {
          padding: 40px;
        }

        @media (max-width: 992px) {
          padding: 30px;
        }

        @media (max-width: 768px) {
          padding: 20px;
        }

        @media (max-width: 576px) {
          padding: 15px 10px;
        }

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

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 29px; /* 131.818% */

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
