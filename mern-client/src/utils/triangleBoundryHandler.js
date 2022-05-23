export default function triangleBoundaryHandler(event, tHeight, tWidth, cWidth) {
  const thirtyDeg = 0.5236;
  const sixtyDeg = 1.0472;
  const oneHundredTwentyDeg = 2.0944;

  const equilateralHeight = 0.87 * tHeight;
  const radius = cWidth / 2;

  const triangleHeight = equilateralHeight - 2 * radius;
  const maxWidth = tWidth;

  const firstTriangleHypo =
    (radius * Math.sin(oneHundredTwentyDeg)) / Math.sin(thirtyDeg);
  const lastTriangleheight =
    ((firstTriangleHypo / 2) * Math.sin(sixtyDeg)) / Math.sin(thirtyDeg);

  const maxHeight = lastTriangleheight + Math.sin(thirtyDeg) * radius;
  const height = Math.max(
    Math.min(event.y, triangleHeight + radius),
    radius,
    maxHeight
  );
  const heightPercentage = height / equilateralHeight;
  const widthLimit = (heightPercentage * maxWidth) / 2;
  const widthAdjustment = radius - Math.cos(thirtyDeg) * radius;

  let positiveMax = widthLimit + maxWidth / 2 - radius - widthAdjustment;
  positiveMax = positiveMax < maxWidth / 2 ? maxWidth / 2 : positiveMax;
  let positiveMin = maxWidth / 2 - widthLimit + radius + widthAdjustment;
  positiveMin = positiveMin > maxWidth / 2 ? maxWidth / 2 : positiveMin;
  const width = Math.max(Math.min(event.x, positiveMax), positiveMin);

  return { x: width, y: height };
}
