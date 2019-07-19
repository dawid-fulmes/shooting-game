class Human {
  constructor(position, color) {
    this.position = position;
    this.color = color;
    this.shape = {
      shouldersWidth: 60,
      headDiameter: 30,
    };
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
    //BODY
    const centreX = this.position.x + this.shape.shouldersWidth / 2;
    const centreY = this.position.y + this.shape.headDiameter / 2;
    const radiusX = this.shape.shouldersWidth / 2;
    const radiusY = this.shape.headDiameter / 2;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(centreX, centreY, radiusX, radiusY, 0, 0, Math.PI * 2);
    ctx.fill();
    //HEAD
    ctx.fillStyle = "#FFDBAC";
    ctx.beginPath();
    ctx.arc(centreX, centreY, this.shape.headDiameter / 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default Human;
