export function capitalize(string: String) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export function capsToCapitalize(string: String) {
  return string.charAt(0) + string.slice(1).toLowerCase()
}

export const formatPrice = (value) => `$${value.slice(0, -2)}`

export function enumKeys<O extends object, K extends keyof O = keyof O>(
  obj: O
): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[]
}

type NameSplit = {
  name?: string
  secondLastName?: string
  lastName?: string
}
export function parseName(fullName: string) {
  const userName = fullName || ''
  const nameSplit: NameSplit = {}
  if (userName.length > 0) {
    var nameTokens =
      userName.match(
        /[A-ZÁ-ÚÑÜ][a-zá-úñü]+|([aeodlsz]+\s+)+[A-ZÁ-ÚÑÜ][a-zá-úñü]+/g
      ) || []

    if (nameTokens.length > 3) {
      nameSplit.name = nameTokens.slice(0, 2).join(' ')
    } else {
      nameSplit.name = nameTokens.slice(0, 1).join(' ')
    }

    if (nameTokens.length > 2) {
      nameSplit.lastName = nameTokens.slice(-2, -1).join(' ')
      nameSplit.secondLastName = nameTokens.slice(-1).join(' ')
    } else {
      nameSplit.lastName = nameTokens.slice(-1).join(' ')
      nameSplit.secondLastName = ''
    }
  }
  return nameSplit
}

export let checkEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const flattenObject = (obj: any) => {
  const flattened: any = {}

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flattened, flattenObject(obj[key]))
    } else {
      flattened[key] = obj[key]
    }
  })

  return flattened
}

export const joinString = (str: string) =>
  (str = str.replace(/\s/g, '-').toLowerCase())

export const uniqBy = (arr: Array<any>, predicate: string) => {
  const cb =
    typeof predicate === 'function'
      ? predicate
      : (o: { [x: string]: any }) => o[predicate]

  return [
    ...arr
      .reduce((map, item) => {
        const key = item === null || item === undefined ? item : cb(item)

        map.has(key) || map.set(key, item)

        return map
      }, new Map())
      .values(),
  ]
}

export const sumNumbers = (array: Array<number>) =>
  array.reduce((partial_sum, a) => partial_sum + a, 0)

export const useConvertISODateStringToReadable = (date: string) => {
  let convertStringToDate = new Date(date)

  return `${convertStringToDate.toLocaleDateString()} ${convertStringToDate.toLocaleTimeString()}`
}
