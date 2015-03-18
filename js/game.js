function Game(scale) {
	var self = this;
	
	generate();
	
	function generate() {
		self.puzzle = new GameGrid(scale, this);
	}
	
	function solve() {
		// fade in solution
	}
	
	function exit() {
		// fade back to menu
	}
	
	this.endGame = function() {
		// fade out
		// exit
	}
	
	this.surrender = function()  {
		solve();
		// pause
		// user selects input
	}
	
	this.update = function(puzzle) {
		self.puzzle = puzzle;
		for (var cell in self.puzzle.cells) {
			// check for discrepancies
		}
	}
}