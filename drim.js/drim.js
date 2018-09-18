var wrap = document.getElementsByClassName('btns')[0];
var text = document.getElementsByClassName('circle_text_item');

window.onload = function() {
	text[0].classList.add('circle_text_visible')
}

wrap.addEventListener('mouseover', go_visible, false);

function go_visible(e) {
	if (e.target.classList.contains('circle_content_item')) {
        var target = e.target.dataset.number;
    for(var i = 0; i < text.length; i++) {
    	if(text[i].dataset.number == target) {
      	text[i].classList.add('circle_text_visible');
      } 
      else {
      	text[i].classList.remove('circle_text_visible');
      }
    }
  }
};

  AOS.init();


  var isScrolling = false;
  var pagination = document.getElementsByClassName('pagination_circle');

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            var inProgress = document.getElementsByClassName('screen');
            for (var i = 0; i < inProgress.length; i++) {
                scrolling(inProgress[i]);
                isScrolling = false;
            }
        });
    }
    isScrolling = true;
}

function scrolling(el) {
    if (isFullyVisible(el)) {
    		for(var i = 0; i < pagination.length; i++) {
       		pagination[i].classList.add("pagination_circle_activ");
        }
    } else {
    		//pagination[i].classList.remove("pagination_circle_activ");
            console.log(pagination[0].classList.replace())
        }
}


function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}