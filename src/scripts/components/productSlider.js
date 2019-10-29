/**
 * Image slider that appears on single product pages
 */

import { tns } from "tiny-slider/src/tiny-slider"
import * as basicLightbox from "basiclightbox";

const initSlider = () => {
  if ( document.querySelector('.js-product-slider') ) {
    const slider = tns({
      container: '.js-product-slider',
      controls: false,
      items: 1,
      navContainer: '.js-product-slider-nav',
      navAsThumbnails: true
    })
  }
}

const initLightboxes = () => {
  const links = document.querySelectorAll('.js-product-lightbox');
  links.forEach((el, i) => {
    el.addEventListener("click", e => {
      const imageURL = e.currentTarget.dataset.zoom;
      const mylightbox = basicLightbox.create(`
        <img class="w-full h-auto" src="${imageURL}" />
      `);
      mylightbox.show();
    });
  });
}

export default () => {
  document.addEventListener("DOMContentLoaded", function() {
    initSlider();
    initLightboxes();
  });
};