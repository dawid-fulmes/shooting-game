export const getAngleToObject = (observerPosition, targetPosition) => {
  const { x: observerX, y: observerY } = observerPosition;
  const { x: targetX, y: targetY } = targetPosition;
  const distanceX = targetX - observerX;
  const distanceY = targetY - observerY;
  const tan = Math.abs(distanceY) / Math.abs(distanceX);
  let angle = Math.atan(tan);
  if (distanceX < 0) {
    if (distanceY < 0) angle += Math.PI;
    else angle = Math.PI - angle;
  } else {
    if (distanceY < 0) angle = Math.PI * 2 - angle;
  }
  return angle;
};
