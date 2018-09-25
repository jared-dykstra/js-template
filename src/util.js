export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const return42 = () => 42

export const return42Async = async delayMs => {
  await sleep(delayMs)
  return return42()
}
