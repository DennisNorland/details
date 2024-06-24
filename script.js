function togglemenu() {
const menu = document.querySelector(".menu-links");
const icons = document.querySelector(".hamburger-icons");
menu.classlist.toggle("open");
icons.classlist.toggle("open");
}