import Human from "./Human";

class Game {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;
    this.fpsRatio = 0;
    this.hero = new Human({ x: 20, y: 20 }, "blue");
  }
  update(deltaTime) {
    this.fpsRatio = Math.floor(1000 / deltaTime);
  }
  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.hero.draw(ctx);
  }
}

export default Game;
