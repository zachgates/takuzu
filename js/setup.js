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

$(document).ready(
	function() {
		startGame = function(size) {
			var GameHandler = new Game(size);
		}
		
		$('.menuButton').click(function() {
			$('#MainMenu').fadeOut();
		})
		
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
		
		$('.heading').hover(function() {
			$(this).css({color: '#45CF4D'});
		}, function() {
			$(this).css({color: '#EEEEEE'});
		});
		
		$('.score').hover(function() {
			$(this).css({color: '#45CF4D'});
		}, function() {
			$(this).css({color: '#EEEEEE'});
		});
		
		$('.score').text(document.cookie.score);
		
		$('#gameHowToPlay').find('rule').hover(function() {
			$(this).css({color: '#45CF4D'});
		}, function() {
			$(this).css({color: '#EEEEEE'});
		});
	}
);