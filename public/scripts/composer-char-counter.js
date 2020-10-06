$(document).ready(function() {
  let counter = 0;
  $("#tweet-text").keyup(function(event) {
    // console.log('char count', this.value.length);
    let thing = $(this).parents('.form-flex').children('div:last').children('.counter');
    console.log(thing[0].innerHTML);
  });
});


