let main = document.querySelector("main");


class element{
    constructor(x, y, width, height, color, name, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.name = name;
        this.type = type;
    }
    createAndAppend(){
        let myElement = document.createElement(this.type);
        main.appendChild(myElement);
    }
    checkCrash(){

    }
};

class bird extends element{
    constructor(gravity){
        super();
        
    }
}