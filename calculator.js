(function() {
  'use strict';

  var buttons = document.querySelectorAll('.button');
  var screen = document.querySelector('.screen');

  var buttonClick = function() {
    var buttonText = this.innerHTML;

    if (buttonText === 'C') {
      screen.innerHTML = 0;
    } else if (buttonText === '=') {
      try {
        screen.innerHTML = eval(screen.innerHTML);
      } catch (e) {
        screen.classList.add('error');
        screen.innerHTML = "ERROR";
        setTimeout(function(){
          screen.classList.remove('error');
          screen.innerHTML = 0;
        }, 1000);
      }
    } else {
      if (screen.innerHTML === '0') {
        screen.innerHTML = ''; //don't include leading zero
      }
      screen.innerHTML += buttonText;
    }
  };

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
  }
})();
