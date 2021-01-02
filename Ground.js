class Ground{
    constructor(x,y,height,width){
        var options={
           isStatic:true,
           density:1,
           friction:1
        }
        this.height=height;
        this.width=width;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("ground.jpg");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}