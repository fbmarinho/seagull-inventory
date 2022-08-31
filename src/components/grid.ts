import Drawing from './drawing';

class Grid extends Drawing {
  spacing: number;
  color: string;
  constructor(){
    super();
    this.color = "#eee";
    this.spacing = 50 ;
  }
  setSpacing(spacing:number):void{
    this.spacing = spacing;
  }
  setColor(color:string):void{
    this.color = color;
  }
  draw():void{
    var h = this.ctx.canvas.offsetHeight;
    var w = this.ctx.canvas.offsetWidth;
    var nw = Math.ceil(w / this.spacing);
    var nh = Math.ceil(h / this.spacing);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    for(var i=1; i<nh; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(0, i*this.spacing);
      this.ctx.lineTo(w,i*this.spacing);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    for(var i=1; i<nw; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(i*this.spacing, 0);
      this.ctx.lineTo(i*this.spacing,h);
      this.ctx.closePath();
      this.ctx.stroke();
    }
    
  }
}

export default Grid;