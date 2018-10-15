var menu__icon = document.getElementsByClassName('menu__icon')[0];
var menu = document.getElementsByClassName('menu')[0];

menu__icon.addEventListener('click', menu_open);

function menu_open() {
    menu.classList.toggle('menu_visible');
}

var header_burger_menu = document.getElementsByClassName("header_burger_menu")[0];

menu__icon.addEventListener('click', function () {
    header_burger_menu.classList.toggle('menu_state_open');
})

document.body.addEventListener('touchstart', function () {});

var slider = tns({
    container: '.dev_steps_slider',
    loop: false,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    swipeAngle: false,
    speed: 400,
    autoWidth: true,
    controlsText:"  ",
  });