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