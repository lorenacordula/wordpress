window.addEvent("load", function() {
	new iCarousel("nots-container", {
		idPrevious :"not-prev",
		idNext :"not-next",
		idToggle :"undefined",
		item : {
			klass :"not-item",
			size :655
		},
		animation : {
			direction :"left",
			duration :300,
			amount :1,
			rotate : {
				type :"auto",
				interval :"10000"
			}
		}
	});
});