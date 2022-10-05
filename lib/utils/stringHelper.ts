export const nameToUrlFriendly = (name: string) => name.toLowerCase().split(' ').join('-')

export const toTitleCase = (str: string) => {
  const splittedStr = str.split('')
  splittedStr.splice(0, 1, str[0].toUpperCase())

  return splittedStr.join('')
}
