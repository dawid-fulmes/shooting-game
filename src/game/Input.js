import { KEY_UP, KEY_DOWN, KEY_RIGHT, KEY_LEFT } from "./constants/controls";

class Input {
  constructor(game, canvas) {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case KEY_UP:
        case KEY_DOWN:
        case KEY_RIGHT:
        case KEY_LEFT:
          game.player.move(e.keyCode);
          break;
      }
    });
    document.addEventListener("keyup", e => {
      switch (e.keyCode) {
        case KEY_UP:
        case KEY_DOWN:
        case KEY_RIGHT:
        case KEY_LEFT:
          game.player.stop(e.keyCode);
          break;
      }
    });
    canvas.addEventListener("mousemove", e => {
      const { left, top } = canvas.getBoundingClientRect();
      const mousePosition = {
        x: e.clientX - left,
        y: e.clientY - top,
      };
      game.crosshair.update(mousePosition);
    });
  }
}

export default Input;
