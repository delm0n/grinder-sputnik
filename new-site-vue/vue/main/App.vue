<template>
  <div>
    <header-top />
    <header-main />

    <things />
    <structure />
    <comparison />
    <video-block />
    <complectation />
    <made />
    <model />
    <dops />
    <!-- <repayment /> -->
    <video-review />
    <faq />
    <feedback />
    <photo />
    <question />
    <my-footer />

    <modal-tinkoff />
    <modal-blogers />
    <modal-centr />
    <modal-sber />
    <tinkoff-modal />
    <modal-call />
    <modal-success />
    <modal-order />
    <button-up />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineAsyncComponent } from "vue";
import HeaderTop from "../components/Header/HeaderTopV3.vue";
import HeaderMain from "../components/Header/HeaderMain.vue";
import Structure from "../components/Structure.vue";
import Model from "../components/Model.vue";
// import Lamp from "../components/Lamp.vue";
import ModalTinkoff from "../components/ModalTinkoff.vue";
import ModalSber from "../components/ModalSber.vue";
// import Nozzle from "../components/Nozzle.vue";
// import MyVideo from "../components/Video.vue";
// import Repayment from "../components/Repayment.vue";
import TinkoffModal from "../components/TinkoffModal.vue";
import Comparison from "../components/Comparison.vue";
import Things from "../components/Things-v2.vue";
import ModalCall from "../components/ModalCall.vue";
import ModalCentr from "../components/ModalCentr.vue";
import ModalBlogers from "../components/ModalBlogers.vue";
// import ModalOrder from "../components/ModalOrder.vue";
import ModalSuccess from "../components/ModalSuccess.vue";
import ButtonUp from "../components/ButtonUp.vue";
import ModalOrder from "../components/ModalOrder/ModalOrder.vue";
import Dops from "../components/Dops/Dops.vue";

export default {
  methods: mapMutations(["setMobile"]),

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.setMobile(false);
      } else {
        this.setMobile(true);
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  components: {
    HeaderTop,
    HeaderMain,

    Structure,
    Things,
    Comparison,
    VideoBlock: defineAsyncComponent(() =>
      import("../components/VideoBlock.vue")
    ),
    // TinkoffBlock: defineAsyncComponent(() =>
    //   import("../components/TinkoffBlock.vue")
    // ),

    // Repayment,
    Question: defineAsyncComponent(() => import("../components/Question.vue")),
    Model,
    Faq: defineAsyncComponent(() => import("../components/FAQ.vue")),
    Photo: defineAsyncComponent(() => import("../components/Photo.vue")),
    Made: defineAsyncComponent(() => import("../components/Made.vue")),
    Complectation: defineAsyncComponent(() =>
      import("../components/Complectation.vue")
    ),
    MyFooter: defineAsyncComponent(() => import("../components/Footer.vue")),
    TinkoffModal,
    Feedback: defineAsyncComponent(() => import("../components/Feedback.vue")),
    VideoReview: defineAsyncComponent(() =>
      import("../components/VideoReview.vue")
    ),
    ModalCall,
    ModalCentr,
    ModalBlogers,
    // Lamp,
    ModalSber,
    ModalTinkoff,
    // Nozzle,
    ModalSuccess,
    // ModalOrder,
    ButtonUp,
    ModalOrder,
    Dops,
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";
</style>
