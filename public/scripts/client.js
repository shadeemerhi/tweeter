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
              <p>${tweet.user.name}</p>
            </div>
            <p class="handle">${tweet.user.handle}</p>
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

      // console.log($tweet);
      return $tweet;
  }


  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": '10 Minutes Ago'
  }

  const $tweet = createTweetElement(tweetData);

  $('.tweet-feed').append($tweet);

});


const renderTweets = function(tweets) {

  
}


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
// ]