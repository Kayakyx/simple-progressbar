/**
 *
 * @param {number} total
 * @param {string} [completedChar = '|']
 * @param {string} [uncompletedChar = '.']
 * @param {string} [firstChar = '[']
 * @param {string} [lastChar = ']']
 * @return {(function(): void)}
 */
function createProgressBar({total, completedChar = '|', uncompletedChar = '.', firstChar = '[', lastChar = ']'}) {
  let finishedCount = 0
  const maxOutputLength = 100
  return () => {
    if (finishedCount >= total) return
    finishedCount += 1
    // calculate percentage
    // finishedCount / total  =  leftOutputLength / maxOutputLength
    const leftOutputLength = Math.floor(maxOutputLength * finishedCount / total)
    const rightOutputLength = maxOutputLength - leftOutputLength
    const rate = (finishedCount / total * 100).toFixed(2)
    const output = `${firstChar}${''.padEnd(leftOutputLength, completedChar) + ''.padEnd(rightOutputLength, uncompletedChar)}${lastChar} ${rate}% \n`

    process.stdout.write('\033[0f') // clean console
    process.stdout.write(output)
  }
}

module.exports = {
  createProgressBar
}

