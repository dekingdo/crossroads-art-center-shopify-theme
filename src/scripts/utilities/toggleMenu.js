const toggleMenu = (el) => {
  // toggle active state of the menu toggle
  el.classList.toggle('is-active');
  // toggle active state of the target menu
  document.getElementById( el.dataset.toggle ).classList.toggle('is-active');
};

export default toggleMenu;
