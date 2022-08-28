import App from './app';

let CANVAS = null;
let CTX = null;
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

document.addEventListener('DOMContentLoaded', ()=>{
  CANVAS = document.createElement('canvas');
  CANVAS.width = WIDTH;
  CANVAS.height = HEIGHT;
  CTX = CANVAS.getContext('2d') || new CanvasRenderingContext2D();
  document.body.appendChild(CANVAS);
  App(CTX);
  console.log('App loaded...');
})