/**
 * Homepage Product Carousel Section
 */

import { tns } from "tiny-slider/src/tiny-slider";

const initProductCarousel = () => {
  if ( document.querySelector('.js-product-carousel') ) {
    const sliders = document.querySelectorAll(".js-product-carousel");
    sliders.forEach(function(el, i) {
      const slider = tns({
        autoHeight: true,
        container: "#" + el.id,
        items: 2,
        gutter: 16,
        slideBy: "page",
        nav: false,
        controlsText: [
          '<i class="fal fa-chevron-left"></i>',
          '<i class="fal fa-chevron-right"></i>'
        ],
        responsive: {
          782: {
            items: 3
          },
          960: {
            items: 4
          }
        }
      });
      document.addEventListener("shopify:section:unload", function() {
        slider.destroy();
      });
      document.addEventListener("shopify:section:load", function() {
        slider.rebuild();
      });
    });
  }
};

export default () => {
  document.addEventListener("DOMContentLoaded", function() {
    initProductCarousel();
  });
};