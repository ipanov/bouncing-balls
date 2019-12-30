export class Ball {
    constructor(x, y, vX, vY, radius, color, sceneConfig) {
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.radius = radius;
        this.color = color;
        this.sceneConfig = sceneConfig;
    }

    update () {
        // bounce from bottom bound / floor
        if (this.y + this.radius + this.vY > this.sceneConfig.height) {
            this.y = this.sceneConfig.height - this.radius
			this.vY = -this.vY;
		} 

        //bounce from left bound
		if (this.x - this.radius <= 0) {
            this.vX = -this.vX;
            this.x = this.radius
		}

        //update position
		this.x += this.vX;
		this.y += this.vY;
        };
        

    draw (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
    };
}

export default Ball;