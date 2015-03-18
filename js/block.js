function Block(x, y, elemid, parent, gridpath) {
	GameObject.call(this);
	var self = this;
	
	self.x = x;
	self.y = y;
	self.parent = parent;
	self.gridpath = gridpath;
	
	generate();
	
	function generate() {
		self.element = document.createElement('td');
		self.element.className = 'noselect Cell CellState1';
		self.element.id = elemid;
		self.element.onclick = function(){
			if (self.parent.getState() > 0) {
				nextState = self.getState() + 1;
				if (nextState > 3) {
					nextState = 1;
				}
				self.setState(nextState);
				this.className = 'Cell CellState' + nextState.toString();
			}
		};
	}
}

Block.prototype = Object.create(GameObject.prototype);