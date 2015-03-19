function Game(scale, dev) {
	var self = this;

	generate();

	function generate() {
		self.starter = new Object();
		if (scale == 4) {
			self.puzzle = new GameGrid(scale, this, defaultFour[Math.floor(Math.random() * defaultFour.length)]);
			for (var rn in self.puzzle.grid) {
				row = new Object();
				for (var cell in self.puzzle.grid[rn]) {
					row[cell] = self.puzzle.grid[rn][cell].getState();
				}
				self.starter[rn] = row;
			}
		}
		else {
			emptyGrid = Array.apply(null, Array(scale)).map(function (_, i) {return i;});
			for (var row in emptyGrid) {
				gridRow = new Object();
				for (var cell in emptyGrid) {
					gridRow[cell] = 1;
				}
				self.starter[row] = gridRow;
			}
			self.puzzle = new GameGrid(scale, this, self.starter);
		}
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
		generate();
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
