class Pistol {
  constructor({ position, lookingAngle, size }) {
    this.position = position;
    this.lookingAngle = lookingAngle;
    this.size = 30;
    this.ownerSize = size;
  }

  update({ position, lookingAngle }) {
    this.position = position;
    this.lookingAngle = lookingAngle;
  }

  draw(ctx) {
    ctx.save();
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#444";
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.lookingAngle);
    ctx.translate(this.ownerSize / 2 - this.ownerSize / 16, 0);
    ctx.beginPath();
    ctx.rect(0, -this.size / 10, this.size, this.size / 5);
    ctx.fill();
    ctx.beginPath();
    ctx.rect(0, -this.size / 10, this.size, this.size / 5);
    ctx.stroke();
    ctx.restore();
  }
}
export default Pistol;
