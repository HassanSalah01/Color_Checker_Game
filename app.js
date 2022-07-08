const cOne = document.getElementById("cOne");
const cTwo =document.getElementById("cTwo")
const colName = document.getElementById("colName");
const scoreTag = document.getElementById("score");
const startGame = document.querySelector(".startGame");
const gameOver = document.querySelector(".gameOver");
let turn = 0 ;
let score = 0 ;
let start = true;

const main=()=>{ 
    if(start){
        startGame.style.display = "none";
        start = false;
        colorPicker();
    }
}
const rand=(x)=>{
    return Math.floor(Math.random()*x);
}
const randPicker=()=>{
    let pick = rand(10);
    let firstColor = rand(8);
    let secondColor = rand(8);
    if(firstColor==secondColor){
        firstColor =rand(8)
    }
    return {firstColor,secondColor,pick};
}

const colorPicker=()=>{
        let {firstColor,secondColor,pick} = randPicker();
        display(firstColor,secondColor);
        picks(pick,firstColor,secondColor);
        eve(firstColor,secondColor,pick);
        turn++;
        return [pick,firstColor,secondColor]
}

const display=(firstColor,secondColor)=>{
    if(firstColor!=secondColor){
        cOne.style.backgroundColor = Colors[firstColor].getCol();
        cTwo.style.backgroundColor = Colors[secondColor].getCol();
    }else{
        console.log("testing")
        firstColor = rand();
        cOne.style.backgroundColor = Colors[firstColor].getCol();
        cTwo.style.backgroundColor = Colors[secondColor].getCol();
    }
    return [firstColor,secondColor]
}

