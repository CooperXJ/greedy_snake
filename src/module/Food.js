"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Food = (function () {
    function Food() {
        this.element = document.getElementById("food");
    }
    Object.defineProperty(Food.prototype, "X", {
        get: function () {
            return this.element.offsetLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "Y", {
        get: function () {
            return this.element.offsetTop;
        },
        enumerable: false,
        configurable: true
    });
    Food.prototype.change = function () {
        var left = Math.round(Math.random() * 29) * 10;
        var top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    };
    return Food;
}());
exports.default = Food;
//# sourceMappingURL=Food.js.map