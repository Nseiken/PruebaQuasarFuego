class Position {

    x = 0.0;
	y = 0.0;
    distance = 0.0;
	
	constructor(x, y, distance) {
		this.x = x;
		this.y = y;
        this.distance = distance;
	}
	
	getPosition() {
        return {
            "x" : this.x,
            "y" : this.y,
            "distance" : this.distance
        }
    }
}

module.exports = Position;