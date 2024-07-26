<template>
  <video
    ref="video"
    preload="none"
    loop
    :poster="'new-site-vue/build/images/' + poster + '.' + getWebp"
    muted
    class="video-lazy"
  >
    <source
      :data-lazy="'new-site-vue/video/' + src + '.mp4'"
      type="video/mp4"
    />
  </video>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
      default:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    },
  },
  methods: {
    loadVideo() {
      let video = this.$refs.video;
      let source = video.querySelector("source");
      source.src = source.dataset.lazy;
      video.load();
      video.classList.add("video-lazy--loaded");
      video.play();
    },
  },
  mounted() {
    this.gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.video,
        start: "-60% bottom",
        end: "top -60%",
        onEnter: this.loadVideo,
        onEnterBack: this.loadVideo,
      },
    });
  },

  computed: mapGetters(["getWebp"]),
};
</script>

