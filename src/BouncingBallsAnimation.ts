import { injectable, inject } from "inversify";
import { TYPES } from "./types";
import { Scene } from "./objects/Scene";

interface IBouncingBallsAnimation {
    animate(): void;
}

@injectable()
class BouncingBallsAnimation implements IBouncingBallsAnimation {
    private scene: Scene;

    constructor(@inject(TYPES.Scene) scene: Scene) {
        this.scene = scene;
    }

    // Animation Loop
    animate() {
        // loop
        requestAnimationFrame(() => this.animate());
        // clear the scene
        this.scene.clear();
        // update balls
        this.scene.balls.forEach(ball => ball.update());
        // draw balls
        this.scene.balls.forEach(ball => ball.draw());
    }
}

export { IBouncingBallsAnimation, BouncingBallsAnimation };