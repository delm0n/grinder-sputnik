<template>
  <section id="feedback">
    <div class="container">
      <div class="title">
        <h2>Отзывы о гриндере «СПУТНИК»</h2>
      </div>

      <div class="row">
        <div class="feedback-wrapper">
          <div class="swiper-wrapper">
            <div v-for="(feed, i) in feedbacks" :key="i" class="swiper-slide">
              <my-image
                :alt="'#'"
                :floder="'feedback'"
                :imgName="feed.img"
                :mobile="false"
              />
            </div>
          </div>

          <div class="sldr-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path d="M23 0H14L0 15L14 30H23L9 15L23 0Z" fill="#F6640A" />
            </svg>
          </div>

          <div class="sldr-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="30"
              viewBox="0 0 23 30"
              fill="none"
            >
              <path d="M0 0H9L23 15L9 30H0L14 15L0 0Z" fill="#F6640A" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Navigation } from "swiper";
import MyImage from "../UI/MyImage.vue";

export default {
  components: { MyImage },
  data() {
    return {
      feedbacks: [
        {
          img: "feedback-1",
        },
        {
          img: "feedback-2",
        },
        {
          img: "feedback-3",
        },
        {
          img: "feedback-4",
        },
        {
          img: "feedback-5",
        },
        {
          img: "feedback-6",
        },
      ],
    };
  },

  mounted() {
    let myFeedbackSwiper;
    const feedbackSwiper = () => {
      myFeedbackSwiper = new Swiper(".feedback-wrapper", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".sldr-next",
          prevEl: ".sldr-prev",
        },
        modules: [Navigation],

        breakpoints: {
          1367: {
            slidesPerView: 4,
          },

          769: {
            slidesPerView: 3,
          },

          577: {
            slidesPerView: 2,
          },

          0: {
            slidesPerView: 1,
          },
        },
      });
    };

    addEventListener("resize", (event) => {
      myFeedbackSwiper.destroy(true, true);
      feedbackSwiper();
    });
    feedbackSwiper();
  },
};
</script>


<style lang="scss">
@import "../../scss/_global.scss";

#feedback {
  overflow: hidden;
  @extend %padd;

  picture {
    justify-content: center;
  }

  .row {
    margin: 0 auto;
    position: relative;
    padding: 0 46px;

    .swiper-slide {
      @include aspect() {
        aspect-ratio: 307/608;
        max-width: 307px;
      }
    }

    @media (max-width: 576px) {
      padding: 0 20px;
      max-width: 400px;
      width: 100%;
    }

    .feedback-wrapper {
      overflow: hidden;
    }

    .sldr-prev,
    .sldr-next {
      position: absolute;
      top: 50%;
      cursor: pointer;
      user-select: none;
      transform: translateY(-50%);
      z-index: 6;

      @media (max-width: 576px) {
        svg {
          width: 13px;
          height: 16px;
        }
      }
    }

    .sldr-next {
      right: 0;
    }
    .sldr-prev {
      left: 0;
    }
  }
}
</style>