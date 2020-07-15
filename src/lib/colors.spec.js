import Color from 'color'
import {brightenIfDark, generateColorsFromHash} from './colors'

describe('brightenIfDark', () => {
  it('should not brighten light color', () => {
    const originalColor = new Color('#ffe')
    const newColor = brightenIfDark(originalColor)
    expect(originalColor.string()).toEqual(newColor.string())
  })

  it('should brighten dark color', () => {
    const originalColor = new Color('#121')
    const newColor = brightenIfDark(originalColor)

    const originalLuminosity = originalColor.luminosity()
    const newLuminosity = newColor.luminosity()
    expect(originalLuminosity).toBeLessThan(newLuminosity)
  })
})

describe('generateColorsFromHash', () => {
  it('should generate two distinct colors', () => {
    const [colorA, colorB] = generateColorsFromHash(42)

    expect(colorA).not.toEqual(colorB)

    expect(colorA).not.toBeNull()
    expect(colorA).not.toContain('NaN')
    expect(colorA).toContain('hsl')

    expect(colorB).not.toBeNull()
    expect(colorB).not.toContain('NaN')
    expect(colorB).toContain('hsl')
  })
})
