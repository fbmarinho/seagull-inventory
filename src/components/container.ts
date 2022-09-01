import Dragable from './dragable';
import Equipment from './equipment';

class Container extends Dragable{
  content: Equipment[];
  location?: string;
  pos: Position;
  dimension: Dimension;
  constructor(pos: Position, dimension: Dimension){
    super(pos, dimension);
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
    this.ctx.fillStyle = "#ccc";
    this.ctx.strokeStyle = "#000";
    this.ctx.rotate(this.pos.angle || 0)
    this.ctx.beginPath();
    this.ctx.rect(this.pos.x, this.pos.y, this.dimension.width, this.dimension.height);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }
}

export default Container;