const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const return42 = () => 42

const return42Async = async delayMs => {
  await sleep(delayMs)
  return return42()
}

module.exports = {
  sleep,
  return42,
  return42Async
}
