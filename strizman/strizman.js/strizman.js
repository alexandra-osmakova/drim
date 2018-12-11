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

function counter() {
    console.log(1)
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
    };
    var demo = new CountUp('first_item_to_count', 0, 3951, 0, 2.5, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }

    var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
        prefix: '+',
        suffix: '%'
    };
    var demo = new CountUp('second_item_to_count', 0, 50, 0, 2.5, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }

    var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
        prefix: '+',
        suffix: '%'
    };
    var demo = new CountUp('third_item_to_count', 0, 65, 0, 2.5, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
        prefix: '+',
        suffix: '%'
    };
    var demo = new CountUp('fourth_item_to_count', 0, 59, 0, 2.5, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }
}

var animation_start = document.getElementsByClassName('animation_start')[0];
var k = 0;

var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

function scrolling(e) {

    if (isPartiallyVisible(animation_start) & k == 0) {
        counter();
        k++;
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

window.addEventListener("scroll", overflow);

function overflow() {
    document.documentElement.classList.add('no_scroll');
}

new WOW().init();