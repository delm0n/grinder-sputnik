<template>
  <div id="modal-centr" style="display: none">
    <button class="modal-blogers__close close" @click="closeModal">Закрыть</button>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <h3>Обращение в сервисный центр</h3>

      <div class="form-centr__inputs">
        <input class="my-input" aria-label="Имя" type="text" v-model="form.name" autocomplete="off" placeholder="Имя"
          required />
        <input class="my-input" aria-label="Фамилия" type="text" v-model="form.last_name" autocomplete="off"
          placeholder="Фамилия" required />
        <input class="my-input" aria-label="E-mail" type="email" v-model="form.email" autocomplete="off"
          placeholder="E-mail" required />
        <input class="my-input" aria-label="+7 (_)-_--" type="tel" name="phone" v-model="form.phone" autocomplete="off"
          placeholder="+7 (_)-_--" required />
        <textarea class="my-input my-input-comment" v-model="form.description" placeholder="Комментарий"
          required></textarea>
      </div>

      <button type="submit" class="button">Отправить</button>
    </form>
    <div v-if="response">
      <p v-if="response.message" class="form-centr__message">{{ response.message }}</p>
      <p v-else class="form-centr__error">{{ response.error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        last_name: '',
        phone: '',
        email: '',
        description: '',
      },
      response: null,
      apiToken: '353b700f6a182bf1a7f35552bc0c239c454adefe',
    };
  },
  methods: {
    closeModal() {
      document.getElementById('modal-centr').style.display = 'none';
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('last_name', this.form.last_name);
      formData.append('email', this.form.email);
      formData.append('phone', this.form.phone);
      formData.append('description', this.form.description);

      try {
        const response = await axios.post('/fetchPost.php', formData);
        this.response = response.data;
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        this.response = error.message;
      }
    }
  }
}; 
</script>



<style lang="scss">
#modal-centr {
  border-radius: 10px;
  background: #fff;
  max-width: 695px;
  width: 100%;

  @media (max-width: 576px) {
    padding: 30px 20px 20px !important;
  }

  h3 {
    color: #323232;
    text-align: center;
    font-family: "Gilroy";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: 121.875%;
    max-width: 380px;
    margin: 0 auto 30px auto;

    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 29px;
    }
  }

  .form-centr__inputs {
    max-width: 358px;
    width: 100%;
    margin: auto;

    .my-input {
      margin-bottom: 10px;
      border-radius: 5px;
      background: #F3F3F3;
      border: none;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &-comment {
        height: 160px;

        &::placeholder {
          color: #8B8B8B;
        }
      }
    }

    input::placeholder {
      color: #8B8B8B;
    }
  }

  .form-centr__error {
    color: red;
    text-align: center;
    font-family: "Gilroy";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    max-width: 380px;
    margin: 30px auto 0 auto;
    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 29px;
    }
  }

  .form-centr__message {
    color: green;
    text-align: center;
    font-family: "Gilroy";
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    max-width: 380px;
    margin: 30px auto 0 auto;
    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 29px;
    }
  }

  .button {
    margin: 30px auto 0 auto;
    width: 282px;
    height: 77px;

    @media (max-width: 575px) {
      height: 49px;
    }
  }

  .close {
    top: -40px !important;
    position: absolute;
    right: 0;
    color: #fff;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    background: none;
    border: none;
    cursor: pointer;
    outline: none !important;

    @media (max-width: 575px) {
      font-size: 18px;
      top: -30px !important;
    }
  }

  .is-close {
    opacity: 0 !important;
    width: 100px;
  }
}
</style>