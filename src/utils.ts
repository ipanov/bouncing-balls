export function getRandomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

export function getRandomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
};

export function getDistance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
};

export function getMousePos(element, evt) {
  var rect = element.getBoundingClientRect();
  var actualX = evt.pageX - rect.left;
  var actualY = evt.pageY - rect.top;
  
  var currentWidth = element.scrollWidth;
  var currentHeight = element.scrollHeight;

  var x = element.width * actualX / currentWidth;
  var y = element.height * actualY / currentHeight;

  return {x, y}
};
