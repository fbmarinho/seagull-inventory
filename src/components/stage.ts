import IStage from '../interfaces/stage';
import Drawing from './drawing';

class Stage implements IStage {
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
  resize(){
    console.log(this.canvas.offsetWidth)
    this.canvas.width  = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
}

export default Stage;