<template>
  <section id="video">
    <div class="container">
      <div class="title">
        <h2>Узнайте все о ГРИНДЕРе «УДАЧНЫЙ» за&nbsp;1&nbsp;минуту</h2>
      </div>

      <div class="video-wrapper">
        <div class="video-block">
          <iframe
            src="https://www.youtube.com/embed/lgx4LAdOrRg?si=NKtHa_eyFYXj3YZJ?start=1&mute=1&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <button class="button">Заказать</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../../scss/_global.scss";

#video {
  @extend %padd;
  background: #f9f9f9;
  overflow: hidden;

  .video-wrapper {
    .button {
      margin: 50px auto 0;

      @media (max-width: 768px) {
        margin: 30px auto 0;
      }
    }
    .video-block {
      aspect-ratio: 1420/798;
      width: 100%;

      iframe {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>