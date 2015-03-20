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
		// get columns
		var columns = new Object();
		for (var i in self.puzzle.grid) {
			columns[i] = new Object();
		}
		for (var i in self.puzzle.grid) {
			for (var e in self.puzzle.grid) {
				columns[e][i] = self.puzzle.grid[i][e];
			}
		}
		// successfully checks columns
		for (var column in columns) {
			if ((self.puzzle.triples(columns[column])) || (self.puzzle.equalTiles(columns[column]))) {
				return true;
			}
		}
		if (self.puzzle.duplicates(columns)) {
			return true;
		}
		return false;
	}
}
