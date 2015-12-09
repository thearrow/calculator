(function() {
  'use strict';

  var buttons = document.querySelectorAll('.button');
  var screen = document.querySelector('.screen');

  /**
   * Turn 2^4 into Math.pow(2,4)
   * @param  {string} match - power expression
   * @param  {string} base  - power base
   * @param  {string} exp   - power exponent
   * @return {string}       - resulting Math.pow string
   */
  function replacer(match, base, exp) {
    return 'Math.pow(' + base + ',' + exp + ')';
  }

  /** Handle a click of a calculator button */
  function buttonClick() {
    var buttonText = this.innerHTML;

    if (buttonText === 'C') {
      screen.innerHTML = 0;
    } else if (buttonText === '=') {
      try {
        var s = screen.innerHTML.replace(/(\d+)\^(\d+)/, replacer);
        screen.innerHTML = eval(s);
      } catch (e) {
        screen.classList.add('error');
        screen.innerHTML = 'ERROR';
        setTimeout(function() {
          screen.classList.remove('error');
          screen.innerHTML = 0;
        }, 1000);
      }
    } else {
      if (screen.innerHTML === '0') {
        // don't include leading zero
        screen.innerHTML = '';
      }
      screen.innerHTML += buttonText;
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
  }
})();
