import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";
import { DOPTYPES } from "../../js/vars/dop-types";

export default createStore({
  modules: {
    storePHP,
  },
  state() {
    return {
      user: {
        name: "",
        phone: "",
        rassrochka: false,
      },

      mobile: window.innerWidth > 769,

      main: [
        {
          id: goods.grinder220,
          price: goodsJson[goods.grinder220].price,
          oldPrice: goodsJson[goods.grinder220].oldPrice,

          selected: false,
          nameModel: "Спутник 220 В",
          // img: "udachniy",
          name: "Гриндер «Спутник», 220 В",

          sale:
            Math.round(
              ((goodsJson[goods.grinder220].oldPrice -
                goodsJson[goods.grinder220].price) /
                goodsJson[goods.grinder220].oldPrice) *
                100
            ) + "%",

          charList: [
            ["Работа от сети 220 В", "да"],
            ["Работа от сети 380 В", "нет"],
            ["Габариты", "365 х 371 х 239 мм"],
            ["Вес", " 14,30 кг"],
            ["Размер ленты", "610 х 50 мм"],
            ["Размеры опорного столика", "166 х 70 мм"],
          ],
        },

        {
          id: goods.grinder380,
          price: goodsJson[goods.grinder380].price,
          oldPrice: goodsJson[goods.grinder380].oldPrice,

          selected: true,
          nameModel: "Спутник 380 В",
          // img: "udachniy_plus",
          name: "Гриндер «Спутник», 380 В",

          sale:
            Math.round(
              ((goodsJson[goods.grinder380].oldPrice -
                goodsJson[goods.grinder380].price) /
                goodsJson[goods.grinder380].oldPrice) *
                100
            ) + "%",

          charList: [
            ["Работа от сети 220 В", "с преобразователем частоты"],
            ["Работа от сети 380 В", "да"],
            ["Габариты", "365 х 371 х 239 мм"],
            ["Вес", " 14,30 кг"],
            ["Размер ленты", "610 х 50 мм"],
            ["Размеры опорного столика", "166 х 70 мм"],
          ],
        },
      ],

      dops: [
        {
          id: goods.lamp,
          price: goodsJson[goods.lamp].price,
          oldPrice: goodsJson[goods.lamp].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.lamp].oldPrice - goodsJson[goods.lamp].price) /
                goodsJson[goods.lamp].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Светильник станочный светодиодный",
          class: "lamp",
          type: DOPTYPES.access,
          count: 0,

          selectedDop: false,
          countDop: 0,
          descriptionDop: `
            <p class="decr">
              Мечта мастера — мощное регулируемое освещение
            </p>

            <p class="decr">
              Гараж, домашняя мастерская — особое пространство, в том 
              числе, для тонких работ (паяние, шлифовка, торцовка и т. п.). 
              Настольные лампы здесь неэффективны: маломощные, 
              занимают много места.
            </p>

            <p class="decr decr-title">Характеристики:</p>
            <ul>
              <li>
                Светодиодный, регулируемая мощность до 10 Вт
              <li>
                Крепится на опорном столике станка (толщиной до 10 мм)
              <li>
                Ножка гибкая, можно регулировать угол наклона
              </li>
            </ul>
 
            <p class="decr decr-bold">
              Профессиональный светильник не имеет аналогов, удобен 
              для любого мастера.
            </p>
          `,
          sliderDop: ["lamp-1", "lamp-2", "lamp-3", "lamp-4"],
          modalDop: "lamp-poster",
        },

        {
          id: goods.nozzel,
          price: goodsJson[goods.nozzel].price,
          oldPrice: goodsJson[goods.nozzel].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.nozzel].oldPrice -
                goodsJson[goods.nozzel].price) /
                goodsJson[goods.nozzel].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Насадка для зачистки труб",
          class: "nozzel",
          type: DOPTYPES.access,
          count: 0,

          video: "nozzel",
          selectedDop: false,
          countDop: 0,
          descriptionDop: `
            <p class="decr">Единственное устройство для качественной обработки круглых труб</p>

            <p class="decr">Применима для любого гриндера с опорным столиком. Функции: снятие ржавчины, старой краски; обработка перед покраской, сваркой; матирование. 
            Главное преимущество — равномерная обработка трубы без существенного истончения металла. Подача трубы — автоматическая при 
            установке столика под углом 3–5°.</p>

            <p class="decr decr-title">Характеристики:</p>
            <ul>
              <li>диаметр труб — 25–80&nbsp;мм;</li>
              <li>толщина опорного столика — до 25&nbsp;мм;</li>
              <li>количество подшипников (закрытого типа) — 6 шт.;</li>
               <li>размеры: высота общая — 270&nbsp;мм; ширина — 40&nbsp;мм; длина струбцины —145&nbsp;мм;</li>
              <li>материал — сталь СТ–3.</li>
            </ul>
          `,
          sliderDop: ["nozzel-1", "nozzel-2"],
          modalDop: "nozzel-poster",
        },

        {
          id: goods.contour,
          price: goodsJson[goods.contour].price,
          oldPrice: goodsJson[goods.contour].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.contour].oldPrice -
                goodsJson[goods.contour].price) /
                goodsJson[goods.contour].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Контуровочный модуль",
          class: "contour",
          type: DOPTYPES.access,
          count: 0,
          headerForm: true,
          video: "contour",
          selectedDop: false,
          countDop: 0,
          descriptionDop: `
            <p class="decr">Дополнительное оборудование для контурного шлифования.</p>

            <p class="decr" style="margin-bottom: 0">Позволяет:</p>
            <ul>
              <li>обработать цилиндрические выемки и углубления;</li>
              <li>делать шлифовку вогнутых поверхностей;</li>
              <li>сделать выборку по радиусу.</li>
            </ul>

             <p class="decr">В комплекте с приспособлением контуровочные ролики (стальные, на закрытых подшипниках) 4 диаметров: 15 мм, 20 мм, 25 мм, 30 мм.</p>
          `,
          modalDop: "contour-poster",
          sliderDop: [
            "spusk-1",
            "spusk-2",
            "spusk-3",
            "spusk-4",
            "spusk-5",
            "spusk-6",
            "spusk-7",
            "spusk-8",
          ],
        },

        {
          id: goods.spusk,
          price: goodsJson[goods.spusk].price,
          oldPrice: goodsJson[goods.spusk].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.spusk].oldPrice -
                goodsJson[goods.spusk].price) /
                goodsJson[goods.spusk].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Модуль для выведения спусков",
          class: "spusk",
          type: DOPTYPES.access,
          count: 0,
          headerForm: true,
          video: "spusk",
          selectedDop: false,
          countDop: 0,
          descriptionDop: `
            <p class="decr">Для тех, кто изготавливает ножи и клинки - необходимое приспособление!</p>

            <p class="decr">Позволяет выводить аккуратные прямые спуски.</p>

            <p class="decr decr-title">Характеристики:</p>
            <ul>
              <li>материал - химически воронёная сталь, 5 мм;</li>
              <li>основание - 110х180 мм;</li>
              <li>количество подшипников (закрытого типа) — 6 шт.;</li>
              <li>поворотная площадка - 60х180 мм;</li>
              <li>вес - 1200 г.</li>
            </ul>

             <p class="decr">Вы можете задавать любую ширину спусков благодаря плавной регулировке угла наклона. В комплект входит струбцина.</p>
          `,
          modalDop: "spusk-poster",
          sliderDop: [
            "contour-1",
            "contour-2",
            "contour-3",
            "contour-4",
            "contour-5",
          ],
        },

        {
          id: goods.periodicity,
          price: goodsJson[goods.periodicity].price,
          oldPrice: goodsJson[goods.periodicity].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.periodicity].oldPrice -
                goodsJson[goods.periodicity].price) /
                goodsJson[goods.periodicity].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Преобразователь частоты",
          class: "periodicity",
          type: DOPTYPES.access,
          count: 0,
          headerForm: true,
          video: "periodicity",
          selectedDop: false,
          countDop: 0,
          descriptionDop: `
            <p class="decr">Плавно меняет скорость вращения ленты без потерь мощности. Позволяет переключать режимы для конкретного материала и ситуации.</p>

            <p class="decr">Двигатель на 380 В подключается к сети 220 В только через частотный преобразователь.</p>

            <p class="decr">Стандартные заводские настройки позволяют преобразователю работать со всеми типами моторов (соединение треугольник).</p>

            <p class="decr decr-title">Характеристики:</p>
            <ul>
              <li>однофазный;</li>
              <li>мощность - 1,5 кВт;</li>
              <li>вход 220 В, выход - 3х220 В;</li>
              <li>есть кулер охлаждения;</li>
              <li>температурный диапазон - от -10 до +40.</li>
            </ul>
          `,
          modalDop: "periodicity-poster",
          sliderDop: ["periodicity-1", "periodicity-2"],
        },

        {
          id: goods.fixator,
          price: goodsJson[goods.fixator].price,
          oldPrice: goodsJson[goods.fixator].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.fixator].oldPrice -
                goodsJson[goods.fixator].price) /
                goodsJson[goods.fixator].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Фиксатор рабочего стола",
          class: "fixator",
          type: DOPTYPES.access,
          count: 0,

          video: "fixator",
          selectedDop: false,
          countDop: 0,
          descriptionDop: `
           
          `,
          modalDop: "fixator-poster",
          sliderDop: ["fixator-1", "fixator-2", "fixator-2"],
        },

        {
          id: goods.naborlen1,
          price: goodsJson[goods.naborlen1].price,
          oldPrice: goodsJson[goods.naborlen1].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.naborlen1].oldPrice -
                goodsJson[goods.naborlen1].price) /
                goodsJson[goods.naborlen1].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Набор запасных лент 915 х 50 мм (Р60,&nbsp;P100,&nbsp;Р180)",
          class: "lenta_dop",
          type: DOPTYPES.material,
          count: 0,
          img: "lenta_dop",
          headerForm: true,

          selectedDop: false,
          countDop: 0,
        },

        {
          id: goods.naborlen2,
          price: goodsJson[goods.naborlen2].price,
          oldPrice: goodsJson[goods.naborlen2].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.naborlen2].oldPrice -
                goodsJson[goods.naborlen2].price) /
                goodsJson[goods.naborlen2].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Набор запасных лент 915 х 50 мм (Р180,&nbsp;P320,&nbsp;Р400)",
          class: "lenta_dop",
          type: DOPTYPES.material,
          count: 0,
          img: "lenta_dop",
          headerForm: true,

          selectedDop: false,
          countDop: 0,
        },

        {
          id: goods.ugol,
          price: goodsJson[goods.ugol].price,
          oldPrice: goodsJson[goods.ugol].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.ugol].oldPrice - goodsJson[goods.ugol].price) /
                goodsJson[goods.ugol].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Магнитный угол для сварки",
          class: "ugol",
          type: DOPTYPES.other,
          count: 0,
          img: "ugol",

          selectedDop: false,
          countDop: 0,
        },

        {
          id: goods.goniometer,
          price: goodsJson[goods.goniometer].price,
          oldPrice: goodsJson[goods.goniometer].oldPrice,
          sale:
            Math.round(
              ((goodsJson[goods.goniometer].oldPrice -
                goodsJson[goods.goniometer].price) /
                goodsJson[goods.goniometer].oldPrice) *
                100
            ) + "%",
          selected: false,
          name: "Угломер электронный",
          class: "goniometer",
          type: DOPTYPES.other,
          count: 0,
          img: "goniometer",

          selectedDop: false,
          countDop: 0,
        },
      ],
      credit: [
        {
          id: 6,
          name: "Срок 6 месяцев",
          selected: true,
        },
        {
          id: 9,
          name: "Срок 9 месяцев",
          selected: false,
        },
        {
          id: 10,
          name: "Срок 10 месяцев",
          selected: false,
        },
        {
          id: 12,
          name: "Срок 12 месяцев",
          selected: false,
        },
      ],
    };
  },
  mutations: {
    setMobile(state, value) {
      state.mobile = value;
    },

    changeUserRassrochka(state, value) {
      state.user.rassrochka = value;
    },

    selectMain(state, id) {
      state.main.forEach((element) => {
        element.id == id
          ? (element.selected = true)
          : (element.selected = false);
      });
    },

    selectDop(state, id) {
      state.dops.find((el) => el.id == id).selected = !state.dops.find(
        (el) => el.id == id
      ).selected;
    },

    setCount(state, arr_oper) {
      let dop = state.dops.find((el) => el.id == arr_oper[0]);

      if (arr_oper[1] == "plus") {
        if (dop.selected == false) {
          dop.selected = true;
        } else {
          dop.count < 11 ? dop.count++ : "";
        }
      } else {
        if (arr_oper[1] == "minus") {
          dop.count == 0 ? (dop.selected = false) : "";
          dop.count > 0 ? dop.count-- : "";
        }
      }
    },

    setCountDop(state, { id, action }) {
      let dop = state.dops.find((el) => el.id == id);

      if (action == "plus") {
        if (dop.selectedDop == false) {
          dop.selectedDop = true;
        } else {
          dop.countDop < 11 ? dop.countDop++ : "";
        }
      } else {
        if (action == "minus") {
          dop.countDop == 0 ? (dop.selectedDop = false) : "";
          dop.countDop > 0 ? dop.countDop-- : "";
        } else {
          if (action == "remove") {
            dop.countDop = 0;
            dop.selectedDop = false;
          }
        }
      }
    },

    changeCredit(state, id) {
      for (let i = 0; i < state.credit.length; i++) {
        if (state.credit[i].id === id) {
          state.credit[i].selected = true;
        } else {
          state.credit[i].selected = false;
        }
      }
    },

    setDop(state) {
      state.dops.forEach((element) => {
        element.selectedDop
          ? ((element.selected = true), (element.count = element.countDop))
          : ((element.selected = false), (element.count = 0));
      });
    },
  },
  getters: {
    getMobile(state) {
      return state.mobile;
    },

    getMainId(state) {
      return state.main.find((el) => el.selected).id;
    },

    getMainSale(state) {
      return state.main.find((el) => el.selected).sale;
    },

    getMainItem(state) {
      return state.main.find((el) => el.selected);
    },

    getMain(state) {
      return state.main;
    },

    getMainPrices(state) {
      return [state.main[1].price, state.main[1].oldPrice];
    },
    getCredit(state) {
      return state.credit;
    },
    getDops(state) {
      return state.dops;
    },

    getDopsSelectedBoolean(state) {
      return !!state.dops.filter((el) => el.selected).length;
    },

    getUser(state) {
      return state.user;
    },
    getUserRassrochka(state) {
      return state.user.rassrochka;
    },

    getLastPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price : sum;
      }, state.main.find((el) => el.selected).price);
    },

    getLastPriceWithCount(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price * (dop.count + 1) : sum;
      }, state.main.find((el) => el.selected).price);
    },

    getLastOldPriceWithCount(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.oldPrice * (dop.count + 1) : sum;
      }, state.main.find((el) => el.selected).oldPrice);
    },

    getLastPriceStandartVersion(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price : sum;
      }, state.main[0].price);
    },

    getLastOldPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.oldPrice : sum;
      }, state.main.find((el) => el.selected).oldPrice);
    },

    getLastPriceWithCountDop(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selectedDop ? sum + dop.price * (dop.countDop + 1) : sum;
      }, 0);
    },
  },
});
