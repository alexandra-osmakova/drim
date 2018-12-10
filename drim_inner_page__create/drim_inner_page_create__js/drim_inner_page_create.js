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

  var devStepsImages = document.getElementsByClassName('dev_steps__images')[0];

devStepsImages.addEventListener('click', changeSlide);

function changeSlide (event) {
    console.log(event)
    var target = event.target;
    for(var i = 0; i < swiperSlide.length; i++) {
        if (Number(swiperSlide[i].dataset.number ) == Number(target.dataset.number)) {
            swiper.slideTo(i, 400, true);
            for(var j = 0; j < swiperSlide.length; j++) {
                devStepsImagesItem[j].classList.remove('activ_item');
            }
            devStepsImagesItem[i].classList.add('activ_item');
        }
    }
}


  AOS.init();

  function pagination() {
    var offset = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.clientHeight;
    var body = document.body;
    var pagination = document.getElementById('pagination');
    var paginationChildren = pagination.children;

    switch (true) {
        case (offset > (windowHeight * 8.75)):
            for(var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('odd_pagination');
                }
                paginationChildren[6].classList.add('odd_pagination__activ');
            break;
        case (offset > (windowHeight * 6.75)):
            for(var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('even_pagination');
                }
                paginationChildren[5].classList.add('even_pagination__activ');
            break;
        case (offset > (windowHeight * 4)):
            for(var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('odd_pagination');
                }
                paginationChildren[4].classList.add('odd_pagination__activ'); 
            break;
        case (offset > (windowHeight * 3)):
            for(var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('even_pagination');
                }
                paginationChildren[3].classList.add('even_pagination__activ'); 
            break;
        case (offset > (windowHeight * 2)):
            for(var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('odd_pagination');
                }
                paginationChildren[2].classList.add('odd_pagination__activ'); 
            break;
        case (offset > (windowHeight * .75)):
            for(var i = 0; i < paginationChildren.length; i++) {
            paginationChildren[i].classList = '';
            paginationChildren[i].classList.add('even_pagination');
            }
            paginationChildren[1].classList.add('even_pagination__activ');   
            break;
        case (offset < (windowHeight * .75)):
            for(var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('odd_pagination');
            }
            paginationChildren[0].classList.add('odd_pagination__activ');
            break;
    }
}

pagination();

window.addEventListener("scroll", pagination);

var linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}
