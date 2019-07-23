import { Torso, Arms, Head } from "./bodyParts";
import Pistol from "../../weapons/Pistol/Pistol";
import { getAngleToObject } from "../../utils/getAngleToObject";

class Human {
  constructor(game, position, color) {
    this.position = position;
    this.lookingAngle = 0;
    this.color = color;
    this.skinTone = "#FFDBAC";
    this.size = 60;
    this.bodyParts = {
      torso: new Torso(this),
      arms: new Arms(this),
      head: new Head(this),
    };
    this.weapon = new Pistol(this);
    this.maxSpeed = 200; //pixels per second
    this.speed = {
      x: 0,
      y: 0,
    };
  }

  lookAt(target) {
    this.lookingAngle = getAngleToObject(this.position, target.position);
  }

  update(dt) {
    this.position.x += (this.speed.x * dt) / 1000;
    this.position.y += (this.speed.y * dt) / 1000;
    this.bodyParts.arms.update(this);
    this.weapon.update(this);
    this.bodyParts.torso.update(this);
    this.bodyParts.head.update(this);
  }

  draw(ctx) {
    this.bodyParts.arms.draw(ctx);
    this.weapon.draw(ctx);
    this.bodyParts.torso.draw(ctx);
    this.bodyParts.head.draw(ctx);
  }
}

export default Human;
