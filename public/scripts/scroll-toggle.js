$(document).ready(function() {

  // Adding scroll functionality so logo click brings back to top
  $('.logo').click(function() {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 1000);
  });

  // When the 'Write a new tweet' button is clicked, the Compose Tweet section toggles up/down
  $('.new-tweet').click(function() {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 1000);
    $('#compose').slideToggle('slow');
    $('#tweet-text').focus();
  });

  // Hiding the Compose Tweet section on page load
  $('#compose').hide();
});