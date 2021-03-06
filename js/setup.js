function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) {
		return parts.pop().split(";").shift();
	}
	return false;
}

if (!getCookie('score')) {
	document.cookie = 'score=0;';
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return parseInt(result[1], 16).toString() +
		',' + parseInt(result[2], 16).toString() +
		',' + parseInt(result[3], 16).toString();
}

function startGame(size) {
	if (!document.gameStarted) {
		var GameHandler = new Game(size);
		document.gameStarted = true;
		$('#MainMenu').fadeOut();
	}
}

function resetMenu() {
	document.gameStarted = false;
}

$(document).ready(
	function() {
		document.gameStarted = false;
		
		$('#menu').find('td').hover(function() {
			$(this).css({backgroundColor: '#4585F2', color: '#1B1B1B'});
		}, function() {
			$(this).css({backgroundColor: '#1B1B1B', color: '#EEEEEE'});
		});
		
		$('.button').hover(function() {
			$(this).css({backgroundColor: '#4585F2', color: '#1B1B1B'});
		}, function() {
			$(this).css({backgroundColor: '#1B1B1B', color: '#EEEEEE'});
		});
		
		$('.score').text(getCookie('score'));
		
		$('.heading').css({opacity: '0'});
		$('.copyrightMenu').css({opacity: '0'});
		
		$('body').click(function() {
			$('.introClick').remove();
			$('.introHeading').animate({margin: '20px 0px 0px 0px', fontSize: '4em'}, 500);
			setTimeout(function() {
				$('.heading').css({opacity: '1'});
				$('.copyrightMenu').css({opacity: '1'});
				$('.introHeading').parent().fadeOut(500, function() {
					$(this).remove();
				});
			}, 500);
			$(this).unbind('click');
		});
	}
);