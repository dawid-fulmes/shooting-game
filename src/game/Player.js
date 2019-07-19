import Human from "./Human";
import { KEY_UP, KEY_DOWN, KEY_RIGHT, KEY_LEFT } from "./constants/controls";

class Player extends Human {
  constructor(position, color) {
    super(position, color);
  }

  move(key) {
    const { maxSpeed } = this;
    switch (key) {
      case KEY_UP:
        this.speed.y = -maxSpeed;
        break;
      case KEY_DOWN:
        this.speed.y = maxSpeed;
        break;
      case KEY_LEFT:
        this.speed.x = -maxSpeed;
        break;
      case KEY_RIGHT:
        this.speed.x = maxSpeed;
        break;
    }
  }

  stop(key) {
    switch (key) {
      case KEY_UP:
      case KEY_DOWN:
        this.speed.y = 0;
        break;
      case KEY_LEFT:
      case KEY_RIGHT:
        this.speed.x = 0;
        break;
    }
  }
}
export default Player;
