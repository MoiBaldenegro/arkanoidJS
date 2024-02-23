// ball variables
export const ballRadius = 3;

// paddle variables
export const paddleWidht = 50;
export const paddleHeigh = 10;



export function drawBall(ballProps){
    const ctx = ballProps.ctx;
    ctx.beginPath();
    ctx.arc(ballProps.positionX, ballProps.positionY, ballRadius, 0, Math.PI * 2 )
    ctx.fillStyle = "#fff"
    ctx.fill();
    ctx.closePath();
}

export function drawPaddle(paddleProps){
    const ctx = paddleProps.ctx
    ctx.fillStyle = "#fff"
    ctx.fillRect(paddleProps.positionX, paddleProps.positionY, 50, 10)
}

export function drawBricks(){
    console.log("hola")

}


