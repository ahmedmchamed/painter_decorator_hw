const assert = require('assert')
const Decorator = require('../decorator.js')
const PaintCan = require('../paintCan.js')
const Room = require('../room.js')

describe('Decorator', () => {
    let decorator; 
    let paintCan;
    let room 

    beforeEach(() => {
        decorator = new Decorator();
        paintCan = new PaintCan(5);
        room = = new Room(5);
    })
})