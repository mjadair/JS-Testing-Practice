const assert = require('assert')
const Rooster = require('../app')

describe('Rooster', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {

      //setup
      const expected = 'cock-a-doodle-doo!'
      const actualResponse = Rooster.announceDawn()
      assert.deepEqual(expected, actualResponse)
    })
  })
  describe('timeAtDawn', () => {
    it('returns its argument as a string', () => {

      //setup 
      const timeExpected = '23'
      const actualTime = Rooster.timeAtDawn(23)

      assert.strictEqual(timeExpected, actualTime)
    })

    it('throws an error if passed a number less than 0', () => {
      assert.throws(
        () => {
          Rooster.timeAtDawn(-1)
        },
        RangeError
      )

    })


    it('throws an error if passed a number greater than 23', () => {
      assert.throws(
        () => {
          Rooster.timeAtDawn(412)
        },
        RangeError
      )

    })

  })

})