import "./Global.scss";
import {TYPES} from "./types";
import "reflect-metadata";
import { Scene } from './objects/Scene';
import { BouncingBallsAnimation } from "./BouncingBallsAnimation";
import { SceneConfig } from "./objects/SceneConfig";
import { container } from "./inversify.config"; 

// instantiate the scene config
container.get<SceneConfig>(TYPES.SceneConfig);

// instantiate and initialize the scene
let scene = container.get<Scene>(TYPES.Scene);
scene.init();

// instantiate and run animation
let bouncingBalls = container.get<BouncingBallsAnimation>(TYPES.BouncingBallsAnimation);
bouncingBalls.animate();
