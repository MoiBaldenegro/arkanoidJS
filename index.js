import { drawBall, drawPaddle, drawBricks, bricksCollition } from "./utils/elements.js";
import { ballMovement } from "./utils/movements.js";
import { paddleWidht, paddleHeigh } from "./utils/elements.js";


const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

canvas.width = 448;
canvas.height = 400;

const ballProps = {
    positionX : canvas.width / 2,
    positionY : canvas.height - 30,
    directionX : -5,
    directionY : -5,
    ctx : context,
    canvasW: canvas.width,
    canvasH: canvas.height

}

const paddleProps = {
    ctx : context,
    positionX : (canvas.width - paddleWidht) / 2 ,
    positionY : canvas.height - paddleHeigh - 5,
    directionLeft : -50,
    directionRight : 50
}

export let rightPress = false;
export let leftPress = false;

function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function initEvents(){
    document.addEventListener("keydown", keyDownHandler)
    document.addEventListener("keyup", keyUpHandler)

    function keyDownHandler(event){
        const { key } = event;
        
        if(key === "Right" || key === "ArrowRight" ){
            rightPress = true
        } else if (key === "Left" || key === "ArrowLeft" ){
            leftPress = true

        }
    }
    function keyUpHandler(event){
        const { key } = event;

        if(key === "Right" || key === "ArrowRight" ){
            rightPress = false
        } else if (key === "Left" || key === "ArrowLeft" ){
            leftPress = false
        }
        
    }
}
function onPaddleMove(){
    if( rightPress && paddleProps.positionX < canvas.width - paddleWidht ){
        paddleProps.positionX += 6
    } else if( leftPress & paddleProps.positionX > 0){
        paddleProps.positionX -= 6
    }
}



function draw(){

    clearCanvas();
    drawBricks(paddleProps)
    drawBall(ballProps);
    drawPaddle(paddleProps)
    ballMovement(ballProps, paddleProps);
    onPaddleMove()
    bricksCollition(ballProps)
    window.requestAnimationFrame(draw)
}
initEvents();


draw();