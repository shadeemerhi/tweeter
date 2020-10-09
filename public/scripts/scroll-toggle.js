$(document).ready(function() {

  // Adding scroll functionality so logo click brings back to top
  $('.logo').click(function() {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 500);
  });

  // When the 'Write a new tweet' button is clicked, the Compose Tweet section toggles up/down
  $('.new-tweet').click(function() {

    // $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 1000);
    $('#compose').toggle('slow');
    $('#tweet-text').focus();

  });

  // Toggles appropriate classes on various elements on scroll past the height of the nav
  $(function () {
    $(document).scroll(function () {

      // Creating variables using elements that have classes that toggle
      const $nav = $(".sticky");
      const $tweetButton = $('.new-tweet');
      const $logo = $('.logo');
      const $scrollButton = $('.scroll-button');

      // Toggling element classes based on user scroll behavior
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $tweetButton.toggleClass('hidden', $(this).scrollTop() > $nav.height());
      $logo.toggleClass('hidden', $(this).scrollTop() > $nav.height());
      $scrollButton.toggleClass('hidden', $(this).scrollTop() < $nav.height());
    });
  });

  // Scroll-to-top button appears when user scrolls down - when clickes, scrolls to top and opens tweet composer
  $('.scroll-button').click(function() {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top - 150 }, 500);
    if ($('#compose').is(':hidden')) {
      $('#compose').slideDown('slow');
      $('#tweet-text').focus();
    } else {
      $('#tweet-text').focus();
    }
  });

  // Hiding the Compose Tweet section on page load
  $('#compose').hide();
});