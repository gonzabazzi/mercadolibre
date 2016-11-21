$(document).ready(function() {
	var zoom1 = new ch.Zoom(ch('#zoom-default')[0]);

	var carousel = new ch.Carousel(ch('.more-items-carousel')[0], {
	    pagination: true,
	    limitPerPage: 3
	});
});
