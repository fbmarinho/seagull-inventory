import Container from './components/container';
import Equipment from './components/equipment';
import Grid from './components/grid';
import Status from './components/status';

function App() {
    
    let grid = new Grid().setSpacing(50);
    let status = new Status();
    let box = new Container({x:100, y:100, angle: 0}, {width:200, height:200});
}

export default App;