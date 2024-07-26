<template>
  <label class="checkbox rassrochka">
    <input type="checkbox" v-model="getUser.rassrochka" />
    <div class="box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke="#323232"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <span> Купить в рассрочку </span>
  </label>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getUser"]),
};
</script>