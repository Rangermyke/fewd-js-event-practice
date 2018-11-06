(function () {
  // get buttons
  const buttons = document.querySelectorAll('button');
  const buttonOne = buttons[0];
  const buttonTwo = buttons[1];
  const buttonThree = buttons[2];

  // listen for clicks on the document
  buttonOne.addEventListener('click', function() {
    buttonOne.classList.toggle('button-danger');
  });

  buttonTwo.addEventListener('click', function() {
    buttonTwo.innerText = 'You Clicked Me!';
  });

  buttonThree.addEventListener('click', function() {
    buttonTwo.innerText = 'button Two';
  });

})();
