<template>
  <div id="modal-blogers" class="modal-blogers modal" style="display: none">
    <button class="modal-blogers__close close">Закрыть</button>
    <div class="modal-blogers__container">
      <h3 class="modal-blogers__title">Заявка на сотрудничество для блогеров</h3>
      <p>Информацию о вашем YouTube канале отправляйте:</p>
      <ul>
        <li class="modal-blogers__item"><span>на почту:</span> <a
            href="mailto:orm.027.aim@gmail.com">orm.027.aim@gmail.com</a>;</li>
        <li class="modal-blogers__item"><span>или в ВК:</span> <a
            href="https://vk.com/alexandertarasenco">https://vk.com/alexandertarasenco</a>.</li>
      </ul>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({

});
</script>

<style lang="scss">
.modal-blogers {
  max-width: 695px;
  border-radius: 10px;

  &.fancybox__content {
    padding: 50px !important;

    @media (max-width: 575px) {
      padding: 20px 10px !important;
    }
  }


  &__title {
    color: #323232;
    font-family: Gilroy;
    font-size: 27px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
    margin-bottom: 30px;

    @media (max-width: 575px) {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 15px;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none !important;
  }

  ul {
    padding-left: 25px;

    @media (max-width: 575px) {
      padding-left: 20px;
    }
  }

  &__item {
    list-style-type: disc !important;

    a {
      color: #323232;
      font-family: Gilroy;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      border-bottom: 1px solid;

      @media (max-width: 575px) {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  &__item,
  p {
    color: #323232;
    font-family: Gilroy;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;

    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 22px;
    }

    span {
      font-weight: 700;
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