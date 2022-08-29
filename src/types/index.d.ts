declare type Stage = {
  id:string;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  render?: Drawing[];
  attach(object:Drawing):void;
}

declare type Position = {
  x:number,
  y:number,
  angle?: number,
}

declare type Dimension = {
  length:number,
  depth:number,
  height:number,
  scale?: number
}