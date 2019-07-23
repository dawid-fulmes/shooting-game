export class Torso {
  constructor({ position, lookingAngle, size, color }) {
    this.position = position;
    this.lookingAngle = lookingAngle;
    this.size = size;
    this.color = color;
  }

  update({ position, lookingAngle }) {
    this.position = position;
    this.lookingAngle = lookingAngle;
  }

  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "#000";
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.lookingAngle);
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size / 4.5, this.size / 2, 0, -Math.PI / 2, Math.PI / 2);
    ctx.ellipse(0, 0, this.size / 2.5, this.size / 2, 0, Math.PI / 2, -Math.PI / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size / 4.5, this.size / 2, 0, -Math.PI / 2, Math.PI / 2);
    ctx.ellipse(0, 0, this.size / 2.5, this.size / 2, 0, Math.PI / 2, -Math.PI / 2);
    ctx.stroke();
    ctx.restore();
  }
}
