// ball variables
const ballRadius = 3;


export function drawBall(ballProps){
    const ctx = ballProps.ctx;
    ctx.beginPath();
    ctx.arc(ballProps.positionX, ballProps.positionY, ballRadius, 0, Math.PI * 2 )
    ctx.fillStyle = "#fff"
    ctx.fill();
    ctx.closePath();
}

export function drawPaddle(x, y){
    console.log("hola")

}

export function drawBricks(){
    console.log("hola")

}


