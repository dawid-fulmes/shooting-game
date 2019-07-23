export class Head {
  constructor({ position, lookingAngle, size, skinTone }) {
    this.position = position;
    this.lookingAngle = lookingAngle;
    this.size = size;
    this.skinTone = skinTone;
  }

  update({ position, lookingAngle }) {
    this.position = position;
    this.lookingAngle = lookingAngle;
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
