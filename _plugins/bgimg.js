function bgimg() {
	$('[bg-img]').each(function () {
		var bgimg = $(this).attr('bg-img');
		$(this).css({
			"background-position": "center center",
			"background-size": "cover",
			"background-repeat": "no-repeat",
			"background-image": "url(" + bgimg + ")"
		});
	});
};
function bg() {
	$('[bg]').each(function () {
		var bg = $(this).attr('bg');
		$(this).css({
			"background-image": "url(" + bg + ")"
		});
	});
};
$(document).ready(function () {
	bgimg();
	bg();
});
