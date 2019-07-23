export class Torso {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size / 4.5, this.size / 2, 0, -Math.PI / 2, Math.PI / 2);
    ctx.ellipse(0, 0, this.size / 2.5, this.size / 2, 0, Math.PI / 2, -Math.PI / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size / 4.5, this.size / 2, 0, -Math.PI / 2, Math.PI / 2);
    ctx.ellipse(0, 0, this.size / 2.5, this.size / 2, 0, Math.PI / 2, -Math.PI / 2);
    ctx.stroke();
  }
}
