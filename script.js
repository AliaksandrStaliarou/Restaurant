/**
 * Created by נ4םנ on 19.05.2018.
 */

/*hamburger animation and menu opener*/
var hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', openHambugerButton);

function openHambugerButton() {
    hamburgerButton.classList.toggle('open_hamburger');
    var navSocial = document.querySelector('.navSocial');
    navSocial.classList.toggle('open_navSocial');
}

/*sticky menu*/
window.onscroll = function() {stickyMenu()};

function stickyMenu() {
    var wrapper = document.querySelector('.wrapper');
    var sticky = wrapper.offsetTop;
    if (window.pageYOffset > sticky && document.documentElement.clientWidth >= 990) {
        wrapper.classList.add("sticky")
    } else {
        wrapper.classList.remove("sticky");
    }
}


