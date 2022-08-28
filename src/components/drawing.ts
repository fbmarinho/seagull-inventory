import { Position, Dimension } from '../system/types';
import { ColorScheme } from '../system/colors';

export default class Drawing {
  ctx: CanvasRenderingContext2D;
  pos: Position;
  dimension: Dimension;
  constructor(ctx: CanvasRenderingContext2D, pos: Position, dimension: Dimension){
    this.ctx = ctx;
    this.pos = pos;
    this.dimension = dimension;
  }
  draw(){
    let w = this.m2Pix(this.dimension.length);
    let h = this.m2Pix(this.dimension.depth);
    this.ctx.fillStyle = ColorScheme.primary;
    this.ctx.strokeStyle = ColorScheme.lines;
    this.ctx.rotate(this.pos.angle || 0)
    this.ctx.beginPath();
    this.ctx.rect(this.pos.x, this.pos.y, w, h);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }
  private m2Pix(n:number){
    let scale = this.dimension.scale || 1;
    return n*10*scale;
  }
}