import IStage from '../interfaces/stage';
import Drawing from './drawing';

class Stage implements IStage {
  mouse: {x:number, y:number, down:boolean};
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  render: Drawing[];
  constructor(id?:string){
    this.canvas = id ? this.getCanvasElement(id) : this.createCanvasElement();
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.render = [];
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.resize();
    this.start();
    this.mouse = {x:0, y:0, down: false};
  }
  private start(){
    this.animate();
    console.log('Started');
  }
  attach(object:Drawing){
    this.render.push(object);
  }
  private draw(){
    this.render?.forEach(e=>e.draw());
  }
  private animate(){
    this.clearCanvas();
    this.draw();
    requestAnimationFrame(()=>this.animate());
  }
  private createCanvasElement():HTMLCanvasElement{
    let canvas = document.createElement('canvas') as HTMLCanvasElement;
    canvas.id = "main";
    document.body.appendChild(canvas);
    return canvas;
  }
  private getCanvasElement(id:string):HTMLCanvasElement{
    return document.getElementById(id) as HTMLCanvasElement;
  }
  private clearCanvas(){
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
  }
  resize(){
    console.log(this.canvas.offsetWidth)
    this.canvas.width  = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
}

export default Stage;