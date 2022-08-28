import Container from './components/container';
import Equipment from './components/equipment';

function App(ctx:CanvasRenderingContext2D) {

    let box = new Container(ctx, {x:100, y:100, angle: 0}, {length:2, depth:2, height:2});
    let basket = new Container(ctx, {x:300, y:100, angle: 0}, {length:14, depth:1.1, height:1.1});
    let basket1 = new Container(ctx, {x:300, y:200, angle: 0}, {length:8, depth:1.1, height:1.1});
    
    box.draw();
    basket.draw();
    basket1.draw();
    
    box.addEquipment(new Equipment(1, 'Kit'));
    box.setLocation('Pipe deck');
    console.log(box);

}

export default App;