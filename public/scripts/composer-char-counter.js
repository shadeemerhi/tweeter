$(document).ready(function() {
  $("#tweet-text").keyup(function(event) {
    // console.log('char count', this.value.length);

    // Each time a character is entered, we retrieve the .counter output element from the DOM
    const counterElement = $(this).parents('.form-flex').children('div:last').children('.counter');

    // Updating the value of the character count using the length of the input text
    const charCount = 140 - this.value.length;

    // If the character count is below 0, the color is changed to red, otherwise it should be it's normal color
    if (charCount < 0) {
      counterElement.css('color', 'red');
    } else {
      counterElement.css('color', '#545149');
    }

    // Updating the innterHTML of the counter to display to the user
    counterElement[0].innerHTML = charCount.toString();


  });
});

