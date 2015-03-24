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
    adjustForScreen(size);
	dev();
}

function resetMenu() {
	document.gameStarted = false;
}

var gameSize;

function adjustForScreen(size) {
    switch(size) {
        case 4:
            $('.Table').css({
                'width':window.innerWidth + 'px',
                'height':window.innerWidth +'px'
            });
            break;
        case 6:
            break;
        case 8:
            break;
        default:
            break;
    }
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
        
        $('#4x4').click(function() {
            gameSize = 4;
            startGame(4);
            adjustForScreen(4);
        });
        $('#6x6').click(function() {
            gameSize = 6;
            startGame(6);
        });
        $('#8x8').click(function() {
            gameSize = 8;
            startGame(8);
            adjustForScreen(8);
        });
	}
);