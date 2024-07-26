<template>
  <div class="img-box">
    <div class="img-box__logo">
      <picture>
        <source
          srcset="new-site-vue/build/images/src/logo.webp"
          type="image/webp"
        />
        <img
          src="new-site-vue/build/images/src/logo.png"
          alt="Логотип Helicon"
        />
      </picture>
    </div>

    <div class="img-box__img">
      <picture>
        <source
          :srcset="
            'new-site-vue/build/images/modal-order/grinder@05x' +
            (getWebp == 'webp' ? '.webp' : '.png')
          "
          media="(max-width: 1280px)"
        />
        <img
          :src="
            'new-site-vue/build/images/modal-order/grinder' +
            (getWebp == 'webp' ? '.webp' : '.png')
          "
          :alt="'#'"
        />
      </picture>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getWebp"]),
};
</script>

<style lang="scss" scoped>
.img-box {
  align-items: center;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px 0 0 0;

  @media (max-width: 1280px) {
    border-radius: 10px;
  }

  &__logo {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;

    img {
      max-width: 270px;
      width: 100%;

      @media (max-width: 1280px) {
        max-width: 115px;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 576px) {
      gap: 10px;
    }
  }

  &__img img {
    max-width: 100%;
    @media (max-width: 1366px) and (min-width: 1281px) {
      max-width: 380px;
    }

    @media (max-width: 576px) {
      max-width: 90%;
      margin: 0 auto;
    }
  }
}
</style>