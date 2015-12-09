(function() {
  'use strict';

  var buttons = document.querySelectorAll('.button');
  var screen = document.querySelector('.screen');

  /**
   * Clear the calculator screen
   */
  function handleClear() {
    screen.innerHTML = 0;
  }

  /**
   * Turn 2^4 into Math.pow(2,4)
   * @param  {string} match - power expression
   * @param  {string} base  - power base
   * @param  {string} exp   - power exponent
   * @return {string}       - resulting Math.pow string
   */
  function powReplacer(match, base, exp) {
    return 'Math.pow(' + base + ',' + exp + ')';
  }

  /**
   * If the current entry can't be parsed, flash an error message
   */
  function handleError() {
    screen.classList.add('error');
    screen.innerHTML = 'ERROR';
    setTimeout(function() {
      screen.classList.remove('error');
      screen.innerHTML = 0;
    }, 1000);
  }

  /**
   * Attempt to parse and evaluate the current entry
   */
  function handleEquals() {
    try {
      var s = screen.innerHTML.replace(/(\d+)\^(\d+)/, powReplacer);
      screen.innerHTML = eval(s);
      if (screen.innerHTML === 'undefined') {
        handleError();
      }
    } catch (e) {
      handleError();
    }
  }

  /**
   * Handle click of numerical and operation buttons
   * @param  {string} buttonText - text of the button label
   */
  function handleOther(buttonText) {
    if (screen.innerHTML === '0') {
      // don't include leading zero
      screen.innerHTML = '';
    }
    screen.innerHTML += buttonText;
  }

  /**
   * Handle a click of any calculator button
   */
  function buttonClick() {
    var buttonText = this.innerHTML;

    if (buttonText === 'C') {
      handleClear();
    } else if (buttonText === '=') {
      handleEquals();
    } else {
      handleOther(buttonText);
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonClick);
  }
})();
