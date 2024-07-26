<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters([
    "getUserRassrochka",
    "getMetric",
    "getMainId",
    "getDops",
    "getCredit",
  ]),
  props: {
    dops: {
      type: Boolean,
      default: true,
    },
    rassr: {
      type: Boolean,
      default: false,
    },
    rassrochka: {
      type: Boolean,
      default: false,
    },
    credit: {
      type: Boolean,
      default: false,
    },
    main: {
      type: Boolean,
      default: false,
    },
  },
};
</script>