class BodyPart {
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
}
export default BodyPart;
