class Mango{
    constructor(x,y,r,){
        var options={
            isStatic: true,
            friction:1,
            restitution:0
        
        }

        this.r=20;
        this.body = Bodies.rectangle(x,y,20,20,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}