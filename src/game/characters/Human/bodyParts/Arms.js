export class Arms {
  constructor(size, color, skinTone) {
    this.size = size;
    this.color = color;
    this.skinTone = skinTone;
  }
  draw(ctx) {
    //Arms
    ctx.strokeStyle = "#000";
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, Math.PI / 2, 0, true);
    ctx.arc(0, 0, this.size / 2 - this.size / 7, 0, Math.PI / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, Math.PI / 2, 0, true);
    ctx.arc(0, 0, this.size / 2 - this.size / 7, 0, Math.PI / 2);
    ctx.stroke();
    //Hands
    ctx.fillStyle = this.skinTone;
    ctx.beginPath();
    ctx.arc(this.size / 2 - this.size / 16, 0, this.size / 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.size / 2 - this.size / 16, 0, this.size / 12, 0, Math.PI * 2);
    ctx.stroke();
  }
}
