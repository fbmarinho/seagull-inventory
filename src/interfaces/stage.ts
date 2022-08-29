import Drawing from "../components/drawing";

export default interface IStage {
  id:string;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  render?: Drawing[];
  attach(object:Drawing):void;
}