class Players {
    constructor(x,y,w,h,image1){
     var options = {
         density:2.0,
         restitution:0.5,
     }
     this.body = Bodies.rectangle(x,y,w,h,options);
     this.x = x
     this.y = y
     this.w = w
     this.h = h
     this.image = image1;
    
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
            imageMode(CENTER);
            noStroke();
            fill("black");
            image(this.image,pos.x, pos.y,this.w,this.h);
        pop();
    }
    movementUp(){
      this.body.position.y = this.body.position.y-5
    }
    movementDown(){
        this.body.position.y = this.body.position.y+5
      }
      movementLeft(){
        this.body.position.x = this.body.position.x-5
      }
      movementRight(){
        this.body.position.x = this.body.position.x+5
      }
}