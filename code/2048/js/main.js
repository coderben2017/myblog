function game2048(container){
	this.container = container;
	this.tiles = new Array(16);
}

game2048.prototype = {
	setTileVal: function(tile, val){
		tile.className = "tile tile" + val;
		tile.setAttribute("val", val);
		tile.innerHTML = val > 0 ? val : null;
	},

	newTile: function(val){
		var tile = document.createElement("div");
		this.setTileVal(tile, val);
		return tile;
	},

	randomTile: function(){
		var zeroTiles = new Array();
		for(var i = 0; i < this.tiles.length; ++i){
			if(this.tiles[i].getAttribute("val") == 0){
				zeroTiles.push(this.tiles[i]);
			}
		}
		var xTile = zeroTiles[ Math.floor(Math.random() * zeroTiles.length) ];
		this.setTileVal(xTile, Math.random() < 0.8 ? 2 : 4);
	},

	init: function(){
		for(var i = 0; i < this.tiles.length; ++i){
			var tile = this.newTile(0);
			this.container.appendChild(tile);
			this.tiles[i] = tile;
		}
		this.randomTile();
		this.randomTile();
	},

	merge: function(preTile, curTile){
		var preVal = preTile.getAttribute("val");
		var curVal = curTile.getAttribute("val");
		if(curVal != 0){
			if(preVal == 0){
				this.setTileVal(preTile, curVal);
				this.setTileVal(curTile, 0);
			}else if(preVal == curVal){
				this.setTileVal(preTile, curVal * 2);
				this.setTileVal(curTile, 0);
			}
		}
	},

	getScore: function(){
		var maxScore = 0;
		for(var i = 0; i < this.tiles.length; ++i){
			if( Number( this.tiles[i].getAttribute("val") ) > maxScore ){
				maxScore = Number( this.tiles[i].getAttribute("val") );
			}
		}
		document.getElementById("score").innerHTML = maxScore;
	},

	move: function(direction){
		var j;
		switch(direction){
			case 38://up
				for(var i = 4; i < this.tiles.length; ++i){
					j = i;
					while(j >= 4){
						this.merge(this.tiles[j-4], this.tiles[j]);
						j -= 4;
					}
				}
				break;
			case 40://down
				for(var i = 11; i >= 0; --i){
					j = i;
					while(j <= 11){
						this.merge(this.tiles[j+4], this.tiles[j]);
						j += 4;
					}
				}
				break;
			case 37://left
				for(var i = 1; i < this.tiles.length; ++i){
					j = i;
					while(j % 4 != 0){
						this.merge(this.tiles[j-1], this.tiles[j]);
						--j;
					}
				}
				break;
			case 39://right
				for(var i = 14; i >= 0; --i){
					j = i;
					while(j % 4 != 3){
						this.merge(this.tiles[j+1], this.tiles[j]);
						++j;
					}
				}
				break;
		}
		this.randomTile();
		this.getScore();
	},

	equal: function(tile1, tile2){
		return tile1.getAttribute("val") == tile2.getAttribute("val");
	},

	victory: function(){
		for(var i = 0; i < this.tiles.length; ++i){
			if(this.tiles[i].getAttribute("val") >= 2048){
				return true;
			}
		}
		return false;
	},

	over: function(){
		for(var i = 0; i < this.tiles.length; ++i){
			if( this.tiles[i].getAttribute("val") == 0 ){
				return false;
			}
			if(i % 4 != 3){
				if( this.equal(this.tiles[i+1], this.tiles[i]) ){
					return false;
				}
			}
			if(i <= 11){
				if( this.equal(this.tiles[i+4], this.tiles[i]) ){
					return false;
				}
			}
		}
		return true;
	},

	clean: function(){
		for(var i = 0; i < this.tiles.length; ++i){
			this.container.removeChild(this.tiles[i]);
		}
		this.tiles = new Array(16);
	}
}

var startBtn, game;

window.onload = function(){
	startBtn = document.getElementById("start");
	startBtn.onclick = function(){
		this.style.display = "none";
		game = new game2048( document.getElementById("div2048") );
		game.init();
	}
}

window.onkeydown = function(e){
	var keyNum;
	if(window.event){		//for IE
		keyNum = e.keyCode;
	}else if(e.which){		//for other
		keyNum = e.which;	
	}
	if([37,38,39,40].indexOf(keyNum) > -1){
		if( game.over() ){
			game.clean();
			startBtn.innerHTML = "Game Over →_→ 555";
			startBtn.style.display = "block";
		}else if( game.victory() ){
			game.clean();
			startBtn.innerHTML = "Game Victory ↖(^ω^)↗ 666";
			startBtn.style.display = "block";
		}else{
			game.move(keyNum);
		}
	}
}
