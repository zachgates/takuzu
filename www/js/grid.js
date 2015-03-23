var Levels = [4, 6, 8]; //, 10];

function GameGrid(scale, game, starter) {
	GameObject.call(this);
	var self = this;
	self.setState(1);

	self.game = game;
	self.starter = starter;

	self.scale = scale;
	if (Levels.indexOf(self.scale) == -1) {
		self.scale = 3;
	}

	self.grid = new Object();

	generate();

	function generate() {
		self.element = document.createElement('table');
		self.element.className = 'Table';
		self.element.id = 'GameTable';
		self.element.remove = function () {
			this.parentElement.removeChild(this);
		}
		self.elementBody = document.createElement('tbody');
		self.element.appendChild(self.elementBody);

		for (var row = 0; row < self.scale; row++) {
			rowElement = document.createElement('tr');
			rowElement.className = 'Row';
			rowElement.id = 'GameRow' + (row+1).toString();
			classRow = new Object();
			for (var cell = 0; cell < self.scale; cell++) {
				elemid = 'GameCell' + (row+1).toString() + 'x' + (cell+1).toString();
				cellElement = new Block(row, cell, elemid, self, self.scale, self.starter);
				cellElement.setState(starter[row][cell]);
				classRow[cell] = cellElement
				rowElement.appendChild(cellElement.element);
			}
			self.grid[row] = classRow;
			self.elementBody.appendChild(rowElement);
		}

		$('#GameContainer')[0].appendChild(self.element);
	}
	
	self.setDirect = function(x, y, state) {
		self.grid[x][y].setState(state);
	}
	
	self.duplicates = function(fullGrid) {
		states = new Array();
		for (var array in fullGrid) {
			arrayStates = '';
			for (var cell in fullGrid[array]) {
				arrayStates += fullGrid[array][cell].getState().toString();
			}
			states.push(arrayStates);
		}
		uniqueStates = [];
		$.each(states, function(i, cell){ if($.inArray(cell, uniqueStates) == -1) uniqueStates.push(cell); });
		return (states.length != uniqueStates.length);
	}
	
	self.equalTiles = function(array) {
		states = new Array();
		for (var cell in array) {
			states.push(array[cell].getState());
		}
		tileCount = states.filter(function(i) { return i == 2; }).length;
		if (tileCount > (self.scale / 2)) {
			return true;
		}
		tileCount = states.filter(function(i) { return i == 3; }).length;
		if (tileCount > (self.scale / 2)) {
			return true;
		}
		return false;
	}

	self.triples = function(array) {
		var i = 0;
		while (i < Object.size(array)-2) {
			value = array[i].getState();
			nvalue = array[i+1].getState();
			nnvalue = array[i+2].getState();
			if ((value == nvalue) && (nvalue == nnvalue)) {
				if (value != 1)	{
					return true;
				}
			}
			i++;
		}
		return false;
	}
	
	self.isFull = function() {
		for (var row in self.grid) {
			for (var cell in self.grid[row]) {
				if (self.grid[row][cell].getState() == 1) {
					return false;
				}
			}
		}
		return true;
	}

	var parentDestroy = self.destroy;
	self.destroy = function () {
		parentDestroy();
		self.grid = null;
		self.scale = null;
		self.element.remove();
		self.element = null;
		self = null;
	}

	var gameUpdate = self.game.update;
	self.update = function(x, y, oldState, newState) {
		gameUpdate(x, y, oldState, newState);
	}

}

GameGrid.prototype = Object.create(GameObject.prototype);
