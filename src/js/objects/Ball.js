export class Ball {
    constructor(x, y, vX, vY, radius, color, bounce, sceneConfig) {
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.radius = radius;
        this.color = color;
        this.bounce = bounce;
        this.sceneConfig = sceneConfig;
    }

    update () {
        // bounce from bottom bound / floor
        if (this.y + this.radius + this.vY > this.sceneConfig.height) {
            this.y = this.sceneConfig.height - this.radius
            this.vY = -(this.vY * this.bounce);
            this.vX = this.vX * this.sceneConfig.friction
        } 
 
        // bounce from left bound
		if (this.x - this.radius <= 0) {
            this.vX = -(this.vX * this.bounce);
            this.x = this.radius
        }
        
        // round up insignificant ball movement to 0 so that the ball stops bouncing in reasonable time
        if (this.vX < 0.01 && this.vX > -0.01) {
            this.vX = 0
          }
        if (this.vY < 0.01 && this.vY > -0.01) {
            this.vY = 0
        }

        // update ball position
        this.vY +=  this.sceneConfig.gravity
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