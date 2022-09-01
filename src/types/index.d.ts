declare type Stage = {
  mouse: {x:number, y:number, down:boolean};
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  render?: Drawing[];
  attach(object:Drawing):void;
  resize():void;
}

declare type Position = {
  x:number,
  y:number,
  angle?: number,
}

declare type Dimension = {
  width:number,
  height:number,
}