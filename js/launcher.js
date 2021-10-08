class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
       if(this.sling.bodyA)
       { var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        fill("black")
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}

    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly()
    {
        this.sling.bodyA= null
    }
}