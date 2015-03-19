function Game(scale) {
	var self = this;

	generate();

	function generate() {
		self.puzzle = new GameGrid(scale, this);
		buttonSetup();
	}

	function buttonSetup() {
		restartButton = document.getElementById('restart')
		restartButton.onclick = function() {
			self.puzzle.element.remove();
			generate();
			self.puzzle.element.style.display = "table";
		}
	}

	function solve() {
		// fade in solution
	}

	function exit() {
		// fade back to menu
	}

	self.endGame = function() {
		// fade out
		// exit
		exit();
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
