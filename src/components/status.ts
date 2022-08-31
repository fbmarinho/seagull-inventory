import Drawing from './drawing';

class Status extends Drawing {

  constructor(){
    super();

  }
  draw():void{
    let x = STAGE.canvas.offsetWidth - 100;
    let y = STAGE.canvas.offsetHeight - 10;
    this.ctx.fillStyle = "#000";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.beginPath();
    this.ctx.fillText("x:"+ STAGE.mouse.x.toString(), x, y);
    this.ctx.fillText("y:"+ STAGE.mouse.y.toString(), x + 40, y);
    this.ctx.closePath();
    this.ctx.fillStyle = STAGE.mouse.down ? "#0a0" : "#aaa";
    this.ctx.arc(x + 75,y, 5, 0, 2*Math.PI);
    this.ctx.fill();
    
    
  }
}

export default Status;
