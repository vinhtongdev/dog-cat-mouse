function Mouse(name) {
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die = function() {
    this.dead = false;
}

module.exports = Mouse;