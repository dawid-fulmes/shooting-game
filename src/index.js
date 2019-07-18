import "./index.scss";
import Game from "./game/game";

const GAME_HEIGHT = 500;
const GAME_WIDTH = 1000;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = GAME_WIDTH;
ctx.canvas.height = GAME_HEIGHT;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

const gameLoop = timestamp => {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
