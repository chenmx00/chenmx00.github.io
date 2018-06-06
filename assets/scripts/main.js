// opens new tab obv
function openNewTab(url) {
	var wind = window.open(url, '_blank');
	wind.focus();
}

// fade in nav bar		
(function($) {          
	$(document).ready(function(){                    
		$(window).scroll(function(){                          
			if ($(this).scrollTop() > 750) {
				$('#menu').fadeIn(500);
			} else {
				$('#menu').fadeOut(500);
			}
		});
	});
})(jQuery);


$("#downarrow").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#downarrow2").click(function() {
    window.location.href = "cinematographer.html"
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#nav-1").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});


$("#nav-2").click(function() {
    $('html,body').animate({
        scrollTop: $("#resume").offset().top},
        'slow');
});


$("#nav-3").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});

$("#nav-4").click(function() {
    $('html,body').animate({
        scrollTop: $("#header").offset().top},
        'slow');
});
