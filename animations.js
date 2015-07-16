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
		var tweetWords = $('textarea').val();
		var newUser = '@akim';
		var newFull = 'Ann Kim';

		$('.content').clone(true).prependTo('#stream').addClass('.clone');
		$('.clone').find('.avatar').replaceWith('<img class="avatar" src="img/alagoon.jpg" />');
		$('.clone').find('.username').html(newUser);
		$('.clone').find('.fullname').html(newFull);
		$('.clone').find('.text-compose').html(tweetWords);

		// var $cloneUsername = $('.content').clone();
		// $cloneUsername.html('<span>@alagoon</span>');
		// $('.content').prepend($cloneUsername);

		// var $cloneFullname
		// $cloneFullname.html('<strong>A Lagoon</strong>');
		// $('.content').prepend($cloneFullname);

		// $('.content').find('.fullname').attr('Ann Kim');
		// $('.content').prepend('@akim').addClass('username');
		// $('.content').prepend('Ann Kim').addClass('fullName');
		// $('.content').after($('.tweet-text'));

	// $('#tweet-submit').on('click', function() {
	// 	// var tweetText = $('.tweet-compose').text();
	// 	$('.content').clone(true).prependTo('#stream');

	});


	// Step 6 - reveal tweet actions only when hover over the tweet (otherwise remain hidden)



	// Step 7 - hide retweets/timestamp/replay areas by default; expand these if click on tweet
});




