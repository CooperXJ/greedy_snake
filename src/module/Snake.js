"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Snake = (function () {
    function Snake() {
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake>div');
        this.body = this.element.getElementsByTagName('div');
    }
    Object.defineProperty(Snake.prototype, "X", {
        get: function () {
            return this.head.offsetLeft;
        },
        set: function (value) {
            if (value === this.X) {
                return;
            }
            if (value > 290 || value < 0) {
                throw new Error("蛇撞墙了...");
            }
            this.moveBody();
            this.head.style.left = value + 'px';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Snake.prototype, "Y", {
        get: function () {
            return this.head.offsetTop;
        },
        set: function (value) {
            if (value === this.Y) {
                return;
            }
            if (value > 290 || value < 0) {
                throw new Error("蛇撞墙了...");
            }
            this.moveBody();
            this.head.style.top = value + 'px';
        },
        enumerable: false,
        configurable: true
    });
    Snake.prototype.addBody = function () {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    };
    Snake.prototype.moveBody = function () {
        for (var i = this.body.length - 1; i > 0; i--) {
            var pre_x = this.body[i - 1].offsetLeft;
            var pre_y = this.body[i - 1].offsetTop;
            this.body[i].style.left = pre_x + 'px';
            this.body[i].style.top = pre_y + 'px';
        }
    };
    Snake.prototype.checkHitBody = function () {
        for (var i = 1; i < this.body.length; i++) {
            var bd = this.body[i];
            if (this.X == bd.offsetLeft && this.Y == bd.offsetTop) {
                throw new Error("撞到自己啦...");
            }
        }
    };
    return Snake;
}());
exports.default = Snake;
//# sourceMappingURL=Snake.js.map