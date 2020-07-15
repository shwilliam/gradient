export const minModulus = (max, min, value) => (value % (max - min)) + min

// reference: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
export const genHash = str => {
  let hash = 0
  if (str.length == 0) return hash

  str.split('').forEach(char => {
    const charCode = char.charCodeAt(0)
    hash = (hash << 5) - hash + charCode
    hash = hash & hash // 32 bit int
  })

  return hash
}
