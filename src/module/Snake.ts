class Snake{
    head: HTMLElement
    //蛇头+蛇身
    body: HTMLCollection
    //蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement
        this.body = this.element.getElementsByTagName('div')
    }

    get X(){
        return this.head.offsetLeft
    }

    get Y(){
        return this.head.offsetTop
    }

    set X(value:number){
        if(value===this.X){
            return
        }

        if(value>290||value<0){
            throw new Error("蛇撞墙了...")
        }

        this.moveBody()
        this.head.style.left = value+'px'
    }

    set Y(value:number){
        if(value===this.Y){
            return
        }

        if(value>290||value<0){
            throw new Error("蛇撞墙了...")
        }

        this.moveBody()
        this.head.style.top = value+'px'
    }


    addBody(){
        //在element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    moveBody(){
        for(let i = this.body.length-1;i>0;i--){
            let pre_x = (this.body[i-1] as HTMLElement).offsetLeft;
            let pre_y = (this.body[i-1] as HTMLElement).offsetTop;

            (this.body[i] as HTMLElement).style.left = pre_x + 'px';
            (this.body[i] as HTMLElement).style.top = pre_y + 'px';
        }
    }

    checkHitBody(){
        for (let i = 1;i<this.body.length;i++){
            let bd = this.body[i] as HTMLElement
            if(this.X==bd.offsetLeft&&this.Y==bd.offsetTop){
                throw new Error("撞到自己啦...")
            }
        }
    }
}

export default Snake