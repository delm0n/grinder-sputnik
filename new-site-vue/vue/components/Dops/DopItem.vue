<template>
  <div class="dop-item">
    <div class="dop-item__wrapper">
      <div class="dop-item__img">
        <div v-if="!!dop.img" class="dop-img">
          <img
            :src="'new-site-vue//build/images/dops/' + dop.img + webp"
            :alt="dop.name"
          />
        </div>
        <dop-item-slider v-else :images="dop.sliderDop" :webp="webp" />

        <svg
          v-if="dop.video"
          @click="openModal(dop)"
          class="video-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="115"
          height="30"
          viewBox="0 0 115 30"
          fill="none"
        >
          <rect width="115" height="30" rx="15" fill="#F6640A" />
          <mask
            id="mask0_1187_782"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="20"
            y="5"
            width="20"
            height="20"
          >
            <rect
              x="20"
              y="5"
              width="20"
              height="20"
              fill="url(#pattern0_1187_782)"
            />
          </mask>
          <g mask="url(#mask0_1187_782)">
            <rect
              x="2"
              y="-6.33398"
              width="56.6667"
              height="41.3333"
              fill="white"
            />
          </g>
          <path
            d="M46.2784 20.5V8.86364H50.5398C51.3655 8.86364 52.0492 9 52.5909 9.27273C53.1326 9.54167 53.5379 9.9072 53.8068 10.3693C54.0758 10.8277 54.2102 11.3447 54.2102 11.9205C54.2102 12.4053 54.1212 12.8144 53.9432 13.1477C53.7652 13.4773 53.5265 13.7424 53.2273 13.9432C52.9318 14.1402 52.6061 14.2841 52.25 14.375V14.4886C52.6364 14.5076 53.0133 14.6326 53.3807 14.8636C53.7519 15.0909 54.0587 15.4148 54.3011 15.8352C54.5436 16.2557 54.6648 16.767 54.6648 17.3693C54.6648 17.964 54.5246 18.4981 54.2443 18.9716C53.9678 19.4413 53.5398 19.8144 52.9602 20.0909C52.3807 20.3636 51.6402 20.5 50.7386 20.5H46.2784ZM48.0341 18.9943H50.5682C51.4091 18.9943 52.0114 18.8314 52.375 18.5057C52.7386 18.1799 52.9205 17.7727 52.9205 17.2841C52.9205 16.9167 52.8277 16.5795 52.642 16.2727C52.4564 15.9659 52.1913 15.7216 51.8466 15.5398C51.5057 15.358 51.1004 15.267 50.6307 15.267H48.0341V18.9943ZM48.0341 13.8977H50.3864C50.7803 13.8977 51.1345 13.822 51.4489 13.6705C51.767 13.5189 52.0189 13.3068 52.2045 13.0341C52.3939 12.7576 52.4886 12.4318 52.4886 12.0568C52.4886 11.5758 52.3201 11.1723 51.983 10.8466C51.6458 10.5208 51.1288 10.358 50.4318 10.358H48.0341V13.8977ZM58.2756 18.1193L62.1222 11.7727H63.9517V20.5H62.2869V14.1477L58.4574 20.5H56.6108V11.7727H58.2756V18.1193ZM65.3835 23.017V19.0284H66.0938C66.2756 18.8617 66.429 18.6629 66.554 18.4318C66.6828 18.2008 66.7907 17.9261 66.8778 17.608C66.9688 17.2898 67.0445 16.9186 67.1051 16.4943C67.1657 16.0663 67.2188 15.5777 67.2642 15.0284L67.5369 11.7727H73.4688V19.0284H74.8097V23.017H73.1506V20.5H67.0653V23.017H65.3835ZM67.9119 19.0284H71.8097V13.2273H69.0597L68.8778 15.0284C68.7907 15.9451 68.6809 16.7405 68.5483 17.4148C68.4157 18.0852 68.2036 18.6231 67.9119 19.0284ZM80.2315 20.6761C79.3717 20.6761 78.6312 20.4924 78.0099 20.125C77.3925 19.7538 76.9152 19.233 76.5781 18.5625C76.2448 17.8883 76.0781 17.0985 76.0781 16.1932C76.0781 15.2992 76.2448 14.5114 76.5781 13.8295C76.9152 13.1477 77.3849 12.6155 77.9872 12.233C78.5933 11.8504 79.3016 11.6591 80.1122 11.6591C80.6046 11.6591 81.0819 11.7405 81.544 11.9034C82.0062 12.0663 82.4209 12.322 82.7884 12.6705C83.1558 13.0189 83.4455 13.4716 83.6577 14.0284C83.8698 14.5814 83.9759 15.2538 83.9759 16.0455V16.6477H77.0384V15.375H82.3111C82.3111 14.928 82.2202 14.5322 82.0384 14.1875C81.8565 13.839 81.6009 13.5644 81.2713 13.3636C80.9455 13.1629 80.563 13.0625 80.1236 13.0625C79.6463 13.0625 79.2296 13.1799 78.8736 13.4148C78.5213 13.6458 78.2486 13.9489 78.0554 14.3239C77.866 14.6951 77.7713 15.0985 77.7713 15.5341V16.5284C77.7713 17.1117 77.8736 17.608 78.0781 18.017C78.2865 18.4261 78.5762 18.7386 78.9474 18.9545C79.3187 19.1667 79.7524 19.2727 80.2486 19.2727C80.5705 19.2727 80.8641 19.2273 81.1293 19.1364C81.3944 19.0417 81.6236 18.9015 81.8168 18.7159C82.0099 18.5303 82.1577 18.3011 82.2599 18.0284L83.8679 18.3182C83.7391 18.7917 83.508 19.2064 83.1747 19.5625C82.8452 19.9148 82.4304 20.1894 81.9304 20.3864C81.4342 20.5795 80.8679 20.6761 80.2315 20.6761ZM89.5369 20.6761C88.7188 20.6761 88.0047 20.4886 87.3949 20.1136C86.785 19.7386 86.3116 19.214 85.9744 18.5398C85.6373 17.8655 85.4688 17.0777 85.4688 16.1761C85.4688 15.2708 85.6373 14.4792 85.9744 13.8011C86.3116 13.1231 86.785 12.5966 87.3949 12.2216C88.0047 11.8466 88.7188 11.6591 89.5369 11.6591C90.3551 11.6591 91.0691 11.8466 91.679 12.2216C92.2888 12.5966 92.7623 13.1231 93.0994 13.8011C93.4366 14.4792 93.6051 15.2708 93.6051 16.1761C93.6051 17.0777 93.4366 17.8655 93.0994 18.5398C92.7623 19.214 92.2888 19.7386 91.679 20.1136C91.0691 20.4886 90.3551 20.6761 89.5369 20.6761ZM89.5426 19.25C90.0729 19.25 90.5123 19.1098 90.8608 18.8295C91.2093 18.5492 91.4669 18.1761 91.6335 17.7102C91.804 17.2443 91.8892 16.7311 91.8892 16.1705C91.8892 15.6136 91.804 15.1023 91.6335 14.6364C91.4669 14.1667 91.2093 13.7898 90.8608 13.5057C90.5123 13.2216 90.0729 13.0795 89.5426 13.0795C89.0085 13.0795 88.5653 13.2216 88.2131 13.5057C87.8646 13.7898 87.6051 14.1667 87.4347 14.6364C87.268 15.1023 87.1847 15.6136 87.1847 16.1705C87.1847 16.7311 87.268 17.2443 87.4347 17.7102C87.6051 18.1761 87.8646 18.5492 88.2131 18.8295C88.5653 19.1098 89.0085 19.25 89.5426 19.25Z"
            fill="white"
          />
          <defs>
            <pattern
              id="pattern0_1187_782"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_1187_782"
                transform="scale(0.00195312)"
              />
            </pattern>
            <image
              id="image0_1187_782"
              width="512"
              height="512"
              xlink:href="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
      <div class="dop-item__content">
        <p class="content-title" v-html="dop.name"></p>
        <p
          class="content-modal hyperlink"
          v-if="!!dop.descriptionDop"
          @click="openModal(dop)"
        >
          Описание
        </p>
        <div class="content-offer">
          <div class="price">
            <p class="new" v-html="dop.price.toLocaleString() + ' РУБ.'"></p>
            <p class="old" v-html="dop.oldPrice.toLocaleString() + ' РУБ.'"></p>
          </div>
          <div class="buttons-block">
            <button
              v-show="!Boolean(cartCount)"
              @click="addToCart(dop.id)"
              class="button"
            >
              Добавить в заказ
            </button>

            <div v-show="Boolean(cartCount)" class="cart-buttons">
              <div @click="removeCart(dop.id)" class="cart-remove">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="77"
                  height="77"
                  viewBox="0 0 77 77"
                  fill="none"
                >
                  <rect
                    width="77"
                    height="77"
                    rx="15"
                    fill="#2AA000"
                    fill-opacity="0.6"
                  />
                  <g clip-path="url(#clip0_421_3605)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.3661 24.3661C23.8543 23.878 24.6457 23.878 25.1339 24.3661L25.7412 24.9734C26.3639 25.5962 26.7476 26.4182 26.825 27.2955L26.9754 29H50.5C50.8639 29 51.2097 29.1586 51.4472 29.4343C51.6846 29.71 51.7901 30.0756 51.7362 30.4354L50.1805 40.8063C49.9052 42.642 48.3283 44 46.472 44H28.299L28.419 45.3599C28.4759 46.0051 29.0163 46.5 29.6641 46.5H45.5C47.5711 46.5 49.25 48.1789 49.25 50.25C49.25 52.3211 47.5711 54 45.5 54C43.4289 54 41.75 52.3211 41.75 50.25C41.75 49.8117 41.8252 49.391 41.9634 49H32.7866C32.9248 49.391 33 49.8117 33 50.25C33 52.3211 31.3211 54 29.25 54C27.1789 54 25.5 52.3211 25.5 50.25C25.5 49.1741 25.9531 48.2039 26.679 47.5201C26.2632 46.9741 25.993 46.3089 25.9286 45.5796L24.3347 27.5152C24.3089 27.2228 24.181 26.9488 23.9734 26.7412L23.3661 26.1339C22.878 25.6457 22.878 24.8543 23.3661 24.3661ZM45.5 49C44.8096 49 44.25 49.5596 44.25 50.25C44.25 50.9404 44.8096 51.5 45.5 51.5C46.1904 51.5 46.75 50.9404 46.75 50.25C46.75 49.5596 46.1904 49 45.5 49ZM28.0784 41.5H46.472C47.0908 41.5 47.6164 41.0473 47.7082 40.4354L49.0485 31.5H27.196L28.0784 41.5ZM29.25 49C28.5596 49 28 49.5596 28 50.25C28 50.9404 28.5596 51.5 29.25 51.5C29.9404 51.5 30.5 50.9404 30.5 50.25C30.5 49.5596 29.9404 49 29.25 49Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_421_3605">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(23 24)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="cart-control">
                <svg
                  @click="removeItemCart(dop.id)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M23.6672 16H16.5558H9"
                    stroke="#646464"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>

                <span>
                  {{ cartCount }}
                </span>

                <svg
                  @click="addToCart(dop.id)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M16.7282 24.1661L16.7282 17M24.0018 17H16.7282M16.7282 17L16.7282 9.83398M16.7282 17H9"
                    stroke="#646464"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../../UI/MyImage.vue";
import { mapMutations } from "vuex";
import DopItemSlider from "./DopItemSlider.vue";

export default {
  components: { MyImage, DopItemSlider },
  props: {
    dop: Object,
    index: Number,
    webp: String,
  },
  computed: {
    cartCount() {
      return this.dop.selectedDop ? this.dop.countDop + 1 : 0;
    },
  },
  methods: {
    openModal(dop) {
      this.$emit("open-modal", dop);
    },

    ...mapMutations(["setCountDop"]),
    // dop
    addToCart(id) {
      this.setCountDop({ id: id, action: "plus" });
    },
    removeItemCart(id) {
      this.setCountDop({ id: id, action: "minus" });
    },
    removeCart(id) {
      this.setCountDop({ id: id, action: "remove" });
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../../scss/_global.scss";

.dop-item {
  background: #ffffff;
  box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
  border-radius: 10px;
  max-width: 100%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 420px;
  }

  &.swiper-slide {
    height: auto;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: 1024px) and (min-width: 769px) {
      flex-direction: row;
    }
  }

  &__img {
    background: #f5f5f5;
    width: 100%;
    position: relative;

    @media (max-width: 1024px) and (min-width: 769px) {
      max-width: 40%;
      display: flex;
      align-items: center;
    }

    @media (min-width: 769px) {
      aspect-ratio: 333/382;
    }

    @media (max-width: 768px) {
      padding: 30px 10px 0;
      background: none;
    }

    .dop-img {
      img {
        max-width: 333px;
        aspect-ratio: 333/382;
        width: 100%;
        display: block;
      }
    }

    .video-icon {
      position: absolute;
      right: 15px;
      top: 15px;
      z-index: 20;
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        transform: scale(1.05);
      }

      @media (max-width: 768px) {
        right: 25px;
        top: 45px;
      }
    }
  }

  &__content {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;

    @media (max-width: 1024px) and (min-width: 769px) {
      justify-content: center;
      padding: 20px 24px;
    }

    @media (max-width: 480px) {
      padding: 30px 10px 20px;
    }

    .content-title {
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 29px; /* 131.818% */
      margin-bottom: 10px;

      min-height: 60px;

      // @media (max-width: 1024px) and (min-width: 769px) {
      text-align: start;
      // }

      @media (max-width: 1024px) {
        margin-bottom: 30px;
      }

      @media (max-width: 768px) {
        text-align: center;
        color: #565656;
        font-size: 18px;
        font-weight: 600;
        line-height: 25px; /* 138.889% */
        margin-bottom: 15px;
        min-height: 40px;
      }
    }

    .content-modal {
      color: rgba(50, 50, 50, 0.8);
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
      cursor: pointer;
      text-align: start;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .content-offer {
      .buttons-block {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;

        @media (max-width: 1024px) and (min-width: 769px) {
          justify-content: start;
        }

        .button {
          margin: 0 auto;
          @include fluidFontSize(16, 25, 577, 1920);

          @media (max-width: 1024px) {
            @media (min-width: 769px) {
              margin: 0;
            }

            @include fluidFontSize(18, 24, 768, 1024);
          }

          @media (max-width: 768px) {
            font-size: 16px;
            max-width: 200px;
          }
        }

        .cart-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;

          .cart-remove {
            cursor: pointer;
            max-width: 67.2px;

            svg {
              display: block;
              max-width: 100%;
            }
          }

          .cart-control {
            align-items: center;
            border-radius: 10px;
            background: #f5f5f5;
            display: flex;
            gap: 8px;

            span {
              width: 26px;
              color: #646464;
              text-align: center;
              font-family: "Gilroy";
              font-size: 22px;
              font-style: normal;
              font-weight: 400;
              line-height: 29px; /* 131.818% */
              user-select: none;
              display: block;
            }

            svg {
              cursor: pointer;
              display: block;
            }
          }
        }
      }

      .price {
        margin: 30px auto 20px;
        width: max-content;
        font-family: "Gilroy";
        font-style: normal;
        line-height: normal;

        display: flex;
        align-items: flex-end;
        gap: 10px;
        justify-content: center;

        @media (max-width: 1400px) and (min-width: 1025px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
        }

        @media (max-width: 1024px) and (min-width: 769px) {
          margin: 30px 0 20px;
        }

        @media (max-width: 768px) {
          flex-direction: column;
          align-items: center;
          gap: 5px;
          margin: 20px auto 10px;
        }
      }

      .old {
        color: #c8c8c8;
        font-size: 18px;
        font-weight: 900;
        text-decoration-line: line-through;

        @media (max-width: 768px) {
          text-align: center;
          font-size: 15px;
        }
      }

      .new {
        color: #323232;
        font-size: 27px;
        font-weight: 600;

        @media (max-width: 768px) {
          text-align: center;
          font-size: 18px;
        }
      }
    }
  }
}
</style>