export default class Drawing{
  ctx: CanvasRenderingContext2D;
  constructor(){
    this.ctx = STAGE.context;
    STAGE.attach(this);
  }
  update():void{
    //
  }
  draw():void{
    this.ctx.strokeStyle = "#000";
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.moveTo(0,0);
    this.ctx.lineTo(100,100);
    this.ctx.rect(0, 0, 100, 100);
    this.ctx.closePath();
    this.ctx.stroke();
  }

}