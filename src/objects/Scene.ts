import { Ball } from "./Ball";
import { Utils } from "../utils";
import { COLORS } from "../Colors";
import { injectable, inject } from "inversify";
import { SceneConfig } from "./SceneConfig";
import { TYPES } from "../types";

interface IScene {
    width: number;
    height: number;
    balls: Ball[];
    init(): void;
    clear(): void;
}

@injectable()
class Scene implements IScene {
    public width: number;
    public height: number;
    public balls: Ball[];
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private mousePos: { x: number, y: number };
    private sceneConfig: SceneConfig;

    constructor(@inject(TYPES.SceneConfig) sceneConfig: SceneConfig) {
        this.sceneConfig = sceneConfig;
    }

    init() {
        this.balls = [];
        this.mousePos = { x: 0, y: 0 };
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = innerWidth;
        this.canvas.height = innerHeight;
        this.canvas.addEventListener("click", (event) => {
            this.mousePos = Utils.getMousePos(this.canvas, event)
            this.createBall(this.mousePos.x, this.mousePos.y, this.canvas, this.ctx, this.sceneConfig);
        });
    };

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width , this.canvas.height);
    };

    private createBall(x: number, y: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sceneConfig: SceneConfig): void {
        var radius = Utils.getRandomIntFromRange(2, 20);
        var vX = Utils.getRandomIntFromRange(-10, 10);
        var vY = Utils.getRandomIntFromRange(-10, 10);
        var color = Utils.getRandomColor(COLORS);
        const bounce = 0.75; // ball losses 25% energy on each bounce from wall or floor
        this.balls.push(new Ball(x, y, vX, vY, radius, color, bounce, canvas, ctx, sceneConfig));
    };
};

export { IScene, Scene };

