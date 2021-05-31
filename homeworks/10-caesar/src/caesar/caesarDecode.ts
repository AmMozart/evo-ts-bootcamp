
export function caesarDecode(str = '', shift: number) {
  const charArr = str.split('')

  const asciiArr = charArr.map(char => char.charCodeAt(0))

  const codeAsciiArray = asciiArr.map(char => {
    let addedShift
    if (char >= 'A'.charCodeAt(0) && char <= 'C'.charCodeAt(0)
      || char >= 'a'.charCodeAt(0) && char <= 'c'.charCodeAt(0)) {
      addedShift = 23
    }
    else if (char >= 'A'.charCodeAt(0) && char <= 'Z'.charCodeAt(0)
      || char >= 'a'.charCodeAt(0) && char <= 'z'.charCodeAt(0)) {
      addedShift = -shift
    }
    else {
      addedShift = 0
    }
    return char + addedShift
  })

  const utfArr = codeAsciiArray.map(code => String.fromCharCode(code))
  return utfArr.join('')
}
