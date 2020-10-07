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
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: $(this).serialize()
    }).then(() => {
      $('#tweet-text').val('');
      return loadTweets()});
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'json',
    }).then(data => {
      renderTweets(data);
    });
  }

  loadTweets();
});





