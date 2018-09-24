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
            }
            else {
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

    switch (true) {
        case (offset > (windowHeight * 5.75)):
            body.classList = 'page6';
            break;
        case (offset > (windowHeight * 3.75)):
            body.classList = 'page5';
            break;
        case (offset > (windowHeight * 2.75)):
            body.classList = 'page4';
            break;
        case (offset > (windowHeight * 1.75)):
            body.classList = 'page3';
            break;
        case (offset > (windowHeight * .75)):
            body.classList = 'page2';
            break;
        default:
            body.classList = 'page1';
    }
}

pagination();

window.addEventListener("scroll", pagination);

var linkNav = document.querySelectorAll('[href^="#"]'), 
    V =  0.2; 
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1'); 
        t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
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