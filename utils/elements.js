const $sprite = document.querySelector("#sprites")
const $bricks = document.querySelector("#bricks")

// ball variables
export const ballRadius = 3;

// paddle variables
export const paddleWidht = 50;
export const paddleHeigh = 10;

// bricks variables
const brickColumns = 10;
const bricksRows = 8;
const bricksWidth = 40;
const bricksHeigh = 14;
const bricksGap= 2;
const bricksPositionX = 15;
const bricksPositionY = 80;
const bricks = [];

const BRICK_STATUS = {
    ACTIVE: 1,
    DESTROY: 0
}

for (let c = 0; c < brickColumns; c++){
    bricks[c] = []
    for( let r = 0; r < bricksRows; r++){
        const brickX = c * (bricksWidth + bricksGap) + bricksPositionX;
        const brickY = r * (bricksHeigh + bricksGap) + bricksPositionY;
        const Rcolor = Math.floor(Math.random()* 8) ;
        bricks[c][r] = {
            x: brickX, y: brickY, status: BRICK_STATUS.ACTIVE, color: Rcolor

        } 

    }
    
}

export function bricksCollition(ballProps){
    for (let c = 0; c < brickColumns; c++){
        for( let r = 0; r < bricksRows; r++){
            const currentBrick = bricks[c][r];
            if(currentBrick.status === BRICK_STATUS.DESTROY) {
                continue;
            }
            const isBallInX = ballProps.positionX > currentBrick.x && ballProps.positionX < currentBrick.x + bricksWidth;
            const isBallInY = ballProps.positionY > currentBrick.y && ballProps.positionY < currentBrick.y + bricksHeigh;
            if(isBallInX && isBallInY){
                ballProps.directionY = -ballProps.directionY;
                currentBrick.status = BRICK_STATUS.DESTROY
            } 
        }
    }
}

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
    ctx.drawImage( 
        $sprite,
        29,
        174,
        paddleWidht,
        paddleHeigh,
        paddleProps.positionX,
        paddleProps.positionY,
        paddleWidht,
        paddleHeigh

    )
}

export function drawBricks(paddleProps){
    const ctxt = paddleProps.ctx;
    for (let c = 0; c < brickColumns; c++){
        for( let r = 0; r < bricksRows; r++){
            const currentBrick = bricks[c][r]
            if(currentBrick.status === BRICK_STATUS.DESTROY){
                continue;
            }
            ctxt.fillStyle = "greenyellow";
            ctxt.strokeStyle = "#000";
            ctxt.fillRect(currentBrick.x, currentBrick.y, bricksWidth, bricksHeigh);
            ctxt.stroke();
            ctxt.fill();

            const clipX = currentBrick.color * 32;
            ctxt.drawImage(
                $bricks,
                clipX,
                0,
            30,
                bricksHeigh,
                currentBrick.x,
                currentBrick.y,
                bricksWidth,
                bricksHeigh
            )
        }
    }
}


