import IStage from '../interfaces/stage';
import Drawing from './drawing';

class Stage implements IStage {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  render: Drawing[];
  constructor(id?:string, width?: number, height?: number){
    this.canvas = id ? this.getCanvasElement(id) : this.createCanvasElement();
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.render = [];
    this.canvas.width = width || window.innerWidth;
    this.canvas.height = height || window.innerHeight;
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
}

export default Stage;