"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Snake_1 = require("./Snake");
var Food_1 = require("./Food");
var ScorePanel_1 = require("./ScorePanel");
var GameControl = (function () {
    function GameControl() {
        this.direction = '';
        this.isAlive = true;
        this.snake = new Snake_1.default();
        this.food = new Food_1.default();
        this.panel = new ScorePanel_1.default();
        this.init();
    }
    GameControl.prototype.init = function () {
        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        this.run();
    };
    GameControl.prototype.keyDownHandler = function (event) {
        if (this.snake.body.length > 1 && this.checkMoveBack(this.direction, event.key)) {
            return;
        }
        else {
            this.direction = event.key;
        }
    };
    GameControl.prototype.run = function () {
        var x = this.snake.X;
        var y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
                y -= 10;
                break;
            case "ArrowDown":
                y += 10;
                break;
            case "ArrowLeft":
                x -= 10;
                break;
            case "ArrowRight":
                x += 10;
                break;
        }
        this.checkEat(x, y);
        try {
            this.snake.X = x;
            this.snake.Y = y;
            this.snake.checkHitBody();
        }
        catch (e) {
            alert(e.message);
            this.isAlive = false;
        }
        this.isAlive && setTimeout(this.run.bind(this), 300 - (this.panel.level - 1) * 30);
    };
    GameControl.prototype.checkEat = function (X, Y) {
        if (X == this.food.X && Y == this.food.Y) {
            this.food.change();
            this.panel.addScore();
            this.snake.addBody();
        }
    };
    GameControl.prototype.checkMoveBack = function (dirPast, dirNew) {
        if ((dirPast === "ArrowUp" && dirNew === "ArrowDown") || (dirPast === "ArrowDown" && dirNew === "ArrowUp")) {
            return true;
        }
        else
            return (dirPast === "ArrowLeft" && dirNew === "ArrowRight") || (dirPast === "ArrowRight" && dirNew === "ArrowLeft");
    };
    return GameControl;
}());
exports.default = GameControl;
//# sourceMappingURL=GameControl.js.map