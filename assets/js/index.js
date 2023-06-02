const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-menu");

const add_watchlist = document.querySelectorAll(".add-watchlist");
const add_favorites = document.querySelectorAll(".add-favorites");

const mobile_favorite = document.querySelectorAll(".favorite-mobile");
const mobile_watchlist = document.querySelectorAll(".watchlist-mobile");

const logo = document.querySelector(".logo");
const logo_text = document.querySelector(".logo-text");
const footer_logo = document.querySelector(".footer-logo");

const get_started = document.querySelector(".get-started");
const back_to_top = document.querySelector(".back-to-top");

const directors_page = document.querySelector(".directors-page");
const movies_page = document.querySelector(".movies-page");
const watchlist_page = document.querySelector(".watchlist-page");
const favorites_movies_page = document.querySelector(".favorites-movies-page");
const login_page = document.querySelector(".login-page");
const register_page = document.querySelector(".register-page");

const directors_page_mobile = document.querySelector(".directors-page-mobile");
const movies_page_mobile = document.querySelector(".movies-page-mobile");
const watchlist_page_mobile = document.querySelector(".watchlist-page-mobile");
const favorites_movies_page_mobile = document.querySelector(
  ".favorites-movies-page-mobile"
);
const login_page_mobile = document.querySelector(".login-page-mobile");
const register_page_mobile = document.querySelector(".register-page-mobile");

const movie_card = document.querySelectorAll(".mario");
const director_card = document.querySelectorAll(".kubrick");

const sort = document.querySelectorAll(".sort");

const number_elements = document.querySelectorAll(".number");

number_elements.forEach((number_element) => {
  number_element.addEventListener("click", function () {
    number_elements.forEach((element) => {
      element.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});

sort.forEach(function (text) {
  text.addEventListener("click", function () {
    this.classList.toggle("clicker");
  });
});

movie_card.forEach((card) => {
  card.addEventListener("click", redirectToMoviePage);
});

director_card.forEach((card) => {
  card.addEventListener("click", redirectToDirectorPage);
});

function redirectToMoviePage() {
  window.location.href = "single-movie-page.html";
}

function redirectToDirectorPage() {
  window.location.href = "single-director-page.html";
}

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-open");
});

add_watchlist.forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});

add_favorites.forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
});

mobile_watchlist.forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("pressed");
  });
});

mobile_favorite.forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("pressed");
  });
});

logo.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "../index.html";
});

logo_text.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "../index.html";
});

footer_logo.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "../index.html";
});

get_started.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "register.html";
});

back_to_top.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

directors_page.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "directors-page.html";
});

movies_page.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "movies-page.html";
});

watchlist_page.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "watchlist.html";
});

favorites_movies_page.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "favorites-movies.html";
});

register_page.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "register.html";
});

login_page.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "login.html";
});

directors_page_mobile.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "directors-page.html";
});

movies_page_mobile.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "movies-page.html";
});

watchlist_page_mobile.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "watchlist.html";
});

favorites_movies_page_mobile.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "favorites-movies.html";
});

register_page_mobile.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "register.html";
});

login_page_mobile.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "login.html";
});
