var menu__icon = document.getElementsByClassName('menu__icon')[0];
var menu = document.getElementsByClassName('menu')[0];
var body = document.documentElement;

menu__icon.addEventListener('click', menu_open);

function menu_open() {
    menu.classList.toggle('menu_visible');
    body.classList.toggle('no_scroll');
}

var header_burger_menu = document.getElementsByClassName("header_burger_menu")[0];

menu__icon.addEventListener('click', function () {
    header_burger_menu.classList.toggle('menu_state_open');
})


var slider = tns({
    container: '.my-slider',
    items: 1,
    controlsText: ['', ''],
    nav: false,
});

var accardion_item = document.getElementsByClassName('acc_input');
var accardion_cross = document.getElementsByClassName('circle-plus');
var accardion = document.getElementsByClassName('ac-container')[0];

window.onload = function() {
    accardion_cross[0].classList.add('opened');
}

accardion.addEventListener('click', function () {
    for (var i = 0; i < accardion_item.length; i++) {
        if (accardion_item[i].checked) {
            for(var j = 0; j < accardion_cross.length; j++) {
                accardion_cross[j].classList.remove('opened');
            }
            accardion_cross[i].classList.add('opened');
        }
    }
})

AOS.init();

function pagination() {
    var offset = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.clientHeight;
    var pagination = document.getElementById('pagination');
    var paginationChildren = pagination.children;

    switch (true) {
        case (offset > (windowHeight * 6.75)):
            for (var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('odd_pagination');
            }
            paginationChildren[6].classList.add('odd_pagination__activ');
            break;
        case (offset > (windowHeight * 6)):
            for (var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('even_pagination');
            }
            paginationChildren[5].classList.add('even_pagination__activ');
            break;
        case (offset > (windowHeight * 4.2)):
            for (var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('odd_pagination');
            }
            paginationChildren[4].classList.add('odd_pagination__activ');
            break;
        case (offset > (windowHeight * 3)):
            for (var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('even_pagination');
            }
            paginationChildren[3].classList.add('even_pagination__activ');
            break;
        case (offset > (windowHeight * 1.5)):
            for (var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('odd_pagination');
            }
            paginationChildren[2].classList.add('odd_pagination__activ');
            break;
        case (offset > (windowHeight * .55)):
            for (var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('even_pagination');
            }
            paginationChildren[1].classList.add('even_pagination__activ');
            break;
        case (offset < (windowHeight * .75)):
            for (var i = 0; i < paginationChildren.length; i++) {
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

new WOW().init();


var second_client_progress = document.getElementsByClassName('second_client');
var slider_controls =document.querySelectorAll('.tns-controls button');

for(var i = 0; i < slider_controls.length; i++) {
    slider_controls[i].addEventListener('click', function() {
        for(var j = 0; j < second_client_progress.length; j++) {
            second_client_progress[j].classList.add('activ_animation');
        }

        
        slider_controls[0].lastChild.style.setProperty = "content:url(url(../img/scroll-arrow-to-down_white.svg))";
        slider_controls[1].lastChild.style.setProperty = "content:url(url(../img/scroll-arrow-to-down_white.svg))";
        console.log(slider_controls[1].lastChilds)
    })
}
