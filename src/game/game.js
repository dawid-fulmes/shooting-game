class Game {
  constructor(gameWidth, gameHeight) {
    this.width = gameWidth;
    this.height = gameHeight;
    this.fpsRatio = 0;
  }
  update(deltaTime) {
    this.fpsRatio = Math.floor(1000 / deltaTime);
  }
  draw(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
  }
}

export default Game;
