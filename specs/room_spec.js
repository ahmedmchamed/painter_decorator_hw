const assert = require('assert')
const Room = require('../room.js')

describe('Room', () => {
    let room;

    beforeEach(() => {
        room = new Room(5);
    })

    it('should not be painted', () => {
        assert.strictEqual(room.painted, false)
    })

    it('should be painted', () => {
        room.paintRoom(true)
        assert.strictEqual(room.painted, false)
    })
})