import assert from 'assert'

import { util } from '..'

describe('Util', () => {
  describe('returns42', () => {
    it('should return 42 when called without args', () => {
      assert.strictEqual(util.return42(), 42)
    })
  })

  describe('returns42Async', () => {
    it('should return 42 when called asynchronously', async () => {
      assert.strictEqual(await util.return42Async(), 42)
    })
  })
})
