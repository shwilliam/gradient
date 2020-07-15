import {genHash, minModulus} from './utils'

describe('minModulus', () => {
  it('should return value between max and min', () => {
    const max = 90
    const min = 10
    const getRandomInt = () =>
      Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    const randomNumbers = Array.from({length: 10}, getRandomInt)

    randomNumbers.forEach(number => {
      const result = minModulus(max, min, number)
      expect(result).toBeGreaterThan(min)
      expect(result).toBeLessThan(max)
    })
  })
})

describe('genHash', () => {
  it('should generate numeric hash', () => {
    const hash = genHash('hello')

    expect(hash).not.toBeNull()
    expect(hash).not.toContain('NaN')
    expect(typeof hash).toEqual('number')
  })
})
