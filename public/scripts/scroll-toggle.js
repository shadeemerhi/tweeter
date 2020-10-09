// Adding scroll functionality so logo click brings back to top
$(document).ready(function() {
  $('.logo').click(function () {
    $('html,body').animate({ scrollTop: $('.head-feed').offset().top-150 }, 1000);
  });
});