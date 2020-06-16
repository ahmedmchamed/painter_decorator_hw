const PaintCan = function (numberOfLitres) {
    this.numberOfLitres = numberOfLitres;
}

PaintCan.prototype.checkIfEmpty = () => {
    return this.numberOfLitres === 0;
}

PaintCan.prototype.emptyCan = () => {
    this.numberOfLitres = 0;
}

module.exports = PaintCan;