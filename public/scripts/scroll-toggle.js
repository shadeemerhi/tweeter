$(document).ready(function() {

  // Adding scroll functionality so logo click brings back to top
  $('.logo').click(function() {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 500);
  });

  // When the 'Write a new tweet' button is clicked, the Compose Tweet section toggles up/down
  $('.new-tweet').click(function() {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 1000);

    $('#compose').toggle('slow');

    $('#tweet-text').focus();



    // $('#compose').slideToggle('slow');
  });

  $(function () {
    $(document).scroll(function () {
      const $nav = $(".sticky");
      const $tweetButton = $('.new-tweet');
      const $logo = $('.logo');
      const $scrollButton = $('.scroll-button');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $tweetButton.toggleClass('hidden', $(this).scrollTop() > $nav.height());
      $logo.toggleClass('hidden', $(this).scrollTop() > $nav.height());
      $scrollButton.toggleClass('hidden', $(this).scrollTop() < $nav.height());
    });
  });

  $('.scroll-button').click(function() {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 500);
    if($('#compose').is(':hidden')) {
      $('#compose').slideDown('slow');
      $('#tweet-text').focus();
      // $(this).hide();
    }
  });

  // Hiding the Compose Tweet section on page load
  $('#compose').hide();
});