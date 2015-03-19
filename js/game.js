function Game(scale) {
	var self = this;
	
	generate();

	function generate() {
		self.puzzle = new GameGrid(scale, this);
		buttonSetup();
	}
	
	function buttonSetup() {
		restartButton = document.getElementById('restartBtn');
		restartButton.onclick = function() {
			self.puzzle.element.remove();
			generate();
		}
		mainMenuButton = document.getElementById('mainMenuBtn');
		mainMenuButton.onclick = function() {
			setTimeout(function() {
				self.puzzle.element.remove();
				self.puzzle = null;
			}, 1000);
			exit();
		}
	}

	function solve() {
		// fade in solution
	}

	function exit() {
		$('#MainMenu').fadeIn();
	}

	self.endGame = function() {
		// fade out
		// exit
	}

	self.surrender = function()  {
		solve();
		// pause
		// user selects input
	}

	self.update = function(puzzle) {
		self.puzzle = puzzle;
		for (var cell in self.puzzle.cells) {
			// check for discrepancies
		}
	}
}
