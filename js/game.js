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
		self.puzzle = new GameGrid(scale, this, self.starter);
	}

	function solve() {
		// fade in solution
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
