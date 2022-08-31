import Drawing from "../components/drawing";

export default interface IStage {
  mouse: {x:number, y:number, down:boolean};
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  render?: Drawing[];
  attach(object:Drawing):void;
  resize():void;
}