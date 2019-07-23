export class Arms {
  constructor({ position, lookingAngle, size, color, skinTone }) {
    this.position = position;
    this.lookingAngle = lookingAngle;
    this.size = size;
    this.color = color;
    this.skinTone = skinTone;
  }

  update({ position, lookingAngle }) {
    this.position = position;
    this.lookingAngle = lookingAngle;
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
