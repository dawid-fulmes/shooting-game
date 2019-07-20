import Input from "./Input";
import Player from "./Player";
import Crosshair from "./Crosshair";

class Game {
  constructor(gameWidth, gameHeight, canvas) {
    this.width = gameWidth;
    this.height = gameHeight;
    this.crosshair = new Crosshair("red", 30);
    this.player = new Player(this, { x: 20, y: 20 }, "blue");
    new Input(this, canvas);
  }
  update(dt) {
    this.player.update(dt);
    this.player.lookAt(this.crosshair);
  }
  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.crosshair.draw(ctx);
    this.player.draw(ctx);
  }
}

export default Game;
