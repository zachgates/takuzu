Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

$(document).ready(
	function() {
		startGame = function(size) {
			var GameHandler = new Game(size);
		}
		$('.menuButton').click(function() {
			$('#MainMenu').fadeOut();
		})
	}
);