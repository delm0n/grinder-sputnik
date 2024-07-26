<template>
  <ul :class="{ active: burger }" class="header-v2__list">
    <li class="header-v2__item">
      <a href="#structure">Преимущества</a>
    </li>
    <li class="header-v2__item">
      <a href="#complectation">Комплектация</a>
    </li>
    <li class="header-v2__item">
      <a href="#repayment">Рассрочка</a>
    </li>
    <li class="header-v2__item">
      <a href="#feedback">Отзывы</a>
    </li>

    <li class="header-v2__item pdf">
      <div class="img-wrap pdf-icon">
        <picture
          ><source
            srcset="new-site-vue/build/images/src/pdf-icon.webp"
            type="image/webp" />
          <img src="new-site-vue/build/images/src/pdf-icon.png" alt="#"
        /></picture>
      </div>
      <a download href="/uploadupdate/instruction.pdf">Инструкция</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    burger: Boolean,
  },
};
</script>

<style lang="scss">
.header-v2 {
  &-fixed {
    .header-v2__list {
      @media (max-width: 1440px) {
        display: none;
      }
    }

    &.active {
      .header-v2__list {
        @media (max-width: 1440px) {
          display: flex;
        }
      }
    }

    .header-v2 {
      &__item a {
        color: #646464;
      }

      &__list {
        @media (max-width: 1440px) {
          top: calc(100% + 14px);
          transform: translateY(-160%);
        }

        @media (max-width: 768px) {
          top: calc(100% + -1px);
          gap: 10px;
        }
      }
    }
  }

  &__item {
    @media (max-width: 1440px) {
      text-align: center;
    }

    &.pdf {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
      .pdf-icon {
        flex-shrink: 0;
      }
    }

    a {
      transition: all 0.4s;
      cursor: pointer;
      white-space: nowrap;
      color: #646464;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;

      &:hover {
        color: #f7660e;
      }

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  &__list {
    position: relative;
    display: flex;
    gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 6;
    align-items: center;

    @media (max-width: 1440px) {
      position: absolute;
      top: calc(100% + 14px);
      // z-index: 6;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 30px;
      border-radius: 0px 0px 10px 10px;
      opacity: 0.9;
      background: #fff;
      border: 1px solid #e1e1e1;
      transform: translateY(-100%);
      transition: 200ms transform;
      opacity: 0;
    }

    @media (max-width: 768px) {
      gap: 10px;
      top: calc(100% + -1px);
    }

    &.active {
      transform: translateY(0%) !important;
      opacity: 1;
    }
  }
}
</style>