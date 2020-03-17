"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(rocket) {
        this.booster = [];
        this.rocket = rocket;
    }
    Rocket.prototype.addBooster = function (booster) {
        this.booster.push(booster);
    };
    Rocket.prototype.addSpeed = function () {
        this.booster.push({ booster: 10 });
    };
    Rocket.prototype.break = function () {
        this.booster.push({ booster: -10 });
    };
    return Rocket;
}());
