const header = {

	searchToggle: () => {
		$('.acc-header .searchbox button').on('click', function(){
			$('.acc-header .searchbox input').toggleClass('active')
		})
	}, 
	menuToggle: () => {
		$('.acc-header .toggle-menu').on('click', function(){
			$('.acc-header .bottom-nav').toggleClass('active')
			$(this).toggleClass('active')
			
		})
		// if ( $('.acc-header .bottom-nav.active').length  ) {
		// 	console.log(1);
		// 	$(document).click(function () { 
				
		// 		$('.acc-header .bottom-nav').removeClass('active')
		// 	});
		// }

	},
	headerInit: function(){
		header.searchToggle();
		header.menuToggle();
	}
}