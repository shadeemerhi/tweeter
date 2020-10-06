$(document).ready(function() {
  let counter = 0;
  $("#tweet-text").keyup(function(event) {
    // console.log('char count', this.value.length);
    const counterElement = $(this).parents('.form-flex').children('div:last').children('.counter');
    let charCount = parseInt(counterElement[0].innerHTML) - 1;
    charCount = charCount.toString();
    counterElement[0].innerHTML = charCount;
  });
});

