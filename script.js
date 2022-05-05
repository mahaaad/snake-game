let gridArray = [];
let score = 0;
let length = 3;
let speed = 200;
let direction = "U";
let snakeX = 5;
let snakeY = 5;
let appleX;
let appleY;

const grid = document.querySelector(".grid");
const startButton = document.querySelector(".start-button")
const scoreLabel = document.querySelector(".score")

document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
            if (direction !== "R") direction = "L";
            break;
       case 38:
            if (direction !== "D") direction = "U"
            break;
       case 39:
            if (direction !== "L") direction = "R";
            break;
       case 40:
            if (direction !== "U") direction = "D";
            break;
    }
 };
startButton.addEventListener("click", startGame)


function createArray(){


    for(let i = 0; i < 10; i++){
        let temp = [];
        for(let x = 0; x < 10; x++){
            let id = i + "" + x;
            let gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            gridItem.id = id;
            grid.appendChild(gridItem)
            temp.push(gridItem);
        }
        gridArray.push(temp);
    }

    console.log(gridArray);
}
function reset(){
    if(typeof(appleX) == undefined){
        let appleId = appleY + "" + appleX;
        console.log("Apple id: " + appleId)
        document.getElementById(`${appleId}`).classList.remove("apple");
    }
    direction = "U";
    snakeX = 5;
    snakeY = 5;
}

function setApple(){
    appleX = Math.floor(Math.random() * 10);
    appleY = Math.floor(Math.random() * 10);
    let appleId = appleY + "" + appleX;
    console.log("apple id: " + appleId)
    document.getElementById(`${appleId}`).classList.add("apple");
}

function startGame(){
    reset();
    setApple();

    var moveSnake = window.setInterval(function(){
        if (snakeY === appleY && snakeX === appleX){
            score += 1;
            length += 1;
            scoreLabel.textContent = "SCORE: " + score;
            let appleId = appleY + "" + appleX;
            document.getElementById(`${appleId}`).classList.remove("apple");
            setApple();
        }


        if(direction === "U"){
            snakeY -= 1;
        }
        else if(direction === "D"){
            snakeY += 1;
        }
        else if(direction === "L"){
            snakeX -= 1;
        }
        else{
            snakeX += 1;
        }

        let snakeId = snakeY + "" + snakeX;
        //check if hitting tail

        try {
            if (document.getElementById(`${snakeId}`).classList.contains("snake")){
                alert("GAME OVER");
            }
            //set snake length
            document.getElementById(`${snakeId}`).classList.add("snake");
            setTimeout(() => {
                document.getElementById(`${snakeId}`).classList.remove("snake");
              }, length*speed)
    


        } catch (error) {
            alert("GAME OVER");
            clearInterval(moveSnake) 
        }

      }, speed);
}



createArray()
