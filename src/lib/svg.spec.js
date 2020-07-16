import {genSvg, parseDimensions} from './svg'

describe('genSvg', () => {
  it('should return svg string', () => {
    const colorA = 'blue'
    const colorB = 'yellow'
    const svgString = genSvg(200, colorA, colorB)

    expect(svgString).toContain('svg')
    expect(svgString).toContain(colorA)
    expect(svgString).toContain(colorB)
    expect(svgString).not.toContain('NaN')
  })
})

describe('parseDimensions', () => {
  it('should return dimensions tuple', () => {
    expect(parseDimensions('200')).toEqual([200, 200])
    expect(parseDimensions('100,20')).toEqual([100, 20])
  })

  it('should fall back to valid dimensions', () => {
    const [width, height] = parseDimensions('100,?')

    ;[width, height].forEach(dimension => {
      expect(dimension).toBeGreaterThan(0)
      expect(typeof dimension).toEqual('number')
    })
  })
})
