const Room = require("./room");

const Decorator = function () {
    this.stock = [];
}

Decorator.prototype.addCanOfPaint = function (paintCan) {
    this.stock.push(paintCan);
}

Decorator.prototype.calculateTotalLitres = function () {
    let totalLitres = 0;
    for (const paintCan of this.stock) {
        totalLitres += paintCan.numberOfLitres;
    }
    return totalLitres;
}

Decorator.prototype.checkIfThereIsEnoughPaint = function (room) {
    const totalLitresOfPaint = this.calculateTotalLitres();
    return totalLitresOfPaint >= room.area;
}

Decorator.prototype.paintRoomIfEnoughStock = function (room) {
    if (this.checkIfThereIsEnoughPaint(room) === true) {
        room.paintRoom(true);
    }
}

Decorator.prototype.decreasePaintStockAfterPainting = function (room) {
    if (this.checkIfThereIsEnoughPaint(room) !== true) {
        return;
    }

    for (const paintcan of this.stock) {
        paintcan.numberOfLitres -= room.area
    }
}



module.exports = Decorator;