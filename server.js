const { util } = require('.')

const main = async () => {
  console.log('hello world')
  console.log(`The answer is ${util.return42()}`)
  const answer = await util.return42Async(300)
  console.log(`The async answer is ${answer}`)
}

// Self-executing promise so everything can be async-await
;(async () => {
  try {
    await main()
  } catch (e) {
    console.error(e)
  }
})()
