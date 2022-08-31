import App from './app';
import Stage from './components/stage';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', ()=>{
  globalThis.STAGE = new Stage('main');
  App();
  console.log('App loaded...');
})

window.addEventListener("resize",()=>{
  globalThis.STAGE.resize();
})