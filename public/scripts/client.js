/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  const createTweetElement = function(tweet) {
    let $tweet = 
      `<article>
          <div class="tweet-container">
          <header>
            <div class="img-name">
              <img class="profile-pic" src=${tweet.user.avatars}>
              <span>${tweet.user.name}</span>
            </div>
            <span class="handle">${tweet.user.handle}</span>
          </header>
          <div class="tweet-content">
            <p>${tweet.content.text}</p>
          </div>
          <footer>
            <p>${tweet['created_at']}</p>
            <div class="eng-icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </div>
      </article>`;

      return $tweet;
  }

  const renderTweets = function(tweets) {

    $('.tweet-feed').empty();
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('.tweet-feed').append($tweet);
    });
  }

  // Creating the POST request using data from the form submit
  $('#submit-tweet').submit(function(event) {
    event.preventDefault();


    // Form validation --> empty input, or input over 140 characters
    const counterElement = $('#tweet-text').parents('.form-flex').children('div:last').children('.counter');
    const charCount = $('#tweet-text').val().length;
    console.log(charCount);

    if (charCount > 140) {
      alert('Character limit exceeded! Keep it to 140 please');
    } else if (charCount === 0) {
      alert('Your tweet is empty!')
    } else {
      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: $(this).serialize()
      }).then(() => {
        counterElement[0].innerHTML = '140';
        $('#tweet-text').val('');
        return loadTweets()});
    }
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'json',
    }).then(data => {
      // Do I need to return line below?
      renderTweets(data);
    });
  }
  
  loadTweets();
});





