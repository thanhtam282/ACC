// viết script, gọi function ở đây
$(document).ready(() => {
	header.headerInit();
	btnRipple('btn-ripple');
	nav.navInit();
	objectFitImages();
	// Lĩnh vực
	AOS.init();
	breadcrum.breadcrumInit();
	// Load Ajax

});

function addClassByLocation() {
	let i = window.location.pathname
	if (i.search('linh-vuc-hoat-dong') > 0) {
		$('.dh-header .header-nav li:nth-child(3) a').addClass('active')
	} else if (i.search('truyen-thong') > 0) {
		$('.dh-header .header-nav li:nth-child(5) a').addClass('active')
	} else if (i.search('co-hoi-nghe-nghiep') > 0) {
		$('.dh-header .header-nav li:nth-child(6) a').addClass('active')
	}
}