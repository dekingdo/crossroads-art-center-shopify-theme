/**
 * Styles
 */
import "../styles/main.scss";

/**
 * Internal Dependencies
 */
import toggleMenu from "./utilities/toggleMenu";
import productCarousel from "./components/productCarousel";
import homeSlider from "./components/homeSlider";
import productSlider from "./components/productSlider";
import webfonts from "./components/webfonts";
import fontawesome from "./components/fontawesome";
// import shuffle from "./components/shuffle";
import filter from "./components/filter";

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("hamburger").addEventListener("click", function() {
    toggleMenu(this);
  });
});

webfonts();
fontawesome();
homeSlider();
productCarousel();
productSlider();
// shuffle();
filter();