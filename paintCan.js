const PaintCan = function (numberOfLitres) {
    this.numberOfLitres = numberOfLitres;
}

PaintCan.prototype.checkIfEmpty = function () {
    return this.numberOfLitres === 0;
}

PaintCan.prototype.emptyCan = function () {
    this.numberOfLitres = 0;
}

module.exports = PaintCan;