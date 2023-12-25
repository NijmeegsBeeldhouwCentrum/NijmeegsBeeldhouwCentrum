// JS Goes here - ES6 supported
import SimpleLightbox from "simplelightbox";
import "simplelightbox/src/simple-lightbox.scss"

import "./css/main.scss";
import "./css/custom.scss";

const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav]");

function toggleMobileMenu() {
  nav.classList.toggle("menu-open");
}

mobileMenu.addEventListener("click", toggleMobileMenu);

new SimpleLightbox('.gallery a');
