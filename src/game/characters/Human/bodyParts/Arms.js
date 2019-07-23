import BodyPart from "./BodyPart";

export class Arms extends BodyPart {
  constructor({ position, lookingAngle, size, color, skinTone }) {
    super({ position, lookingAngle, size, color, skinTone });
  }

  draw(ctx) {
    //Arms
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.lookingAngle);
    ctx.strokeStyle = "#000";
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, Math.PI / 2, -Math.PI / 2, true);
    ctx.arc(0, 0, this.size / 2 - this.size / 7, -Math.PI / 2, Math.PI / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, Math.PI / 2, -Math.PI / 2, true);
    ctx.arc(0, 0, this.size / 2 - this.size / 7, -Math.PI / 2, Math.PI / 2);
    ctx.stroke();
    //Hands
    ctx.fillStyle = this.skinTone;
    ctx.beginPath();
    ctx.arc(this.size / 2 - this.size / 16, 0, this.size / 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.size / 2 - this.size / 16, 0, this.size / 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}
