import Drawing from './drawing';
import Equipment from './equipment';

class Container extends Drawing {
  content: Equipment[];
  location?: string;
  constructor(pos: Position, dimension: Dimension){
    super(pos, dimension);
    this.content = [];
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
}

export default Container;