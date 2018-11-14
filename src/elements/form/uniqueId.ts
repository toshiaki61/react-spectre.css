const current: {[key: string]: number} = {}
const uniqueId = (prefix: string = ''): string => {
  if (!current[prefix]) {
    current[prefix] = 0
  }

  return `${prefix}-${(current[prefix] += 1)}`
}

export default uniqueId
