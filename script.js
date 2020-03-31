let floodTime=10;
let currentTime=0;
let myGold=0;
let allGoldInRiver = 0;

// * 8. Using the same set of values as in the lab, create your own river level
let theRiver = [];
let riverLength = theRiver.length;
let riverWidth = theRiver[1].length;

// * 9. Update the function to return the total amount of gold in the river.  
// *    What command should you add, and where in the function should you add it?
function totalGoldInRiver(){
    allGoldInRiver = 0;
    for(let i=0;i<theRiver.length;i++){
        for(let j=0;j<theRiver[i].length;j++){
            allGoldInRiver += theRiver[i][j].amt;
        }
    }
    console.log(allGoldInRiver);
};

// * 10.  change the function to take in 2 parameters for finding a location in your 2d array
function findGoldAtLocation(){
    // * 11. Make riverSpot hold the location specified by the 2 variables
    let riverSpot =  ;
    let goldChance = Math.random();
    let goldFound;
    if(goldChance>riverSpot.chanceOfFinding && riverSpot.collected==false){
        myGold+= riverSpot.amt;
        console.log(`Yee Haw! I found ${riverSpot.amt}`);
        //* 12. make goldFound hold an object holding a boolean called found and a number called amt
        goldFound = { };
    }else{
        console.log(`darn tootin!  No Gold for me!`);
        // * 13. Make goldFound hold an object holding a boolean called found and a number called amt
        // *     What should those values be when no gold is found?
        goldFound = { };
    }
    return goldFound;
}

function removeActions(square){
    // * notice the command below?  It removes listeners
    square.removeEventListener("click", squareClicks);
    //* 14. make the removeEventListener command remove the following
    //*     - a mouseenter listener that runs the squareOver function
    //*     - a mouseleave listener that runs the squareOut function
    

}

function updateRound(){
    currentTime+=1;
    if(currentTime==floodTime){
        console.log("game is over!");
        removeAllBoardClicks();
    }
}

function squareClicks(e){
    removeActions(e.target);
    // * 15. Notice what the line below is doing?  
    //*     console log e.target.id.split("_"), what datatype is it?
    //*     console log what data type it is
    let yVal = e.target.id.split("_")[1];
    // * 16. get the xVal using a similar command.  What is the single thing that should change?
    
    // * 17. console log the value of wasGoldFound.  What is it?  Describe it in your own words.
    let wasGoldFound = findGoldAtLocation(yVal, xVal);
    if(wasGoldFound.found==true){
        //* notice that we are using classList.add to add the class collectedGold
        e.target.classList.add("collectedGold");
        // * 18.  Change the targets innerText to be the amount of gold found there
        
    }else{
        // * 19. Oh no!  No gold found.  add the class collectedNoGold to the target
        
    }
    updateStatsDisplay();
    updateRound();
}
function squareOver(e){
    e.target.classList.add("hovering");
}
function squareOut(e){
    e.target.classList.remove("hovering");
}

function removeAllBoardClicks(){
    for(let y=0;y<riverLength;y++){
        for(let x=0;x<riverWidth;x++){
            // * 20. Make the template literal that will let us find any square from any two values
            let mySquare = document.querySelector(` `);
            // * 21. Remove the following listeners from mySquare
            // * click listener that calls squareClicks
            // * mouseenter listener that calls squareOver
            // * mouseleave listener that calls squareOut
            
        }
    }
}

function setupGameboardClicks(){
    for(let y=0;y<riverLength;y++){
        for(let x=0;x<riverWidth;x++){
            // * 22. fill in the template literal to be able to find any square in our nested loop
            let mySquare = document.querySelector(` `);
            // * 23.  add the following event listeners to mySquare
            // *      click event that runs squareClicks
            // *      mouseenter event that runs squareOver
            // *      mouseleave event that runs squareOut
            
        }
    }
}
function updateStatsDisplay(){
    let totalGold = document.querySelector("#totalGold");
    totalGold.innerHTML = `Total Gold: ${totalGoldInRiver()}`;
    // * 24. Look at the code above, make a similar command to show the current round in your html
    
    // * 25. Similarly to total gold, show an update on how much gold the user has found
    
    let totalTime = document.querySelector("#totalTime");
    totalTime.innerText = `Time To Flood: ${floodTime}`;
}

function clearSquares(){
    for(let y=0;y<riverLength;y++){
        for(let x=0;x<riverWidth;x++){
            let mySquare = document.querySelector(`#river_${y}_${x}`);
            mySquare.classList.remove("collectedGold");
            // * 26. take note of the code above, use the same method to remove the following classes
            // * collectedNoGold
            // * collected
            // * hovering
            
            // * 27. set the innerText of mySquare to blank
            
            // * 28. remove the following listeners from mySquare
            // *     click that calls squareClicks
            // *     mouseenter that calls squareOver
            // *     mouseleave that calls squareOut
            
        }
    }
}

function newGame(){
    floodTime=10;
    currentTime=0;
    myGold=0;
    allGoldInRiver = 0;
    clearSquares();
    updateStatsDisplay();
    setupGameboardClicks();
}

function initReset(){
    // * 29. create a variable that holds onto the reset button using querySelector
    
    // * 30. add a click listener to the reset button that will call newGame
    
}

function initGame(){
    initReset();
    newGame();
}
initGame();