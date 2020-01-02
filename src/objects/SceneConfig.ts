import { Canvas, ICanvas } from "../Canvas";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";

interface ISceneConfig{
    width: number;
    height: number;
    gravity: number;
    friction: number;
}

@injectable()
class SceneConfig implements ISceneConfig {
    canvas: ICanvas;

    constructor(@inject(TYPES.Canvas) canvas: ICanvas) {
        this.canvas = canvas;
    };
    width = this.canvas.width;
    height =  this.canvas.height;
    gravity =  1;
    friction = 0.85;
}

export { ISceneConfig, SceneConfig }

