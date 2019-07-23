export class Head {
  constructor(size, skinTone) {
    this.size = size;
    this.skinTone = skinTone;
  }
  draw(ctx) {
    const headRadius = this.size / 4;

    ctx.fillStyle = this.skinTone;
    ctx.beginPath();
    ctx.arc(headRadius / 2, 0, headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(headRadius / 2, 0, headRadius, 0, Math.PI * 2);
    ctx.stroke();
  }
}
