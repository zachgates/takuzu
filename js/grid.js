var Levels = [4, 6, 8, 10];

function GameGrid(scale, game) {
	GameObject.call(this);
	var self = this;

	self.game = game;

	self.s = scale;
	if (Levels.indexOf(self.s) == -1) {
		self.s = 3;
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

		for (var row = 0; row < self.s; row++) {
			rowElement = document.createElement('tr');
			rowElement.className = 'Row';
			rowElement.id = 'GameRow' + (row+1).toString();
			classRow = new Object();
			for (var cell = 0; cell < self.s; cell++) {
				elemid = 'GameCell' + (row+1).toString() + 'x' + (cell+1).toString();
				cellElement = new Block(row, cell, elemid, self, self.s);
				classRow[cell] = cellElement
				rowElement.appendChild(cellElement.element);
			}
			self.grid[row] = classRow;
			self.elementBody.appendChild(rowElement);
		}

		$('#GameContainer')[0].appendChild(self.element);
	}

	this.adjacentDuplicates = function(array) {
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

	var parentDestroy = this.destroy;
	this.destroy = function () {
		parentDestroy();
		self.grid = null;
		self.s = null;
		self.element.remove();
		self.element = null;
		self = null;
	}

	var gameUpdate = self.game.update;
	this.update = function() {
		gameUpdate(self);
	}

}

GameGrid.prototype = Object.create(GameObject.prototype);
