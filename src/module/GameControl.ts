import Snake  from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    snake:Snake
    food:Food
    panel:ScorePanel
    direction:string = ''

    //是否暂停
    isAlive = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.panel = new ScorePanel()
        this.init()
    }

    private init() {
        //这里之所以要bind this的原因在于，对于addEventListener来说默认this是自身，也就是document，而不是调用它的对象本身
        document.addEventListener("keydown",this.keyDownHandler.bind(this))
        this.run()
    }

    private keyDownHandler(event:KeyboardEvent){
        if(this.snake.body.length>1&&this.checkMoveBack(this.direction,event.key)){
            return
        }else{
            this.direction = event.key
        }
    }

    run(){
        let x = this.snake.X
        let y = this.snake.Y

        switch (this.direction){
            case "ArrowUp":
                y -= 10
                break
            case "ArrowDown":
                y+=10
                break
            case "ArrowLeft":
                x-=10
                break
            case "ArrowRight":
                x+=10
                break
        }

        //必须放到前面，这样才能使得添加后的元素立刻调整位置，从而不显示在（0,0）处
        this.checkEat(x,y)
        try {
            this.snake.X = x
            this.snake.Y = y
            this.snake.checkHitBody()
        }catch (e){
            alert((e as any).message)
            this.isAlive = false
        }

        //开启定时递归调用
        this.isAlive&&setTimeout(this.run.bind(this),300 -(this.panel.level-1)*30)
    }

    checkEat(X: number,Y:number){
        if(X==this.food.X&&Y==this.food.Y){
            this.food.change()
            this.panel.addScore()
            this.snake.addBody()
        }
    }

    checkMoveBack(dirPast:string,dirNew:string):boolean{
        if((dirPast==="ArrowUp"&&dirNew==="ArrowDown")||(dirPast==="ArrowDown"&&dirNew==="ArrowUp")){
            return true
        }else return (dirPast === "ArrowLeft" && dirNew === "ArrowRight") || (dirPast === "ArrowRight" && dirNew === "ArrowLeft");
    }
}

export default GameControl