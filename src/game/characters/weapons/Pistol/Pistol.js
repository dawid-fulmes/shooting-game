class Pistol {
  constructor(position) {
    this.position = position;
    this.size = 25;
  }
  draw(ctx) {
    ctx.save();
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#444";
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(-Math.PI / 4);
    ctx.beginPath();
    ctx.rect(0, -this.size / 14, this.size, this.size / 7);
    ctx.fill();
    ctx.beginPath();
    ctx.rect(0, -this.size / 14, this.size, this.size / 7);
    ctx.stroke();
    ctx.restore();
  }
}
export default Pistol;
