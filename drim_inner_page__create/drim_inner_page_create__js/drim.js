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

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  var swiperSlide = document.getElementsByClassName('swiper-slide ');
  var devStepsImagesItem = document.getElementsByClassName('dev_steps__images_item');

  var swiperButtonNext = document.getElementsByClassName('swiper-button-next')[0];
  var swiperButtonPrev = document.getElementsByClassName('swiper-button-prev')[0];

  swiperButtonNext.addEventListener('click', swiperItemGoesActiv);
  swiperButtonPrev.addEventListener('click', swiperItemGoesActivBack);

  window.onload = function() {
    devStepsImagesItem[0].classList.add('activ_item');
  }

   function swiperItemGoesActiv() {
    for(var i = 0; i < swiperSlide.length; i++) {
        if(swiperSlide[i].classList.contains('swiper-slide-active')) {
            devStepsImagesItem[i].classList.add('activ_item');
            devStepsImagesItem[i-1].classList.remove('activ_item')
        }
    }
  }

  function swiperItemGoesActivBack() {
    for(var i = 0; i < swiperSlide.length; i++) {
        if(swiperSlide[i].classList.contains('swiper-slide-active')) {
            devStepsImagesItem[i].classList.add('activ_item');
            devStepsImagesItem[i+1].classList.remove('activ_item')
        }
    }
  }

  AOS.init();