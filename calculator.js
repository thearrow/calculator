(function() {
  'use strict';

  var buttons = document.querySelectorAll('.button');
  var screen = document.querySelector('.screen');

  var buttonClick = function() {
    var buttonText = this.innerHTML;

    if (buttonText === 'C') {
      screen.innerHTML = '';
    } else if (buttonText === '=') {
      screen.innerHTML = eval(screen.innerHTML);
    } else {
      screen.innerHTML += buttonText;
    }
  };

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
  }
})();
