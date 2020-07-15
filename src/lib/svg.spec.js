import {genSvg} from './svg'

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
