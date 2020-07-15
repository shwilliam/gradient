import Color from 'color'
import {minModulus} from './utils'

export const brightenIfDark = color =>
  color.isDark() ? color.lighten(0.5) : color

export const generateColorsFromHash = hash => {
  const colorA = brightenIfDark(
    new Color({
      h: minModulus(360, 20, hash),
      s: minModulus(100, 30, hash),
      l: minModulus(100, 40, hash) - 20,
    })
      .saturate(0.5)
      .lighten(0.3),
  )
  const colorB = brightenIfDark(
    colorA.rotate(minModulus(180, 90, hash) + 90),
  ).saturate(0.5)

  const hslA = colorA.hsl().string()
  const hslB = colorB.hsl().string()

  return [hslA, hslB]
}
