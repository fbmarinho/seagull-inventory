import App from './app';
import Stage from './components/stage';
import './styles/style.css';

document.addEventListener('DOMContentLoaded', ()=>{
  globalThis.STAGE = new Stage('main');
  App();
  console.log('App loaded...');

  
})

document.addEventListener('mousemove',(e)=>{
  let last = globalThis.STAGE.mouse;
  globalThis.STAGE.mouse = {...last, x:e.offsetX, y: e.offsetY};
})

document.addEventListener('mousedown',(e)=>{
  let last = globalThis.STAGE.mouse;
  globalThis.STAGE.mouse = {...last, down: true};
})

document.addEventListener('mouseup',(e)=>{
  let last = globalThis.STAGE.mouse;
  globalThis.STAGE.mouse = {...last, down: false};
})

window.addEventListener("resize",()=>{
  globalThis.STAGE.resize();
})