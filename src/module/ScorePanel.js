"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScorePanel = (function () {
    function ScorePanel(maxLevel, levelUpScore) {
        if (maxLevel === void 0) { maxLevel = 10; }
        if (levelUpScore === void 0) { levelUpScore = 10; }
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById("score");
        this.levelEle = document.getElementById("level");
        this.maxLevel = maxLevel;
        this.levelUpScore = levelUpScore;
    }
    ScorePanel.prototype.addScore = function () {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.levelUpScore == 0) {
            this.levelUp();
        }
    };
    ScorePanel.prototype.levelUp = function () {
        if (this.level < this.maxLevel)
            this.levelEle.innerHTML = ++this.level + '';
    };
    return ScorePanel;
}());
exports.default = ScorePanel;
//# sourceMappingURL=ScorePanel.js.map