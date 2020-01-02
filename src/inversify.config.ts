import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import { Canvas, ICanvas } from "./Canvas"
import { SceneConfig, ISceneConfig } from "./objects/SceneConfig";
import { Scene, IScene } from "./objects/Scene";
import { IBouncingBallsAnimation, BouncingBallsAnimation } from "./BouncingBallsAnimation";


let container = new Container();

container.bind<ICanvas>(TYPES.Canvas).to(Canvas);
container.bind<ISceneConfig>(TYPES.SceneConfig).to(SceneConfig);
container.bind<IScene>(TYPES.Scene).to(Scene);
container.bind<IBouncingBallsAnimation>(TYPES.BouncingBallsAnimation).to(BouncingBallsAnimation);

export default container;