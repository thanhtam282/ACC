const header = {

	searchToggle: () => {
		$('.acc-header .searchbox button').on('click', function(){
			$('.acc-header .searchbox input').toggleClass('active')
		})
	}, 
	menuToggle: () => {
		$('.acc-header .toggle-menu').on('click', function(){
			$('.acc-header .bottom-nav').toggleClass('active')
		})
	},
	headerInit: function(){
		header.searchToggle();
		header.menuToggle();
	}
}