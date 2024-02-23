export function ballMovement(ballProps, paddleProps){
    if(ballProps.positionX + ballProps.directionX > ballProps.canvasW - 3 || ballProps.positionX + ballProps.directionX < - 3 ){
        ballProps.directionX = -ballProps.directionX
    }
    if(ballProps.positionY + ballProps.directionY <  2 ){
        console.log("colisionoarriba")
        ballProps.directionY = -ballProps.directionY 
    }
    if(ballProps.positionY + ballProps.directionY > ballProps.canvasH - 15){
       if(ballProps.positionX > paddleProps.positionX && ballProps.positionX < paddleProps.positionX + 50) {
        ballProps.directionY = -ballProps.directionY 
    return
    
 } else {
    document.location.reload();

 }



    }

    ballProps.positionX += ballProps.directionX
    ballProps.positionY += ballProps.directionY

}