<template>
  <section id="video-block">
    <div class="video-block-container">
      <div class="video-block-wrapper">
        <h2>Узнайте всё о гриндере «Спутник» за 1 минуту. Видеопрезентация</h2>

        <a data-fancybox href="https://youtu.be/djq-f9t5KIY" class="video-item">
          <my-image
            class="preview"
            :alt="'Гриндер удачный'"
            :floder="'src'"
            :mobile="false"
            :imgName="'video-preview'"
          />
          <svg
            class="yotb"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="45"
            viewBox="0 0 64 45"
            fill="none"
          >
            <rect width="64" height="45" rx="10" fill="#FF3838" />
            <path
              d="M43 23.5L27.25 32.5933L27.25 14.4067L43 23.5Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";

export default {
  components: {
    MyImage,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";
#video-block {
  @extend %padd;
  padding-top: 0 !important;
  overflow: hidden;

  .video-block-container {
    max-width: 1178px;
    margin: 0 auto;
    width: 90%;
  }

  h2 {
    color: #646464;
    text-align: center;
    font-family: "Gilroy";
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 37px; /* 123.333% */
    margin-bottom: 50px;

    @media (max-width: 992px) {
      font-size: 24px;
      line-height: 34px;
      margin-bottom: 20px;
    }

    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 29px;
    }
  }

  .video-block-wrapper {
    border-radius: 0px 0px 10px 10px;
    background: #f9f9f9;
    padding: 50px;

    @media (max-width: 768px) {
      padding: 20px;
    }

    @media (max-width: 576px) {
      padding: 20px 10px;
    }
  }

  .video-item {
    position: relative;
    cursor: pointer;
    display: block;

    @media (max-width: 576px) {
      border-radius: 10px;
      overflow: hidden;
    }

    @include aspect() {
      aspect-ratio: 98/55;
    }

    @media (min-width: 769px) {
      &:hover {
        .yotb {
          transform: translate(-50%, -50%) scale(1.1);
          path {
            fill: #ff3838;
          }

          rect {
            fill: #fff;
          }
        }
      }
    }

    .yotb {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;

      transition: all 0.3s;
      * {
        transition: all 0.3s;
      }
      @media (max-width: 576px) {
        width: 52px;
        height: 37px;
      }
    }
  }
}
</style>