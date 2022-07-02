const cOne = document.getElementById("cOne");
const cTwo =document.getElementById("cTwo")
const colName = document.getElementById("colName");

const rand=()=>{
    return Math.floor(Math.random()*8);
}
const main=()=>{
    let pick = Math.floor(Math.random()*10);
    let firstColor = rand();
    let secondColor = rand();
    colorPicker(firstColor,secondColor,pick);
}
const colorPicker=(firstColor,secondColor,pick)=>{
    display(firstColor,secondColor);
    picks(pick,firstColor,secondColor);
    eve(firstColor,secondColor,pick);

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

const picks=(pick,firstColor,secondColor)=>{
    if(pick>5){
        colName.innerHTML = Colors[firstColor].getCol();
    }else{
        colName.innerHTML = Colors[secondColor].getCol();
    }
}

const checkAns = (playerAnswer,rightAnswer)=>{
    if(playerAnswer==rightAnswer){
        console.log("Wrong")
    }else{
        console.log("RIGHT");
    }
}
const eve = (firstColor , secondColor,pick)=>{
    let picks = pick > 5 ? firstColor : secondColor;
    cOne.addEventListener("mousedown", ()=>{
        checkAns(Colors[firstColor].getCol(),Colors[picks].getCol())
    });
    cTwo.addEventListener("mousedown", ()=>{
        checkAns(Colors[secondColor].getCol(),Colors[picks].getCol())
    });
}

