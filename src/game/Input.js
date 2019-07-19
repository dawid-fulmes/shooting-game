import { KEY_UP, KEY_DOWN, KEY_RIGHT, KEY_LEFT } from "./constants/controls";

class Input {
  constructor(game) {
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
  }
}

export default Input;
