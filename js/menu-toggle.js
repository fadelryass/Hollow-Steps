// This script is used to toggle the menu on mobile devices

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "200px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}