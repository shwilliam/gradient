import Color from 'color'
import {minModulus} from './utils'

export const brightenIfDark = color =>
  color.isDark() ? color.lighten(0.5) : color

export const generateColorsFromHash = hash => {
  const colorA = brightenIfDark(
    new Color({
      h: minModulus(360, 0, hash * 42),
      s: minModulus(100, 0, hash),
      l: minModulus(100, 60, hash) - 30,
    })
      .saturate(0.8)
      .lighten(0.2),
  )
  const colorB = brightenIfDark(colorA.rotate(180)).saturate(0.8)

  const hslA = colorA.hsl().string()
  const hslB = colorB.hsl().string()

  return [hslA, hslB]
}
