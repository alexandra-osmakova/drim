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


var slider = tns({
    container: '.my-slider',
    items: 1,
    controlsText: ['', ''],
    nav: false,
});


$('.circle-plus').on('click', function () {
    $(this).toggleClass('opened');
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

function counter() {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '+',
        suffix: '%'
    };
    var demo = new CountUp('first_number_to_count', 0, 450, 0, 2.5, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }

    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '+',
        suffix: '%'
    };
    var demo = new CountUp('second_number_to_count', 0, 650, 0, 2.5, options);
    if (!demo.error) {
        demo.start();
    } else {
        console.error(demo.error);
    }
}

counter()