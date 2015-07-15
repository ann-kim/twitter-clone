$(document).ready(function() {
	// Step 2
	$('.tweet-compose').on('click', function() {
		$('.tweet-compose').css({'width': '100%', 'height': '5em'}, 300);
		$('#tweet-controls').css('display', 'block');
	});


	// Step 3 - decrease character count as type
	$('.tweet-compose').keydown(function() {
		var left = 140 - $(this).val().length;
		$('#char-count').text(left);
	});


	//Step 3 - character count turns red when 10 or less characters left
	$('.tweet-compose').on('keyup', function() {
		var text = $('.tweet-compose').val();
		var charLeft = 140 - text.length;
		console.log(charLeft);
		$('#char-count').html(charLeft);
		if (charLeft < 11) {
			$('#char-count').css('color', 'red');
		} if (charLeft > 10) {
			$('#char-count').css('color', '#999');
		}
	});

	// Step 4 - Disable 'Tweet' button when more than 140 characters
	
});