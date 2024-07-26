<template>
  <section id="map">
    <div class="container">
      <div class="title-map">
        <h2>
          Наши магазины <br />
          — теперь и сервисные центры
        </h2>
        <p class="subtitle">У нас вы cможете:</p>
      </div>
      <div class="list-box">
        <ul class="list-box__list list-box__list_1">
          <li>
            Приобрести трубогибы, станки холодной ковки, пескоструйные аппараты
            и множество других товаров для хобби.
          </li>
          <li>
            Оформить заявку на самовывоз и забрать товар, купленный в
            интернет-магазине.
          </li>
        </ul>
        <ul class="list-box__list list-box__list_2">
          <li>Оформить скидочную карту.</li>
          <li>
            Сдать товар по гарантии, оформить возврат или обмен <br />
            без лишней бюрократии.
          </li>
          <li>Получить консультацию специалистов.</li>
        </ul>
      </div>
    </div>
    <div class="content-container_map">
      <div id="shop-map" class="map-item"></div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Map",

  mounted() {
    this.gsap.timeline({
      delay: 4,
      scrollTrigger: {
        once: true,
        trigger: "#map",
        start: "-60% bottom",
        onEnter: this.getShops,
        onEnterBack: this.getShops,
      },
    });
  },

  methods: {
    async getShops() {
      await axios
        .get("https://apispn.ru/json/shops/")
        .then(function (response) {
          // handle success
          let citiesJSON = JSON.parse(response.data);

          // создание карты с метками
          let script = document.createElement("script");
          script.setAttribute("async", "");
          script.type = "text/javascript";
          script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
          document.querySelector("body").appendChild(script);

          script.onload = function () {
            ymaps.ready(function () {
              let myMap = new ymaps.Map("shop-map", {
                center: [55.75222, 37.61556],
                zoom: 10,
                controls: ["zoomControl"],
              });

              myMap.behaviors.disable("scrollZoom");

              citiesJSON.forEach(function (inx) {
                let city = inx.city;
                inx.shops.forEach(function (shop) {
                  let mark = new ymaps.Placemark(
                    shop.coords,
                    {
                      hasHint: true,
                      hintContent:
                        "Градус Хаус в г. " + city + ", " + shop.name,
                    },
                    {
                      iconLayout: "default#image",
                      iconImageHref:
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzgiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA3OCA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDQzODkiPgo8ZyBpZD0iR3JvdXAgNDM4OCI+CjxnIGlkPSJHcm91cCA0MzQ1Ij4KPGcgaWQ9IlZlY3RvciIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF84NV8yMzApIj4KPHBhdGggZD0iTTYzIDI1LjA3NDNDNjMgMzYuMTY3NCA0OC4zNzUgNTUuOTE2NiA0MS45NjI1IDY0LjA2NTFDNDAuNDI1IDY2LjAwNyAzNy41NzUgNjYuMDA3IDM2LjAzNzUgNjQuMDY1MUMyOS41MTI1IDU1LjkxNjYgMTUgMzYuMTY3NCAxNSAyNS4wNzQzQzE1IDExLjYxNTQgMjUuNzQ1IDAuNzA1MDc4IDM5IDAuNzA1MDc4QzUyLjI1IDAuNzA1MDc4IDYzIDExLjYxNTQgNjMgMjUuMDc0M1oiIGZpbGw9IiMyMzYyQjEiLz4KPC9nPgo8L2c+CjwvZz4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxODUiIGN4PSIzOC45OTc0IiBjeT0iMjQuNDM2OCIgcj0iOS4zMzMzMyIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzg1XzIzMCIgeD0iMCIgeT0iMC43MDUwNzgiIHdpZHRoPSI3OCIgaGVpZ2h0PSI5NC44MTY0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjE1Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjcuNSIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC4xMzcyNTUgMCAwIDAgMCAwLjM4NDMxNCAwIDAgMCAwIDAuNjk0MTE4IDAgMCAwIDAuMTkgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd184NV8yMzAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfODVfMjMwIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=",
                      iconImageSize: [56, 42],
                      iconImageOffset: [-33, -38],
                    }
                  );

                  mark.events.add("click", function (e) {
                    myMap.hint.open(
                      shop.coords,
                      " Градус Хаус в г. " + city + ", " + shop.name
                    );
                  });

                  myMap.geoObjects.add(mark);
                });
              });
            });
          };
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#map {
  overflow: hidden;
  padding-top: 100px;
  @media (max-width: 992px) {
    padding-top: 60px;
  }
  @media (max-width: 768px) {
    padding-top: 30px;
  }

  .title-map {
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
    h2 {
      color: #323232;
      font-family: "Gilroy";
      font-size: 52px;
      font-style: normal;
      font-weight: 600;
      line-height: 59px; /* 113.462% */

      margin-bottom: 20px;

      @media (max-width: 768px) {
        font-size: 27px;
        line-height: 140%;
      }
    }

    .subtitle {
      color: #646464;
      font-family: "Gilroy";
      font-size: 27px;
      font-style: normal;
      font-weight: 500;
      line-height: 34px; /* 125.926% */

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }

  .list-box {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 992px) {
      flex-direction: column;
      row-gap: 20px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 9px;
      width: 100%;

      @media (max-width: 992px) {
        row-gap: 20px;
      }

      li {
        position: relative;
        padding-left: 20px;
        max-width: 626px;
        opacity: 0.75;
        color: #323232;
        font-family: "Roboto";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px; /* 138.889% */

        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 22px;
        }

        &:before {
          position: absolute;
          left: 0;
          top: 9px;
          background: #f6640a;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;

          @media (max-width: 768px) {
            top: 7.5px;
          }
        }
      }
    }
  }

  .content-container_map {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0;
    margin-top: 77px;
    height: 745px;
    max-height: 66vh;
    overflow: hidden;
    margin-top: 50px;

    .map-item {
      height: 745px;
      max-height: 67vh;
    }

    .ymaps-2-1-79-ground-pane {
      filter: grayscale(100%);
    }
  }

  .page-loader-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $gray;
    transform: scale(1.5);
    opacity: 0.8;
    z-index: 10000;
  }
}
</style>
