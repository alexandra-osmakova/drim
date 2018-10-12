var wrap = document.getElementsByClassName('btns')[0];
var text = document.getElementsByClassName('circle_text_item');

window.onload = function () {
    text[0].classList.add('circle_text_visible')
}

wrap.addEventListener('mouseover', go_visible, false);

function go_visible(e) {
    if (e.target.classList.contains('circle_content_item')) {
        var target = e.target.dataset.number;
        for (var i = 0; i < text.length; i++) {
            if (text[i].dataset.number == target) {
                text[i].classList.add('circle_text_visible');
            } else {
                text[i].classList.remove('circle_text_visible');
            }
        }
    }
};

AOS.init();

function pagination() {
    var offset = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.clientHeight;
    var body = document.body;
    var pagination = document.getElementById('pagination')

    switch (true) {
        case (offset > (windowHeight * 7.75)):
            pagination.classList.add('pagination_invisible');
            break;
        case (offset > (windowHeight * 5.75)):
            pagination.classList = '';
            body.classList = 'page6';
            break;
        case (offset > (windowHeight * 3.75)):
            pagination.classList = '';
            body.classList = 'page5';
            break;
        case (offset > (windowHeight * 2.75)):
            pagination.classList = '';
            body.classList = 'page4';
            break;
        case (offset > (windowHeight * 1.75)):
            pagination.classList = '';
            body.classList = 'page3';
            break;
        case (offset > (windowHeight * .75)):
            pagination.firstElementChild.classList.remove('header_pagination_main_item');
            var a = pagination.children;
            for (var i = 0; i < a.length; i++) {
                a[i].classList.remove('header_pagination');
            }
            pagination.classList = '';
            body.classList = 'page2';
            break;
        case (offset < (windowHeight * 0.75)):
            var a = pagination.children;
            a[1].classList.remove('page2');
            pagination.firstElementChild.classList.add('header_pagination_main_item');
            for (var i = 1; i < a.length; i++) {
                a[i].classList.add('header_pagination');
            }
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

window.addEventListener("scroll", overflow);

function overflow() {
    document.documentElement.classList.add('no_scroll');
}

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

var clientWidth = document.documentElement.clientWidth;
var aboutTitleItem = document.getElementsByClassName('service_type_item');

window.onload = function () {
    window.setInterval(hey, 100);
}

function hey() {
    if (clientWidth == 320) {
        for (var i = 0; i < aboutTitleItem.length; i++) {
            var bounding = aboutTitleItem[i].getBoundingClientRect();
            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                aboutTitleItem[i].setAttribute("data-aos", "fade-up")
            }
        }
    }
}