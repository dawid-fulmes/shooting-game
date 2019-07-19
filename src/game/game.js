import Input from "./Input";
import Player from "./Player";

class Game {
  constructor(gameWidth, gameHeight, canvas) {
    this.width = gameWidth;
    this.height = gameHeight;
    this.player = new Player({ x: 20, y: 20 }, "blue");
    new Input(this, canvas);
  }
  update(dt) {
    this.player.update(dt);
  }
  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.player.draw(ctx);
  }
}

export default Game;
