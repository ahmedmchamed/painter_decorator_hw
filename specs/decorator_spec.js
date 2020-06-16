const assert = require('assert')
const Decorator = require('../decorator.js')
const PaintCan = require('../paintCan.js')
const Room = require('../room.js')

describe('Decorator', () => {
    let decorator; 
    let paintCan;
    let room;

    beforeEach(() => {
        decorator = new Decorator();
        paintCan1 = new PaintCan(5);
        paintCan2 = new PaintCan(5);
        room = new Room(5);
    })

    it('should check that the stock is empty', () => {
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 0);
    })

    it('should add can of paint to stock', () => {
        decorator.addCanOfPaint(paintCan1);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1)
    })

    it('should check the total number of paint litres in stock', () => {
        decorator.addCanOfPaint(paintCan1);
        decorator.addCanOfPaint(paintCan2);
        const actual = decorator.calculateTotalLitres();
        assert.strictEqual(actual, 10)

    })

    it('can check if there is enough paint for a room', () => {
        decorator.addCanOfPaint(paintCan1);
        decorator.addCanOfPaint(paintCan2);
        const actual = decorator.checkIfThereIsEnoughPaint(room);
        assert.strictEqual(actual, true);
    })

    it('can paint the room if there is enough stock', () => {
        decorator.addCanOfPaint(paintCan1);
        decorator.addCanOfPaint(paintCan2);
        decorator.paintRoomIfEnoughStock(room);
        const actual = room.painted;
        assert.strictEqual(actual, true);
    })

    it('can reduce the amount of paint in a paint can after painting', () => {
        let paintCan1 = new PaintCan(8);
        let paintCan2 = new PaintCan(8);
        decorator.addCanOfPaint(paintCan1);
        decorator.addCanOfPaint(paintCan2);
        decorator.decreasePaintStockAfterPainting(room);
        const actual = decorator.calculateTotalLitres();
        assert.strictEqual(actual, 6);

    })
})