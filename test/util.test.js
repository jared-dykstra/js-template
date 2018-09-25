const assert = require('assert')

const { util } = require('../')

describe('Util', () => {
  describe('returns42', () => {
    it('should return 42 when called without args', () => {
      assert.strictEqual(util.return42(), 42)
    })
  })
})
