import Container from './components/container';
import Equipment from './components/equipment';

function App() {
    
    
    let box = new Container({x:100, y:100, angle: 0}, {length:2, depth:2, height:2});
    let basket = new Container({x:300, y:100, angle: 0}, {length:14, depth:1.1, height:1.1});
    let basket1 = new Container({x:300, y:200, angle: 0}, {length:8, depth:1.1, height:1.1});
    
    
    box.addEquipment(new Equipment(1, 'Kit'));
    box.setLocation('Pipe deck');
    console.log(box);

}

export default App;