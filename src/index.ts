import App from './app';
import Stage from './components/stage';

document.addEventListener('DOMContentLoaded', ()=>{
  globalThis.STAGE = new Stage('main');
  App();
  console.log('App loaded...');
})