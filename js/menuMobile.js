let menuOn = document.querySelector('.menuOptionMobile');
let subMenu = document.querySelector('.subMenuMobile');
let keyMobMobile = document.querySelector('#keyColor');
let downSvgMobile = document.querySelector('#downSvgMobile');
let SubMenuMobile = document.querySelector('#upSvgMobile');
let MenuIcon = document.querySelector('#MenuMobile');

document.querySelector("#MenuMobile").addEventListener("click", function() {
    if(MenuIcon.innerHTML == 'menu'){
        MenuIcon.innerHTML = 'close';
        menuOn.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }else{
        MenuIcon.innerHTML = 'menu';
        menuOn.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
document.querySelector("#subMenuMobileButton").addEventListener("click", function() {
    if(downSvgMobile.style.display == 'none'){
        SubMenuMobile.style.display = 'none';
        downSvgMobile.style.display = 'inline';
        subMenu.style.display = 'none';
    }else{
        SubMenuMobile.style.display = 'inline';
        downSvgMobile.style.display = 'none';
        subMenu.style.display = 'block';
    }
});