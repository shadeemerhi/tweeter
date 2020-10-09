$(document).ready(function() {

  // Adding scroll functionality so logo click brings back to top
  $('.logo').click(function() {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 1000);
  });

  $('.new-tweet').click(function() {
    $('#compose').slideToggle('fast');
  });

  $('#compose').hide();
});