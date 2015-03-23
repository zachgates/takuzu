function GameObject() {
	var self = this;
	
	self.id = 0;
	self.currentState = 0;
	self.neverDisable = false;
	self.disabled = true;
	
	generate();
	
	function generateId() {
		id = Math.floor(Math.random() * 10000000).toString();
		if (id.length < 7) {
			id = id + '0';
		}
		return parseInt(id);
	}
	
	function generate() {
		self.id = generateId();
		self.currentState = 1;
		self.disabled = false;
	}
	
	self.enable = function() {
		self.currentState = 1;
		self.disabled = false;
	}
	
	self.disable = function() {
		if (self.neverDisable == false) {
			self.currentState = 0;
			self.disabled = true;
			console.log('disabled');
		}
	}
	
	self.destroy = function() {
		self.id = null;
		self.currentState = null;
		self.neverDisable = null;
		self.disabled = null;
	}
	
	self.getObjectId = function() {
		return self.id;
	}
	
	self.isGenerated = function() {
		return self.id != 0;
	}
	
	self.getNeverDisable = function() {
		return self.neverDisable;
	}
	
	self.setNeverDisable = function(bool) {
		self.neverDisable = bool == 1;
	}
	
	self.getState = function() {
		return self.currentState;
	}
	
	self.setState = function(state) {
		if (state == 0) { return; };
		self.currentState = state;
	}
}