import Human from "./characters/Human/Human";
import { KEY_UP, KEY_DOWN, KEY_RIGHT, KEY_LEFT } from "./constants/controls";
import { getAngleToObject } from "./utils/getAngleToObject";

class Player extends Human {
  constructor(game, position, color) {
    super(game, position, color);
  }

  move(key) {
    const { maxSpeed } = this;
    const { x: vx, y: vy } = this.speed;
    let complexFactor = 1;
    if (key === KEY_UP || key === KEY_DOWN) {
      const versor = key === KEY_DOWN ? 1 : -1;
      if (vx) {
        complexFactor = 1 / Math.SQRT2;
        const versor = vx > 0 ? 1 : -1;
        this.speed.x = maxSpeed * versor * complexFactor;
      }
      this.speed.y = maxSpeed * versor * complexFactor;
    } else if (key === KEY_LEFT || key === KEY_RIGHT) {
      const versor = key === KEY_RIGHT ? 1 : -1;
      if (vy) {
        complexFactor = 1 / Math.SQRT2;
        const versor = vy > 0 ? 1 : -1;
        this.speed.y = maxSpeed * versor * complexFactor;
      }
      this.speed.x = maxSpeed * versor * complexFactor;
    }
  }

  stop(key) {
    const { x: vx, y: vy } = this.speed;
    const { maxSpeed } = this;
    if ((key === KEY_UP && vy < 0) || (key === KEY_DOWN && vy > 0)) {
      if (vx) {
        const versor = vx > 0 ? 1 : -1;
        this.speed.x = maxSpeed * versor;
      }
      this.speed.y = 0;
    } else if ((key === KEY_LEFT && vx < 0) || (key === KEY_RIGHT && vx > 0)) {
      if (vy) {
        const versor = vy > 0 ? 1 : -1;
        this.speed.y = maxSpeed * versor;
      }
      this.speed.x = 0;
    }
  }
}
export default Player;
