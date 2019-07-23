class Human {
  constructor(game, position, color) {
    this.position = position;
    this.lookingAngle = 0;
    this.color = color;
    this.size = 60;
    this.maxSpeed = 200; //pixels per second
    this.speed = {
      x: 0,
      y: 0,
    };
  }
  update(dt) {
    this.position.x += (this.speed.x * dt) / 1000;
    this.position.y += (this.speed.y * dt) / 1000;
  }
  draw(ctx) {
    const headRadius = this.size / 4;
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.lookingAngle);
    ctx.strokeStyle = "#000";
    ctx.save();
    ctx.rotate(Math.PI / 4);
    //ARMS
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, Math.PI / 2, 0, true);
    ctx.arc(0, 0, this.size / 2 - this.size / 7, 0, Math.PI / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 2, Math.PI / 2, 0, true);
    ctx.arc(0, 0, this.size / 2 - this.size / 7, 0, Math.PI / 2);
    ctx.stroke();
    //HANDS
    ctx.fillStyle = "#FFDBAC";
    ctx.beginPath();
    ctx.arc(this.size / 2 - this.size / 16, 0, headRadius / 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.size / 2 - this.size / 16, 0, headRadius / 3, 0, Math.PI * 2);
    ctx.stroke();
    //WEAPON
    //...
    //BODY
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size / 4.5, this.size / 2, 0, -Math.PI / 2, Math.PI / 2);
    ctx.ellipse(0, 0, this.size / 2.5, this.size / 2, 0, Math.PI / 2, -Math.PI / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size / 4.5, this.size / 2, 0, -Math.PI / 2, Math.PI / 2);
    ctx.ellipse(0, 0, this.size / 2.5, this.size / 2, 0, Math.PI / 2, -Math.PI / 2);
    ctx.stroke();
    //HEAD
    ctx.fillStyle = "#FFDBAC";
    ctx.beginPath();
    ctx.arc(headRadius / 2, 0, headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(headRadius / 2, 0, headRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    ctx.restore();
  }
}

export default Human;
