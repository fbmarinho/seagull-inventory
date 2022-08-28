import Container from './components/container';
import Equipment from './components/equipment';

function App(ctx:CanvasRenderingContext2D) {

    let box = new Container(ctx, {x:100, y:100, angle: 0}, {length:2, depth:2, height:2});
    box.draw();
    box.addEquipment(new Equipment(1, 'Kit'));
    console.log(box);

}

export default App;