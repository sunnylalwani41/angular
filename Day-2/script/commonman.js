"use strict";
let commonman = {
    title: "Bruce"
};
let addpower = (power) => {
    return (commonman) => {
        return {
            title: commonman.title,
            power: power
        };
    };
};
let superman = addpower(9)(commonman);
console.log(superman);
