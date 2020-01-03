import { injectable } from "inversify";

interface ISceneConfig{
    gravity: number;
    friction: number;
}

@injectable()
class SceneConfig implements ISceneConfig {
    gravity: number;
    friction: number;

    // TODO: read from app.config
    public constructor () {
        this.gravity =  1;
        this.friction = 0.85;
    }
}

export { ISceneConfig, SceneConfig }

