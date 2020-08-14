export const genSvg = (
  size,
  colorA,
  colorB,
  offset = 45,
  type = 'linear',
  text = '',
) => `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="${size[0]}" height="${size[1]}" viewBox="0 0 ${size[0]} ${
  size[1]
}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect fill="url(#${
    type === 'radial' ? 'radial-' : ''
  }gradient)" x="0" y="0" width="${size[0]}" height="${size[1]}"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-family="sans-serif" font-size="${
    Math.min(...size) * 0.4
  }">${text}</text>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(${offset})">
      <stop offset="0%" stop-color="${colorA}"/>
      <stop offset="100%" stop-color="${colorB}"/>
    </linearGradient>
    <radialGradient id="radial-gradient">
      <stop offset="0%" stop-color="${colorA}" />
      <stop offset="${offset}%" stop-color="${colorB}" />
    </radialGradient>
  </defs>
</svg>`

export const parseDimensions = (sizeStr, defaultSize = 200) => {
  const delimiterIdx = sizeStr?.indexOf(',')

  if (!delimiterIdx || delimiterIdx === -1) {
    const sizeNumber = Number(sizeStr)

    return isNaN(sizeNumber)
      ? [defaultSize, defaultSize]
      : [sizeNumber, sizeNumber]
  }

  const [width, height] = sizeStr.split(',')
  const widthNumber = Number(width)
  const heightNumber = Number(height)

  if (isNaN(widthNumber) || isNaN(heightNumber))
    return [defaultSize, defaultSize]

  return [widthNumber, heightNumber]
}
