<template>
  <button
    aria-label="Наверх"
    ref="up"
    type="button"
    class="button-up hide"
    v-on:click="srollToTop"
  ></button>
</template>  

<script>
export default {
  methods: {
    srollToTop() {
      this.gsap.to(window, {
        duration: 2,
        scrollTo: 0,
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        this.$refs.up.classList.replace("hide", "show");
      } else {
        this.$refs.up.classList.replace("show", "hide");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.button-up {
  z-index: 200;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 66px;
  height: 66px;
  padding: 0;
  box-shadow: 0 0 10px rgb(0, 0, 0, 25%);
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAyMiAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMSAzMy42MjVDMTEuMzE1IDMzLjYyNSAxMS42MTcgMzMuNDk5OSAxMS44Mzk3IDMzLjI3NzJDMTIuMDYyNCAzMy4wNTQ1IDEyLjE4NzUgMzIuNzUyNCAxMi4xODc1IDMyLjQzNzVWNC40MjkxMUwxOS42NTkzIDExLjkwMzJDMTkuODgyMyAxMi4xMjYyIDIwLjE4NDcgMTIuMjUxNSAyMC41IDEyLjI1MTVDMjAuODE1NCAxMi4yNTE1IDIxLjExNzggMTIuMTI2MiAyMS4zNDA4IDExLjkwMzJDMjEuNTYzOCAxMS42ODAzIDIxLjY4OSAxMS4zNzc4IDIxLjY4OSAxMS4wNjI1QzIxLjY4OSAxMC43NDcxIDIxLjU2MzggMTAuNDQ0NyAyMS4zNDA4IDEwLjIyMTdMMTEuODQwOCAwLjcyMTczN0MxMS43MzA1IDAuNjExMTQ5IDExLjU5OTQgMC41MjM0MSAxMS40NTUyIDAuNDYzNTQ0QzExLjMxMDkgMC40MDM2NzkgMTEuMTU2MiAwLjM3Mjg2NCAxMSAwLjM3Mjg2NEMxMC44NDM4IDAuMzcyODY0IDEwLjY4OTIgMC40MDM2NzkgMTAuNTQ0OSAwLjQ2MzU0NEMxMC40MDA2IDAuNTIzNDEgMTAuMjY5NiAwLjYxMTE0OSAxMC4xNTkzIDAuNzIxNzM3TDAuNjU5Mjg1IDEwLjIyMTdDMC41NDg4NzYgMTAuMzMyMSAwLjQ2MTI5NSAxMC40NjMyIDAuNDAxNTQyIDEwLjYwNzVDMC4zNDE3OSAxMC43NTE3IDAuMzExMDM1IDEwLjkwNjMgMC4zMTEwMzUgMTEuMDYyNUMwLjMxMTAzNSAxMS4zNzc4IDAuNDM2MzA0IDExLjY4MDMgMC42NTkyODUgMTEuOTAzMkMwLjg4MjI2NiAxMi4xMjYyIDEuMTg0NjkgMTIuMjUxNSAxLjUwMDA0IDEyLjI1MTVDMS44MTUzOCAxMi4yNTE1IDIuMTE3OCAxMi4xMjYyIDIuMzQwNzkgMTEuOTAzMkw5LjgxMjUzIDQuNDI5MTFWMzIuNDM3NUM5LjgxMjUzIDMyLjc1MjQgOS45Mzc2NSAzMy4wNTQ1IDEwLjE2MDMgMzMuMjc3MkMxMC4zODMgMzMuNDk5OSAxMC42ODUxIDMzLjYyNSAxMSAzMy42MjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 33%;
  background-color: #f6640a;
  border-radius: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  transition: opacity 1000ms, transform 0.6s ease;
  box-shadow: 5px 5px 15px 0px rgba(157, 157, 157, 0.15);

  &:active {
    transform: translateY(3px);
  }

  &.show {
    opacity: 1;
  }

  &.hide {
    opacity: 0;
  }

  @media (max-width: 992px) {
    right: 15px;
    bottom: 25px;
    width: 45px;
    height: 45px;
  }
}
</style>
