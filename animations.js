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
	// Step 4 - diable 'Tweet' button when more than 140 characters
		if (left < 0) {
			$('#tweet-submit').prop('disabled', true);
		} if (left > 0) {
			$('#tweet-submit').prop('disabled', false);
		}
	});

	//Alternate Step 3
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


	//Step 5 - add new tweet to tweet stream when 'Tweet' button is clicked w/username and profile pic
	$('#tweet-submit').on('click', function() {
		// var tweetText = $('.tweet-compose').text();
		$('.content').clone(true).prependTo('#stream');

		$('.content').prepend('@akim').addClass('username');
		$('.content').prepend('Ann Kim').addClass('fullName');
		$('.content').prepend('<img class="avatar" src="img/alagoon.jpg" />')
		$('.content').after($('.tweet-text'));
	});

	
});




