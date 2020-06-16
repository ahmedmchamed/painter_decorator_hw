const Room = function (area) {
    this.area = area;
    this.painted = false;
}

Room.prototype.paintRoom = function (paintedOrNot) {
    this.painted = paintedOrNot;
}

module.exports = Room;