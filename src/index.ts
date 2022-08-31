import App from './app';
import Stage from './components/stage';

document.addEventListener('DOMContentLoaded', ()=>{
  globalThis.STAGE = new Stage('main', 800, 600);
  App();
  console.log('App loaded...');
})