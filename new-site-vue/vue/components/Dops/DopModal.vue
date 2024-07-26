<template>
  <div id="dops-modal" ref="myModal" style="display: none">
    <div class="modal-wrapper">
      <div class="modal-wrapper__img">
        <video
          v-if="modal.video.length > 0"
          ref="myVideo"
          preload="none"
          loop
          muted
          :poster="'new-site-vue/build/images/dops/' + modal.modalDop + webp"
        >
          <source
            type="video/mp4"
            :src="'new-site-vue/video/' + modal.video + '.mp4'"
          />
        </video>

        <my-image
          v-else
          :alt="'#'"
          :floder="'dops'"
          :mobile="false"
          :imgName="modal.modalDop"
          :lazyLoad="false"
        />
      </div>

      <div class="modal-wrapper__title">
        <p v-html="modal.title"></p>
      </div>
      <div class="modal-wrapper__text" v-html="modal.text"></div>
    </div>
  </div>
</template>

<script>
import MyImage from "../../UI/MyImage.vue";

export default {
  props: {
    modal: Object,
    webp: String,
  },
  components: {
    MyImage,
  },

  mounted() {
    //При открытии модального окна
    this.$nextTick(() => {
      this.observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (this.$refs.myVideo != null && this.modal.video.length > 0)
            setTimeout(() => {
              let video = this.$refs.myVideo;
              video.load();
              video.play();
            }, 100);

          break;
        }
      });

      this.observer.observe(this.$refs.myModal, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["style"],
      });
    });
  },
};
</script>

<style lang="scss">
@import "../../../scss/_global.scss";

#dops-modal {
  @extend %modal;

  @media (max-width: 425px) {
    padding: 30px;
  }

  .modal-wrapper {
    @media (min-width: 769px) {
      display: grid;
      grid-template-columns: 1.05fr 1.1fr;
    }

    &__title {
      font-weight: 700;
    }

    &__img {
      border-radius: 10px;
      overflow: hidden;
      video,
      img {
        max-width: 100%;
        display: block;
        width: 100%;
      }
    }

    .decr {
      color: #323232;
      font-family: "Gilroy";
      font-size: 20px;
      font-weight: 300;
      line-height: 27px;
      margin-bottom: 20px;

      @media (max-width: 576px) {
        font-size: 15px;
        line-height: 22px;
      }

      &-title {
        font-size: 22px;
        font-weight: 700;
        line-height: 29px;
        margin-bottom: 4px;
        color: #3c3c3c;

        @media (max-width: 576px) {
          font-size: 15px;
          font-weight: 600;
          line-height: 22px;
        }
      }

      &-bold {
        font-weight: 400;
      }
    }

    ul {
      padding-left: 20px;
      margin-bottom: 20px;

      li {
        color: #323232;
        font-family: "Gilroy";
        font-style: normal;
        list-style: disc;
        font-size: 20px;
        font-weight: 400;
        line-height: 27px;

        &::marker {
          font-size: 14px;
        }

        @media (max-width: 576px) {
          font-size: 15px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>