import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import { SceneConfig, ISceneConfig } from "./objects/SceneConfig";
import { Scene, IScene } from "./objects/Scene";
import { IBouncingBallsAnimation, BouncingBallsAnimation } from "./BouncingBallsAnimation";


let container = new Container();

container.bind<ISceneConfig>(TYPES.SceneConfig).to(SceneConfig).inSingletonScope();
container.bind<IScene>(TYPES.Scene).to(Scene).inSingletonScope();
container.bind<IBouncingBallsAnimation>(TYPES.BouncingBallsAnimation).to(BouncingBallsAnimation).inSingletonScope();

export { container }