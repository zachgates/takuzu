var Levels = [4, 6, 8, 10];

function GameGrid(scale, game) {
	GameObject.call(this);
	var self = this;
	
	self.game = game;
	
	self.s = scale;
	if (Levels.indexOf(self.s) == -1) {
		self.s = 3;
	}
	
	self.cells = new Object();
	
	generate();
	
	function generate() {
		self.element = document.createElement('table');
		self.element.className = 'Table noselect';
		self.element.id = 'GameTable';
		self.element.remove = function () {
			this.parentElement.removeChild(this);
		}
		self.elementBody = document.createElement('tbody');
		self.element.appendChild(self.elementBody);
		
		for (var row = 0; row < self.s; row++) {
			rowElement = document.createElement('tr');
			rowElement.className = 'Row noselect';
			rowElement.id = 'GameRow' + (row+1).toString();
			for (var cell = 0; cell < self.s; cell++) {
				elemid = 'GameCell' + (row+1).toString() + 'x' + (cell+1).toString();
				cellElement = new Block(row, cell, elemid, self, self.s);
				self.cells[elemid] = cellElement
				rowElement.appendChild(cellElement.element);
			}
			self.elementBody.appendChild(rowElement);
		}
		
		document.body.appendChild(self.element);
	}
	
	var parentDestroy = this.destroy;
	this.destroy = function () {
		parentDestroy();
		self.cells = null;
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