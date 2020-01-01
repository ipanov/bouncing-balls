import { getMousePos, getRandomIntFromRange, getRandomColor } from './utils'
import styles from '../global'
import { Ball } from './objects/Ball';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// scene configuration
var mouse = {
	x: 0,
	y: 0 
};

const colors = [
	'red',
	'blue',
	'green',
  'yellow',
  'purple',
  'cian',
  'magenta'
];

const sceneConfig = {
  width: canvas.width,
  height: canvas.height,
  gravity: 1, // default gravity of 1
  friction: 0.85 // balls dissipate 15% of their energy on contact with floor due to friction
}

// Event Listeners
canvas.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

canvas.addEventListener("click", function(event) {
    mouse = getMousePos(canvas, event)
    createBall(mouse.x, mouse.y);
});


// Implementation
var balls = [];

function createBall(x, y) {
  var radius = getRandomIntFromRange(2, 20);
	var vX = getRandomIntFromRange(-10, 10);
  var vY = getRandomIntFromRange(-10, 10);
  var color = getRandomColor(colors);
  const bounce = 0.75; // ball losses 25% energy on each bounce from wall or floor
  balls.push(new Ball(x, y, vX, vY, radius, color, bounce, sceneConfig));
}

// Animation Loop
function animate() {
  // loop
  requestAnimationFrame(animate);
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // update balls
  balls.forEach(ball => ball.update());
  // draw ball
  balls.forEach(ball => ball.draw(ctx));
}

animate();