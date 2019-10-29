import { tns } from "tiny-slider/src/tiny-slider";
import * as basicLightbox from "basiclightbox";

const initSlider = () => {
  if ( document.querySelector('.js-tiny-slider') ) {
    const sliders = document.querySelectorAll(".js-tiny-slider");
    sliders.forEach(function(el, i) {
      const slider = tns({
        container: "#" + el.id,
        items: 1,
        slideBy: "page",
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        navPosition: "bottom",
        lazyload: true
      });
      document.addEventListener("shopify:section:unload", function() {
        slider.destroy();
      });
      document.addEventListener("shopify:section:load", function() {
        slider.rebuild();
      });
      document.addEventListener("shopify:block:select", function(e) {
        slider.pause();
        let slideIndex = e.target.id.substr(-1);
        console.log("selected slide index is " + slideIndex);
        slider.goTo(slideIndex);
      });
      document.addEventListener("shopify:block:deselect", function() {
        slider.play();
      });
    });
  }
};

const initLightboxes = () => {
  const links = document.querySelectorAll(".js-video-lightbox-link");
  links.forEach((el, i) => {
    el.addEventListener("click", e => {
      const videoID = e.currentTarget.dataset.youtube;
      const mylightbox = basicLightbox.create(`
        <div class="aspect-ratio-16/9 embed-responsive w-screen max-w-2xl">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${videoID}?autoplay=1" width="720" height="405" frameborder="0"></iframe>
        </div>
      `);
      mylightbox.show();
    });
  });
};

export default () => {
  document.addEventListener("DOMContentLoaded", function() {
    initLightboxes();
    initSlider();
  });
};