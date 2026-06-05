class Ferro {
    constructor(x,y,w,h)
	{
	var options={
		restitution:0.3,
		friction:3,
		density:30
	}
		this.x=x;
		this.y=y;
		this.h=h;
        this.w=w;
		this.body=Bodies.rectangle(this.x, this.y , this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var ferropos=this.body.position;		
			push()
			translate(ferropos.x, ferropos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			rect(0,0,this.w,this.h);

			pop()
	}

}
