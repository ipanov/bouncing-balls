import { Ball } from "./Ball";
import { Utils } from "../utils";
import { COLORS } from "../Colors";
import { injectable } from "inversify";

interface IScene {
    balls: Ball[];
    createBall(x: number, y: number) : void;
}

@injectable()
class Scene implements IScene {
    public balls: Ball[];

    constructor() {
    };

    createBall(x : number, y: number) {
        var radius = Utils.getRandomIntFromRange(2, 20);
        var vX = Utils.getRandomIntFromRange(-10, 10);
        var vY = Utils.getRandomIntFromRange(-10, 10);
        var color = Utils.getRandomColor(COLORS);
        const bounce = 0.75; // ball losses 25% energy on each bounce from wall or floor
        this.balls.push(new Ball(x, y, vX, vY, radius, color, bounce, null, null));
    };  
};

export { IScene, Scene };

