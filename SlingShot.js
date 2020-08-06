class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB; // {x:0,y:0}
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null; // null => nothing 
    }

    display(){
        if(!this.sling.bodyA == 1){
           return
        } else { 
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      
    }
    
   
}