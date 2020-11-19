class Rope{
    constructor(bodyA,bodyB,offSetX,offSetY){
    

        this.offSetX=offSetX;
        this.offSetY=offSetY;
        var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offSetX, y:offSetY},
        stiffness:1
        }

       // this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }

    display(){
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.bodyB.position;
            strokeWeight(4);
            var anchor1x=pointA.x;
            var anchor1y=pointA.y;
            var anchor2x=pointB.x+this.offSetX;
            var anchor2y=pointB.y+this.offSetY;
            fill("black");
            line(anchor1x,anchor1y,anchor2x,anchor2y);
    }

}
