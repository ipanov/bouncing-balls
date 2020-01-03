class Utils {
  static getRandomIntFromRange(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

  static getRandomColor(colors: string[]) : string {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  static getMousePosition(element : HTMLCanvasElement, evt : MouseEvent) : any {
    var rect = element.getBoundingClientRect();
    var actualX = evt.pageX - rect.left;
    var actualY = evt.pageY - rect.top;

    var currentWidth = element.scrollWidth;
    var currentHeight = element.scrollHeight;

    var x = element.width * actualX / currentWidth;
    var y = element.height * actualY / currentHeight;

    return { x, y }
  };
};

export { Utils }