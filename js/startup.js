function startup() {
	var gametable = document.getElementById('GameTable');
	for (var i = 0, row; row = gametable.rows[i]; i++) {
		for (var e = 0, cell; cell = row.cells[e]; e++) {
			cell.onclick = function(){
				if (this.className.indexOf('CellLowlight') > -1) {
					$(this).toggleClass('CellLowlight');
					$(this).toggleClass('CellHighlight');
				} else if (this.className.indexOf('CellHighlight') > -1) {
					$(this).toggleClass('CellHighlight');
				} else {
					$(this).toggleClass('CellLowlight');
				}
			};
		};
	};
};