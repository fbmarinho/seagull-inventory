import Drawing from './drawing';

class Dragable extends Drawing {
  draging: boolean;
  pos: Position;
  dimension: Dimension;
  offset: {x:number, y:number};
  constructor(pos: Position, dimension: Dimension){
    super();
    this.pos = pos;
    this.dimension = dimension;
    this.draging = false;
    this.offset = {x:0, y:0}
  }
  update():void{
    if(!this.draging){
      this.offset = {x: STAGE.mouse.x - this.pos.x, y: STAGE.mouse.y - this.pos.y};
    }
    if(STAGE.mouse.down && this.checkMouseInside()) {
      this.draging = true;
      this.pos.x = STAGE.mouse.x - this.offset.x;
      this.pos.y = STAGE.mouse.y - this.offset.y;
    }else{
      this.draging = false;
    };
  }

  private checkMouseInside():boolean{
    var mx = STAGE.mouse.x;
    var my = STAGE.mouse.y;
    return  mx > this.pos.x &&
            mx < (this.pos.x + this.dimension.width) &&
            my > this.pos.y &&
            my < (this.pos.y + this.dimension.height)
  }
}
export default Dragable;