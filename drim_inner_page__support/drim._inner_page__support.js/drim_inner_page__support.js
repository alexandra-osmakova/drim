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


function pagination() {
    var offset = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.clientHeight;
    var body = document.body;
    var pagination = document.getElementById('pagination');
    var paginationChildren = pagination.children;

    switch (true) {
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
        case (offset > (windowHeight * 2.8  )):
            for(var i = 0; i < paginationChildren.length; i++) {
                paginationChildren[i].classList = '';
                paginationChildren[i].classList.add('odd_pagination');
                }
                paginationChildren[3].classList.add('odd_pagination__activ'); 
            break;
        case (offset > (windowHeight * 1.6)):
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


AOS.init();


var progress_steps = document.getElementsByClassName('services_types__progress_steps')[0];
var progress_line_number = document.getElementsByClassName('services_types__progress_line_number');
var progress_line_item = document.getElementsByClassName('services_types__progress_line_item');
var servises_types_card = document.getElementsByClassName('servises_types_card');

progress_steps.addEventListener('click', progressChange);

function progressChange(e) {
    if(e.target.classList.contains('services_types__progress_line_number')) {
        for(var i = 0; i < progress_line_number.length; i++) {
            progress_line_number[i].classList.remove('activ_progress_line');
        }
        e.target.classList.add('activ_progress_line');
        if(e.target.id === 'progress_line_number_first') {
            for(var j = 0; j < progress_line_item.length; j++) {
                progress_line_item[j].classList.remove('activ_progress_line');
                servises_types_card[j].classList.remove('activ_card')
            }
            progress_line_item[0].classList.add('activ_progress_line')
            servises_types_card[0].classList.add('activ_card')
        }
        else if(e.target.id === 'progress_line_number_second') {
            for(var j = 0; j < progress_line_item.length; j++) {
                progress_line_item[j].classList.remove('activ_progress_line');
                servises_types_card[j].classList.remove('activ_card')
            }
            progress_line_item[1].classList.add('activ_progress_line')
            servises_types_card[1].classList.add('activ_card')
        }
        else if(e.target.id === 'progress_line_number_third') {
            for(var j = 0; j < progress_line_item.length; j++) {
                progress_line_item[j].classList.remove('activ_progress_line');
                servises_types_card[j].classList.remove('activ_card')
            }
            progress_line_item[2].classList.add('activ_progress_line')
            servises_types_card[2].classList.add('activ_card')
        }
        else if(e.target.id === 'progress_line_number_fourth') {
            for(var j = 0; j < progress_line_item.length; j++) {
                progress_line_item[j].classList.remove('activ_progress_line');
                servises_types_card[j].classList.remove('activ_card')
            }
            progress_line_item[3].classList.add('activ_progress_line')
            servises_types_card[3].classList.add('activ_card')
        }
    }
}