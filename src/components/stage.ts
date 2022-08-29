import IStage from '../interfaces/stage';
import Drawing from './drawing';

class Stage implements IStage {
  id:string;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  render: Drawing[];
  constructor(id:string){
    this.id = id;
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext('2d') || new CanvasRenderingContext2D();
    this.render = [];
    this.start();
  }
  private start(){
    document.body.style.margin = '0px';
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundSize = '20px 20px';
    document.body.style.backgroundImage =  "radial-gradient(circle, #eee 1px, rgba(0, 0, 0, 0) 1px)";
    this.canvas.id = this.id;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerWidth;
    document.body.appendChild(this.canvas);
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
}

export default Stage;