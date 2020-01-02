import { Canvas } from '../Canvas';
import { SceneConfig } from './SceneConfig';
import { inject, injectable } from 'inversify';
import { TYPES } from "../types";

@injectable()
export class Ball {
    x: number;
    y: number;
    vX: number;
    vY: number;
    color: string;
    radius: number;
    bounce: number;

    private canvas: Canvas;
    private sceneConfig: SceneConfig;

    constructor(x, y, vX, vY, radius, color, bounce,
        @inject(TYPES.Canvas) canvas: Canvas,
        @inject(TYPES.SceneConfig) sceneConfig: SceneConfig
    ) {
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        this.radius = radius;
        this.color = color;
        this.bounce = bounce;
        this.canvas = canvas;
        this.sceneConfig = sceneConfig;
    }

    update() {
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
        this.vY += this.sceneConfig.gravity
        this.x += this.vX;
        this.y += this.vY;
    };


    draw() {
        this.canvas.ctx.beginPath();
        this.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.canvas.ctx.fillStyle = this.color;
        this.canvas.ctx.fill();
        this.canvas.ctx.closePath();
    };
}
