export function ballMovement(ballProps){
    if(ballProps.positionX + ballProps.directionX > ballProps.canvasW - 3 || ballProps.positionX + ballProps.directionX < - 3 ){
        ballProps.directionX = -ballProps.directionX
    }
    if(ballProps.positionY + ballProps.directionY <  2 ){
        console.log("colisionoarriba")
        ballProps.directionY = -ballProps.directionY 
    }
    if(ballProps.positionY + ballProps.directionY > ballProps.canvasH - 3){
        console.log("te cargo la verga")
        document.location.reload();
    }

    ballProps.positionX += ballProps.directionX
    ballProps.positionY += ballProps.directionY

}