<template>
  <div>
    <div class="input-box">
      <input
        class="my-input-v2 kit-form__name"
        type="text"
        name="name"
        placeholder="Имя"
        v-model="getUser.name"
      />
      <input
        class="my-input-v2"
        type="text"
        name="phone"
        placeholder="+7 (___)-___-__-__"
        v-model="getUser.phone"
      />
    </div>
    <div class="form-row__img">
      <my-image
        v-for="(item, index) in [1, 2, 3, 4]"
        :key="index"
        :alt="'#'"
        :floder="'modal-order'"
        :imgName="'order-icon-' + item"
        :mobile="false"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MyImage from "../../UI/MyImage.vue";
export default {
  components: { MyImage },

  computed: {
    ...mapGetters(["getUser"]),
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;

  @media (max-width: 1280px) {
    flex-direction: column;
    margin-bottom: 0;
  }

  input {
    border-radius: 10px;
    max-width: 255px;
    min-width: 210px;
    width: 100%;

    @media (max-width: 1280px) {
      max-width: 350px;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
}

.form-row__img {
  align-items: center;
  display: flex;
  gap: 30px;
  height: 25px;

  @media (max-width: 1280px) {
    display: none;
  }
}
</style>