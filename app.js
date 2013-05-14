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

Jedi = (function() {
    var jedi = function(name, age) {
        Padawan.call(this, name, age);
    };

    jedi.prototype = Object.create(Padawan.prototype);

    jedi.prototype.constructor = jedi;
    //without the above jedi will claim to
    //have been constructed by Padawan
    //for more information see my stackoverflow question
    //http://stackoverflow.com/questions/16547633/how-to-show-the-delegated-constructor-reference-issue-in-javascript/16548050

    jedi.prototype.forceAttuned = function() {
        return true;
    };

    jedi.prototype.lightsaberColor = function() {
        return "blue";
    };

    return jedi;
}());

var anakin = new Padawan("Anakin", 9);
var luke = new Jedi("Luke", 29);
