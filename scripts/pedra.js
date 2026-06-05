class Pedra {
    constructor(x,y,r) {
	var options={
		restitution:0.8,
		friction:0.9,
		density:12
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var pedrapos=this.body.position;		
			push()
			translate(pedrapos.x, pedrapos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r,this.r);

			pop()
	}

}
