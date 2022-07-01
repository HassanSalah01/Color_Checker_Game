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

