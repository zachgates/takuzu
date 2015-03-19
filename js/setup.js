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
		
		$('.heading').click(function() {
			location.reload();
		});
		
		$('.heading').hover(function() {
			$(this).css({color: '#45CF4D'});
		}, function() {
			$(this).css({color: '#EEEEEE'});
		});
		
		$('#gameHowToPlay').find('rule').hover(function() {
			$(this).css({color: '#45CF4D'});
		}, function() {
			$(this).css({color: '#EEEEEE'});
		});
	}
);