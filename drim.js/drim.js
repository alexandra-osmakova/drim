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

    var offset = document.body.scrollTop;
    var windowHeight = document.documentElement.clientHeight;
    var body = document.body;

    switch (true) {
        case (offset > (windowHeight * 4.75)):
        body.classList.add('page6');
            break;
        case (offset > (windowHeight * 3.75)):
            body.classList.add('page5');
            break;
        case (offset > (windowHeight * 2.75)):
            body.classList.add('page4');
            break;
        case (offset > (windowHeight * 1.75)):
            body.classList.add('page3');
            break;
        case (offset > (windowHeight * .75)):
            body.classList.add('page2');
            break;
        default:
            body.classList.add('page1');
    }
}

pagination();

  window.addEventListener("scroll", pagination);

  var pagination_items = document.querySelectorAll('.section');
  
  $(document).on('click', 'a[href^="#"]', function(e) {
      e.preventDefault();


      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });