import { injectable, inject } from "inversify";
import { TYPES } from "./types";
import { Canvas } from "./Canvas";
import { Scene } from "./objects/Scene";

interface IBouncingBallsAnimation {
    canvas: Canvas;
    scene: Scene;
    animate(): void;
}

@injectable()
class BouncingBallsAnimation implements IBouncingBallsAnimation {
    canvas: Canvas;
    scene: Scene;

    constructor(@inject(TYPES.Canvas) canvas: Canvas, @inject(TYPES.Scene) scene: Scene) {
        this.canvas = canvas;
        this.scene = scene;
    }

    // Animation Loop
    animate() {
        // loop
        requestAnimationFrame(this.animate);
        // clear the canvas
        this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // update balls
        this.scene.balls.forEach(ball => ball.update());
        // draw ball
        this.scene.balls.forEach(ball => ball.draw());
    }
}

export { IBouncingBallsAnimation, BouncingBallsAnimation };