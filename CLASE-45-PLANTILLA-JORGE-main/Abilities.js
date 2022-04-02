class abilities {
    constructor(x,y,value,image,color){
     this.x = x;
     this.y = y;
     this.image = image;
     this.value = value;
     this.color = color;
    }
    display(){
        push();
        image(this.image,this.x-40,this.y-5,30,30);
        fill("white");
        rect(this.x,this.y,200,20);
        fill(this.color);
        rect(this.x,this.y,this.value,20);
        noStroke();
        pop();
    }
}