import { Utils } from "./utils";
import { injectable, inject } from "inversify";
import { TYPES } from "./types";
import { Scene } from "./objects/Scene";

interface ICanvas {
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;
    init(): void;
}

@injectable()
class Canvas implements ICanvas {
    canvasElement: HTMLCanvasElement;
    scene: Scene;
    mousePos: { x: number, y: number };
    ctx: CanvasRenderingContext2D;
    width: number;
    height: number;

    constructor(@inject(TYPES.Scene) scene: Scene) {
        this.scene = scene;
        this.mousePos = { x: 0, y: 0 };
    }

    init() {
        this.canvasElement = document.querySelector('canvas');
        this.ctx = this.canvasElement.getContext('2d');
        this.width = innerWidth;
        this.height = innerHeight;

        // Event Listeners
        this.canvasElement.addEventListener("click", (event) => {
            this.mousePos = Utils.getMousePos(this.canvasElement, event)
            this.scene.createBall(this.mousePos.x, this.mousePos.y);
        });
    };
};

export { ICanvas, Canvas };