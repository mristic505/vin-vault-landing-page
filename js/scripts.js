function openNav() {
    // document.getElementById("mySidenav").style.width = "222px";
    $('#mySidenav').css('margin-right',0);
}
function closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    $('#mySidenav').css('margin-right','-'+'222'+'px');
}
var vid = document.getElementById("video");
function enableAutoplay() { 
    vid.autoplay = true;
    vid.load();
}

jQuery(document).ready(function($){


	jQuery.fn.verticalAlign = function () {
	    return this
	            .css("margin-top",($(this).parent().height() - $(this).outerHeight())/2 + 'px' );
	};


	$('#slider').slick({
		dots: true,
	  	infinite: true,
	  	speed: 500,
	  	fade: false,
	  	'arrows': false,
	  	cssEase: 'linear',
	  	autoplay: true,
  		autoplaySpeed: 4000,
	});

	$('.play_video').click(function(){
		
	});

	

	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	$('#menu a').click(function(){
		$(this).addClass('active');
		$('#menu a').not(this).removeClass('active');
	});

	$('#video').click(function(){
		$('#playpausebtn').trigger("click");
	});

		
});
$(window).on('load resize', function () {
	if($(window).width() < 769 ) {
		$('#menu a').click(function(){
			closeNav();
		});
	}
	else {
		$('#mySidenav').css('margin-right',0);
	}

	if($(window).width() > 1300 ) {
		var inner_width = $('.inner').width();
		var our_winemaker_right_width = $('#our_winemaker .desno').outerWidth();
		var our_winemaker_left_width = $('#our_winemaker .levo').outerWidth();
		var our_winemaker_left_width = our_winemaker_right_width - $('#our_winemaker .desno img').width() + our_winemaker_left_width;
		var left_margin = (our_winemaker_left_width - $('#our_winemaker .holder').outerWidth())/4;
		$('#our_winemaker .holder').css('left',left_margin);

		var our_craft_right_width = $('#our_craft .desno').outerWidth();
		var our_craft_left_width = $('#our_craft .levo').outerWidth();
		var our_craft_left_width = our_craft_right_width - $('#our_craft .desno img').width() + our_craft_left_width;
		var left_margin = (our_craft_left_width - $('#our_craft .holder').outerWidth())/4;
		$('#our_craft .holder').css('left',left_margin);

		var about_left_width = $('#about .levo').outerWidth();
		var about_right_width = $('#about .desno').outerWidth();
		var about_right_width = about_left_width - $('#about .levo img').width() + about_right_width;
		var right_margin = (about_right_width - $('#about .holder').outerWidth())/4;
		$('#about .holder').css('right',right_margin);
	}
	if($(window).width() > 768 ) {
		$('#about .desno').verticalAlign();
		$('#our_winemaker .levo').verticalAlign();
		$('#our_craft .levo').verticalAlign();
	}
});

var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;
function intializePlayer(){
	// Set object references
	vid = document.getElementById("video");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	mutebtn = document.getElementById("mutebtn");
	volumeslider = document.getElementById("volumeslider");
	fullscreenbtn = document.getElementById("fullscreenbtn");
	// Add event listeners
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
	mutebtn.addEventListener("click",vidmute,false);
	volumeslider.addEventListener("change",setvolume,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
}
window.onload = intializePlayer;
function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.style.background = "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDE4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03LjAxMSwxNi4yODVjMCwwLjY3Mi0wLjYxMiwxLjIxNS0xLjM2NiwxLjIxNUg0LjIyM2MtMC43NTQsMC0xLjM2NS0wLjU0My0xLjM2NS0xLjIxNVYxLjcxNA0KCQljMC0wLjY3LDAuNjExLTEuMjE0LDEuMzY1LTEuMjE0aDEuNDIyYzAuNzU0LDAsMS4zNjYsMC41NDQsMS4zNjYsMS4yMTRWMTYuMjg1eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNS4xNDIsMTYuMjg1YzAsMC42NzItMC41ODYsMS4yMTUtMS4zMDgsMS4yMTVoLTEuMzYzYy0wLjcyMywwLTEuMzA4LTAuNTQzLTEuMzA4LTEuMjE1VjEuNzE0DQoJCWMwLTAuNjcsMC41ODUtMS4yMTQsMS4zMDgtMS4yMTRoMS4zNjNjMC43MjIsMCwxLjMwOCwwLjU0NCwxLjMwOCwxLjIxNFYxNi4yODV6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==)";
		playbtn.style.backgroundSize="100% 100%";
	} else {
		vid.pause();
		playbtn.style.background = "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSI5MSA5MSAxOCAxOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyA5MSA5MSAxOCAxOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBvcGFjaXR5PSIwLjk1IiBmaWxsPSIjRkZGRkZGIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3ICAgICIgZD0iTTkzLjI1OCw5MS4yMzlsMTQuNjkyLDcuNjgxYzEuMTQxLDAuNTk2LDEuMTQxLDEuNTYzLDAsMi4xNTkNCgkJbC0xNC42OTIsNy42ODNjLTEuMTQsMC41OTctMi4wNjQsMC4wMzctMi4wNjQtMS4yNDhWOTIuNDg3QzkxLjE5NCw5MS4yMDIsOTIuMTE4LDkwLjY0Myw5My4yNTgsOTEuMjM5eiIvPg0KPC9nPg0KPC9zdmc+DQo=)";
		playbtn.style.backgroundSize="100% 100%";
	}
}
function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}
function seektimeupdate(){
	var nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}
function vidmute(){
	if(vid.muted){
		vid.muted = false;
		mutebtn.innerHTML = '<span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span>';
	} else {
		vid.muted = true;
		mutebtn.innerHTML = '<span class="glyphicon glyphicon-volume-off" aria-hidden="true"></span>';
	}
}
function setvolume(){
	vid.volume = volumeslider.value / 100;
}
function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}