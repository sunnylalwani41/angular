"use strict";
class Person {
    constructor(canwalk) {
        this.canwalk = canwalk;
    }
}
class Hero extends Person {
    constructor(title, _firstname, _lastname, cwn) {
        super(cwn);
        this.title = title;
        this._firstname = _firstname;
        this._lastname = _lastname;
    }
    fullname() {
        return this._firstname + " " + this._lastname;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(nfirstname) {
        this._firstname = nfirstname;
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(nlastname) {
        this._lastname = nlastname;
    }
}
Hero.version = 1001;
let hero = new Hero("Batman", "Petar", "Parkar", "I can fly");
console.log(hero);
console.log(hero.fullname());
