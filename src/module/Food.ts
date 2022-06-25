class Food{
    element: HTMLElement

    constructor() {
        this.element = document.getElementById("food")!
    }

    get X(){
        return this.element.offsetLeft
    }

    get Y(){
        return this.element.offsetTop
    }

    change(){
        //食物出现的坐标必须是10的倍数，因为每次蛇移动一格是10  坐标范围也需要注意是left和top的坐标
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random()*29)*10

        this.element.style.left = left+"px"
        this.element.style.top = top+"px"
    }
}

// const food = new Food()
// console.log(food.X + " " + food.Y);
// food.change()
// console.log(food.X + " " + food.Y);

export default Food