import Human from "./Human";
import { KEY_UP, KEY_DOWN, KEY_RIGHT, KEY_LEFT } from "./constants/controls";

class Player extends Human {
  constructor(position, color) {
    super(position, color);
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

  lookAt(mousePosition) {
    const playerX = this.position.x + this.shape.shouldersWidth / 2;
    const playerY = this.position.y + this.shape.headDiameter / 2;
    const mouseX = mousePosition.x;
    const mouseY = mousePosition.y;
    const distanceX = mouseX - playerX;
    const distanceY = mouseY - playerY;
    const tan = Math.abs(distanceY) / Math.abs(distanceX);
    let angle = Math.atan(tan);
    if (distanceX < 0) {
      if (distanceY < 0) angle += Math.PI;
      else angle = Math.PI - angle;
    } else {
      if (distanceY < 0) angle = Math.PI * 2 - angle;
    }
    const lookingAngle = angle;
    this.lookingAngle = lookingAngle;
  }
}
export default Player;
