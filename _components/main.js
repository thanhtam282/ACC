// viết script, gọi function ở đây
$(document).ready(() => {
	header.headerInit();
	nav.navInit();
	$(".photo-gallery").lightGallery({
		mode: 'lg-scale-up'
	});
	$(".acc-video-1 .video-wrapper").lightGallery({
		mode: 'lg-scale-up'
	});
});