Padawan = (function() {
    var padawan = function(name, age) {
        this.name = name;
        this.age = age;
    };

    padawan.prototype.skill = function() {
        return this.age.toString().length;
    };

    padawan.prototype.forceAttuned = function() {
        return false;
    };

    return padawan;
}());

var anakin = new Padawan("Anakin", 9);
