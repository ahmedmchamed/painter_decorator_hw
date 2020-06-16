const assert = require('assert')
const PaintCan = require('../paintCan.js')

describe('Paint Can', () => {
    let paintCan;

    beforeEach(() => {
        paintCan = new PaintCan(5);
    })

    it('can check if it is empty', () => {
        const actual = paintCan.checkIfEmpty()
        assert.strictEqual(actual, false)
    })

    it('can empty paint can', () => {
        paintCan.emptyCan();
        const actual = paintCan.checkIfEmpty()
        assert.strictEqual(actual, true)
    })
})