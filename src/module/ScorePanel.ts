
class ScorePanel{
    score = 0
    level = 1

    scoreEle:HTMLElement
    levelEle:HTMLElement

    maxLevel:number
    levelUpScore:number


    constructor(maxLevel:number = 10,levelUpScore:number = 10) {
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
        this.maxLevel = maxLevel
        this.levelUpScore = levelUpScore
    }

    addScore(){
        this.scoreEle.innerHTML = ++this.score +''
        if(this.score%this.levelUpScore==0){
            this.levelUp()
        }
    }

    private levelUp(){
        if(this.level<this.maxLevel)
            this.levelEle.innerHTML = ++this.level +''
    }
}

// const panel = new ScorePanel(100,2)
// for(let  i =0;i<100;i++){
//     panel.addScore()
// }
//
// console.log(panel.score+" "+panel.level);

export default ScorePanel
