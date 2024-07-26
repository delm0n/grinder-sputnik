<template>
  <div
    :class="[
      'button-slider',
      rotate ? 'button-slider--rotate' : '',
      white ? 'white' : '',
    ]"
  >
    <template v-if="getMobile">
      <svg
        class="arrow-short"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
      >
        <path
          d="M7.76849 15.5773L9.0498 14.2743L3.11244 8.23642L9.0498 2.19852L7.76849 0.895508L0.549805 8.23642L7.76849 15.5773Z"
          fill="white"
        />
      </svg>
    </template>

    <template v-else>
      <svg
        class="arrow-long--desktop"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="16"
        viewBox="0 0 26 16"
        fill="none"
      >
        <path
          d="M24.7959 8.99121C25.3482 8.99121 25.7959 8.5435 25.7959 7.99121C25.7959 7.43893 25.3482 6.99121 24.7959 6.99121V8.99121ZM0.482233 7.2841C0.0917091 7.67463 0.0917091 8.30779 0.482233 8.69832L6.8462 15.0623C7.23672 15.4528 7.86988 15.4528 8.26041 15.0623C8.65093 14.6718 8.65093 14.0386 8.26041 13.6481L2.60355 7.99121L8.26041 2.33436C8.65093 1.94383 8.65093 1.31067 8.26041 0.920143C7.86988 0.529619 7.23672 0.529619 6.8462 0.920143L0.482233 7.2841ZM24.7959 6.99121L1.18934 6.99121V8.99121L24.7959 8.99121V6.99121Z"
          fill="white"
        />
      </svg>
      <svg
        class="arrow-long--mobile"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
      >
        <path
          d="M14.4678 6.63062C14.882 6.63062 15.2178 6.29483 15.2178 5.88062C15.2178 5.4664 14.882 5.13062 14.4678 5.13062V6.63062ZM0.560394 5.35029C0.267501 5.64318 0.267501 6.11805 0.560394 6.41095L5.33336 11.1839C5.62626 11.4768 6.10113 11.4768 6.39402 11.1839C6.68692 10.891 6.68692 10.4161 6.39402 10.1233L2.15138 5.88062L6.39402 1.63797C6.68692 1.34508 6.68692 0.870208 6.39402 0.577314C6.10113 0.284421 5.62626 0.284421 5.33336 0.577314L0.560394 5.35029ZM14.4678 5.13062L1.09072 5.13062V6.63062L14.4678 6.63062V5.13062Z"
          fill="white"
        />
      </svg>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    white: {
      type: Boolean,
      default: false,
    },
    rotate: {
      type: Boolean,
      default: false,
    },
  },

  computed: mapGetters(["getMobile"]),
};
</script>

<style lang="scss">
.button-slider {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #468217;
  border-radius: 10px;
  border-radius: 100%;
  width: 44px;
  height: 44px;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.4s;

  .arrow-long--desktop {
    display: block;
    width: 18px;
  }
  .arrow-long--mobile {
    display: none;
  }

  .arrow-short {
    width: 8.5px;
  }

  &:hover {
    background-color: #35680d;
  }

  &.white {
    background-color: #fff;

    svg path {
      fill: #000;
    }

    &:hover {
      background: #f5f5f5;
    }
  }

  @media (max-width: 992px) {
    width: 34px;
    height: 34px;

    .arrow-long--desktop {
      display: none;
    }
    .arrow-long--mobile {
      display: block;
    }
  }

  &.button-slider--rotate {
    .arrow-short,
    .arrow-long--desktop,
    .arrow-long--mobile {
      transform: rotate(180deg);
    }
  }
}
</style>
