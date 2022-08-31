import Drawing from './drawing';
import Equipment from './equipment';

class Container extends Drawing {
  content: Equipment[];
  location?: string;
  pos: Position;
  dimension: Dimension;
  constructor(pos: Position, dimension: Dimension){
    super();
    this.content = [];
    this.pos = pos;
    this.dimension = dimension;
  }
  addEquipment(equipment: Equipment){
    this.content.push(equipment);
  }
  removeEquipment(equipment: Equipment){
    this.content = this.content.filter((e)=>e.id != equipment.id);
  }
  setLocation(location:string){
    this.location = location;
  }
  draw(){
    let w = this.m2Pix(this.dimension.length);
    let h = this.m2Pix(this.dimension.depth);
    this.ctx.fillStyle = "#ccc";
    this.ctx.strokeStyle = "#000";
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

export default Container;