import 'jest-canvas-mock';
import 'reflect-metadata';
import { SceneConfig } from '../src/objects/SceneConfig';
import { Ball } from '../src/objects/Ball';

let mockCanvas;
let mockCtx;
let mockSceneConfig;

beforeEach(() => {
    mockCanvas = document.createElement('canvas');
    mockCanvas.height = 400;
    mockCanvas.width = 400;
    mockCtx = mockCanvas.getContext('2d');
    mockSceneConfig = new SceneConfig();
});

describe('ball', function () {
    it('should update ball position', function () {
        let ball = new Ball(4, 4, 4, 4, 0.5, 'red', 1, mockCanvas, mockCtx, mockSceneConfig);
        let x1 = ball.x
        let y1 = ball.y;
        ball.update();
        expect(ball.x).toBe(x1 + 4);
        expect(ball.y).toBe(y1 + 4 + mockSceneConfig.gravity);
    });

    it('should draw ball position', function () {
        let ball = new Ball(4, 4, 4, 4, 0.5, 'red', 1, mockCanvas, mockCtx, mockSceneConfig);
        ball.draw();
        expect(() => mockCtx.arc(4, 4, 4, 0, Math.PI * 2));
        expect(mockCtx.fillStyle).toBe("#f00");
        expect(() => mockCtx.fill());
    });
});