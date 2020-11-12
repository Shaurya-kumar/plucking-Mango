class Tree {

    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        this.image = loadImage("tree.png");

        World.add(world, this.body);
      }
      display(){
    
        image(this.image,400,200,600,600);

        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}