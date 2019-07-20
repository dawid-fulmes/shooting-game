class Crosshair {
  constructor(color, size) {
    this.position = {
      x: 0,
      y: 0,
    };
    this.color = color;
    this.size = size;
  }

  update(position) {
    this.position = position;
  }

  draw(ctx) {
    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.translate(this.position.x, this.position.y);
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
    ctx.moveTo(0, -this.size / 2);
    ctx.lineTo(0, this.size / 2);
    ctx.moveTo(-this.size / 2, 0);
    ctx.lineTo(this.size / 2, 0);
    ctx.stroke();
    ctx.restore();
  }
}

export default Crosshair;
