const {createProgressBar} = require('../')

const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))

!(async () => {
  const total = 66
  // const total = 200
  const progress = createProgressBar({
    total,
    firstChar: '<',
    lastChar: '>',
    completedChar: '#',
    uncompletedChar: '-'
  })
  for (let i = 0; i < total; i++) {
    await sleep(Math.random() * 500)
    progress()
  }
})()