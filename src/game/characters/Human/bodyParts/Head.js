import BodyPart from "./BodyPart";

export class Head extends BodyPart {
  constructor({ position, lookingAngle, size, color, skinTone }) {
    super({ position, lookingAngle, size, color, skinTone });
  }

  draw(ctx) {
    const headRadius = this.size / 4;
    ctx.save();
    ctx.fillStyle = this.skinTone;
    ctx.strokeStyle = "#000";
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.lookingAngle);
    ctx.beginPath();
    ctx.arc(headRadius / 3, 0, headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(headRadius / 3, 0, headRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}
