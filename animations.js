$(document).ready(function() {
	// Step 2 - double size of textarea when user clicks textarea; reveal 'Tweet' button and character count
	$('.tweet-compose').on('click', function() {
		$('.tweet-compose').css({'width': '100%', 'height': '5em'}, 300);
		$('#tweet-controls').css('display', 'block');
	});


	// Step 3 - decrease character count as type; character count turns red when 10 or less characters
	$('.tweet-compose').keydown(function() {
		var left = 140 - $(this).val().length;
		$('#char-count').text(left);
		if (left < 11) {
			$('#char-count').css('color', 'red');
		} if (left > 10) {
			$('#char-count').css('color', '#999');
		} 
	// Step 4 - disable 'Tweet' button when more than 140 characters
		if (left < 0) {
			$('#tweet-submit').prop('disabled', true);
		} if (left > 0) {
			$('#tweet-submit').prop('disabled', false);
		}
	});

	// Alternate Step 3
	// $('.tweet-compose').on('keyup', function() {
	// 	var text = $('.tweet-compose').val();
	// 	var charLeft = 140 - text.length;
	// 	console.log(charLeft);
	// 	$('#char-count').html(charLeft);
	// 	if (charLeft < 11) {
	// 		$('#char-count').css('color', 'red');
	// 	} if (charLeft > 10) {
	// 		$('#char-count').css('color', '#999');
	// 	}
	// });


	// Step 5 - add new tweet to tweet stream when 'Tweet' button is clicked w/username and profile pic
	$('#tweet-submit').on('click', function() {
		var newPic = $('.avatar').attr('src');
		var tweetWords = $('.tweet-compose').val();
		var numRet = 0;
		var numFav = 0;
		var newUser = '@alagoo';
		var newFull = 'Alan Lagoon';
		var fullDate = new Date($.now());
			var minutes = function() {
				if (fullDate.getMinutes() < 10) {
					return "0" + fullDate.getMinutes();
				} else {
					return fullDate.getMinutes();
				}
			};
			var amOrPm = function() {
				if (fullDate.getHours() < 12) {
					return "AM";
				} else {
					return "PM";
				}
			};
			var timeNow = fullDate.getHours() + ":" + minutes(fullDate.getMinutes()) + " " + amOrPm(fullDate.getHours()); 


			var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			var currentMonth = monthNames[fullDate.getMonth()];

			var currentYear = fullDate.getFullYear().toString().substr(2, 2);
	
			var dateNow = fullDate.getDate() + " " + currentMonth + " " + currentYear;

		$('#stream').prepend(
			'<div class="tweet">' +
			'<div class="content">' +
			'<img class="avatar" src="img/alagoon.jpg">' +
			'<strong class="fullname">' + newFull + ' ' + '</strong>' + 
			'<span class="username">' + newUser + '</span>' +
			'<p class="tweet-text">' + tweetWords + '</p>' +
			'<div class="tweet-actions">' +
				'<ul>' +
					'<li><span class="icon action-reply"></span> Reply</li>' +
					'<li><span class="icon action-retweet"></span>Retweet</li>' +
					'<li><span class="icon action-favorite"></span>Favorite</li>' +
					'<li><span class="icon action-more"></span>More</li>' +
				'</ul>' +
			'</div>' +
			'<div class="stats">' +
				'<div class="retweets">' +
					'<p class="num-retweets">' + numRet + '</p>' + '<p>RETWEETS</p>' +
				'</div>' +
				'<div class="favorites">' +
					'<p class="num-favorites">' + numFav + '</p>' + '<p>FAVORITES</p>' +
				'</div>' +
				'<div class="time">' + timeNow + " - " + dateNow + '</div>' +
			'</div>'
		);
	});


	// Step 6 - reveal tweet actions only when hover over the tweet (otherwise remain hidden)
	$('.tweet-actions').hide();

	$('.tweet').hover(function() {
		$('.tweet-actions').toggle();
	});


	// Step 7 - hide retweets/timestamp/replay areas by default; expand these if click on tweet
	$('.stats').hide();

	$('.tweet').on('click', function(){
		$('.stats').toggle();
	});
});




