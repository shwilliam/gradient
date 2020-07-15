export const genSvg = (
  size,
  colorA,
  colorB,
  gradientRotation = 45,
) => `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect fill="url(#gradient)" x="0" y="0" width="${size}" height="${size}"/>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(${gradientRotation})">
      <stop offset="0%" stop-color="${colorA}"/>
      <stop offset="100%" stop-color="${colorB}"/>
    </linearGradient>
  </defs>
</svg>`
