import { Torso, Arms, Head } from "./bodyParts";
import Pistol from "../weapons/Pistol/Pistol";

class Human {
  constructor(game, position, color) {
    this.position = position;
    this.lookingAngle = 0;
    this.color = color;
    this.size = 60;
    this.bodyParts = {
      torso: new Torso(this.size, this.color),
      arms: new Arms(this.size, this.color, "#FFDBAC"),
      head: new Head(this.size, "#FFDBAC"),
    };
    this.weapon = new Pistol({ x: this.size / 2 - this.size / 16, y: 0 });
    this.maxSpeed = 200; //pixels per second
    this.speed = {
      x: 0,
      y: 0,
    };
  }
  update(dt) {
    this.position.x += (this.speed.x * dt) / 1000;
    this.position.y += (this.speed.y * dt) / 1000;
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.lookingAngle);
    ctx.save();
    ctx.rotate(Math.PI / 4);
    this.bodyParts.arms.draw(ctx);
    this.weapon.draw(ctx);
    this.bodyParts.torso.draw(ctx);
    this.bodyParts.head.draw(ctx);
    ctx.restore();
    ctx.restore();
  }
}

export default Human;
