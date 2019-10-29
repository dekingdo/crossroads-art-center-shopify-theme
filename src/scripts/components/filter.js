import List from "list.js";

const initListJs = () => {
  let options = {
    listClass: "js-filter-container",
    valueNames: [
      { data: ["title"] },
      { data: ["surname"] },
      { data: ["products"] }
    ]
  };
  const myListJs = new List("js-filter", options);

  // Sort by Surname
  if (typeof myListJs.sort === "function") {
    myListJs.sort("surname", { order: "asc" });
  }

  // Initialize checkbox to hide artists without work
  const myFilterCheckbox = document.getElementById("js-filter-checkbox");
  if (myFilterCheckbox) {
    myFilterCheckbox.addEventListener("change", function() {
      if (this.checked) {
        myListJs.filter(item => {
          if (item.values().products > 0) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        myListJs.filter();
      }
    });
  }

  // toggle the icon in the sort button
  const mySortButton = document.getElementById("js-alpha-sort-button");
  if (mySortButton) {
    mySortButton.addEventListener("click", e => {
      let icon = e.currentTarget.querySelector("svg");
      icon.classList.toggle("fa-sort-alpha-down");
      icon.classList.toggle("fa-sort-alpha-up");
    });
  }
};

export default () => {
  document.addEventListener("DOMContentLoaded", function() {
    initListJs();
  });
};
