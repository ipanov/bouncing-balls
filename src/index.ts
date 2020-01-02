import "./Global.scss";
import {TYPES} from "./types";
import "reflect-metadata";
import container from "./inversify.config"
import { Canvas } from "./Canvas";
import { Scene } from './objects/Scene';
import { BouncingBallsAnimation } from "./BouncingBallsAnimation";
import { SceneConfig } from "./objects/SceneConfig";
 
// instantiate te scene
let scene = container.get<Scene>(TYPES.Scene);

// instantiate the canvas
let canvas = container.get<Canvas>(TYPES.Canvas);

// instantiate the scene config
let sceneConf = container.get<SceneConfig>(TYPES.SceneConfig);

// instantiate and run animation
let bouncingBalls = container.get<BouncingBallsAnimation>(TYPES.BouncingBallsAnimation);
bouncingBalls.animate();