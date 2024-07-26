<template>
  <div :class="'dop-slider dop-slider'">
    <div class="swiper-wrapper">
      <dop-item
        v-for="(dop, index) in dops"
        @open-modal="openModal"
        :key="index"
        :dop="dop"
        :webp="webp"
        class="swiper-slide"
      />
    </div>
    <div :class="'dop-slider-pagination dop-slider-pagination'"></div>
  </div>
</template>

<script>
import DopItem from "./DopItem.vue";
import { Swiper, Pagination } from "swiper";
export default {
  props: {
    dops: Object,
    webp: String,
  },
  components: { DopItem },
  methods: {
    openModal(item) {
      this.$emit("open-modal", item);
    },
  },
  mounted() {
    let myPhotoSwiper;
    const photoSwiper = () => {
      myPhotoSwiper = new Swiper(".dop-slider", {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,

        loop: false,
        pagination: {
          el: ".dop-slider-pagination",
          type: "bullets",
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },

          480: {
            slidesPerView: "auto",
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
          },
        },

        modules: [Pagination],
      });
    };

    const photoSwiperbreakpoint = window.matchMedia("(min-width: 769px)");
    const breakpointChecker = () => {
      if (!photoSwiperbreakpoint.matches) {
        setTimeout(() => {
          return photoSwiper();
        }, 20);
      } else {
        if (myPhotoSwiper) {
          return myPhotoSwiper.destroy(true, true);
        }
      }
    };

    photoSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
.dop-slider {
  &-pagination {
    @media (min-width: 769px) {
      display: none;
    }
    margin: 20px 0 0 !important;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding-top: 10px;

    @media (max-width: 576px) {
      gap: 5px;
    }

    .swiper-pagination-bullet {
      margin: 0 !important;
      width: 10px;
      height: 10px;
      border: none;
      opacity: 1;
      background: #cacaca !important;

      &-active {
        background: #f6640a !important;
      }
    }
  }
}
</style>