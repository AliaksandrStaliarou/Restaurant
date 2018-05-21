/**
 * Created by נ4םנ on 19.05.2018.
 */

var hamburgerButton = document.querySelector('.hamburger');
var navSocial = document.querySelector('.navSocial');
hamburgerButton.addEventListener('click', openHambugerButton);

function openHambugerButton() {
    hamburgerButton.classList.toggle('open_hamburger');
    navSocial.classList.toggle('open_navSocial');
    /*if (navSocial.style.maxHeight){
        navSocial.style.maxHeight = null;
    } else {
        navSocial.style.maxHeight = 285 + "px";
    }*/

}

