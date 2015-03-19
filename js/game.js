function Game(scale, dev) {
	var self = this;
	
	generate();

	function generate() {
		if (scale == 4) {
			self.starter = defaultFour[Math.floor(Math.random() * defaultFour.length)];
		}
		else {
			self.starter = new Object();
			emptyGrid = Array.apply(null, Array(scale)).map(function (_, i) {return i;});
			for (var row in emptyGrid) {
				gridRow = new Object();
				for (var cell in emptyGrid) {
					gridRow[cell] = 1;
				}
				self.starter[row] = gridRow;
			}
		}
		self.puzzle = new GameGrid(scale, self, self.starter);
		buttonSetup();
	}
	
	function buttonSetup() {
		restartButton = document.getElementById('restartBtn');
		restartButton.onclick = function() {
			restart();
		}
		mainMenuButton = document.getElementById('mainMenuBtn');
		mainMenuButton.onclick = function() {
			endGame();
		}
	}
	
	function restart() {
		self.puzzle.destroy();
		self.puzzle = new GameGrid(scale, this, self.starter);
	}

	function solve() {
		// todo: fade in solution
	}

	function exit() {
		$('#MainMenu').fadeIn();
	}

	function endGame() {
		setTimeout(function() {
			self.puzzle.destroy();
			self.puzzle = null;
		}, 1000);
		exit();
	}

	self.surrender = function()  {
		solve();
	}

	self.update = function() {
		// successfully checks rows
		for (var row in self.puzzle.grid) {
			if ((self.puzzle.triples(self.puzzle.grid[row])) || (self.puzzle.equalTiles(self.puzzle.grid[row]))) {
				return true;
			}
		}
		if (self.puzzle.duplicates(self.puzzle.grid)) {
			return true;
		}
		return false;
		// todo: figure out how to check columns
	}
}
