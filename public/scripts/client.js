$(document).ready(function() {

  // Creates new HTML element for each tweet as they are submitted by the user and returns said element to be rendered on the page
  const createTweetElement = function(tweet) {
    let $tweet =
      `<article>
        <header>
          <div class="img-name">
            <img class="profile-pic" src=${tweet.user.avatars}>
            <span>${tweet.user.name}</span>
          </div>
          <span class="handle">${tweet.user.handle}</span>
        </header>
        <div class="tweet-content">
          <p>${escape(tweet.content.text)}</p>
        </div>
        <footer>
          <p>${timeSince(tweet['created_at'])} ago</p>
          <div class="eng-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>`;
    return $tweet;
  };

  // Calls createTweetElement for new tweets and appends each one to the feed
  const renderTweets = function(tweets) {
    $('.tweet-feed').empty();
    tweets.forEach(tweet => {
      const $tweet = createTweetElement(tweet);
      $('.tweet-feed').append($tweet);
    });
  };

  // XSS protection - converts any malicious input that could alter the code a string
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Adding event listener to the input form
  $('#submit-tweet').submit(function(event) {
    event.preventDefault();

    // Storing the counter in a variable to allow for resetting to 140 after tweet is submitted
    const counterElement = $('#tweet-text').parents('.form-flex').children('div:last').children('.counter');

    // Form validation - checking if input is empty or if over 140 characters - if tweet OK, AJAX POST request to server
    const charCount = $('#tweet-text').val().length;
    if (charCount > 140) {
      $('#null-error').slideUp('fast');
      $('#char-error').slideDown('fast');
    } else if (charCount === 0) {
      $('#char-error').slideUp('fast');
      $('#null-error').slideDown('fast');
    } else {
      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: $(this).serialize()
      }).then(() => {
        // Resets the character counter on the page back to 140, and hides any errors that may be visible
        counterElement[0].innerHTML = '140';
        $('#null-error').slideUp('fast');
        $('#char-error').slideUp('fast');
        $('#tweet-text').val('');
        return loadTweets();
      });
    }
  });

  // AJAX GET request to retreive the tweet database
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'json',
    }).then(data => {
      renderTweets(data);
    });
  };

  // Converts each tweet timestamp into an informative, human-readable statement (e.g. 4 Minutes Ago)
  function timeSince(date) {

    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  // Hiding the error messages on page load - will be shown as needed on form submission (see above)
  $('#null-error').hide();
  $('#char-error').hide();

  // Loading the existing tweets from the database
  loadTweets();
});