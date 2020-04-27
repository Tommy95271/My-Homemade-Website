$(document).ready(function() {
	var btn = $('#findFood');
	btn.on('click', function() {
		$('#overlay').css('display', 'grid');
		$('#overlay').addClass('overlay');
		console.log(overlay);
		setTimeout(() => {
			$('#overlay').removeClass('overlay');
			$('#overlay').css('display', 'none');
		}, 2500);
	});
});
