import { drawBall, drawPaddle, drawBricks } from "./utils/elements.js";
import { ballMovement } from "./utils/movements.js";


const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

canvas.width = 448;
canvas.height = 400;

const ballProps = {
    positionX : canvas.width / 2,
    positionY : canvas.height - 30,
    directionX : -3,
    directionY : -3,
    ctx : context,
    canvasW: canvas.width,
    canvasH: canvas.height

}

function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function draw(){
    clearCanvas();
    drawBall(ballProps);
    ballMovement(ballProps);
    window.requestAnimationFrame(draw)
}

draw();