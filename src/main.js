document.addEventListener("keypress",function (event) {
if(event.code=="KeyA"){
    soundA();
}
else if(event.code=="KeyS"){
    soundS();
}
else if(event.code=="KeyD"){
    soundD();
}
else if(event.code=="KeyF"){
    soundF();
}
else if(event.code=="KeyG"){
    soundG();
}
else if(event.code=="KeyH"){
    soundH();
}
else if(event.code=="KeyJ"){
    soundJ();
}
else if(event.code=="KeyW"){
    soundW();
}
else if(event.code=="KeyE"){
    soundE();
}
else if(event.code=="KeyT"){
    soundT();
}
else if(event.code=="KeyY"){
    soundY();
}
else if(event.code=="KeyU"){
    soundU();
}
else{
    console.log("Warning pressed no one of these keys\n");
}
});
function soundA(){
    let audio = new Audio("A.mp3");
    audio.play();
    // let greycolor=document.getElementById("whiteA");
    // greycolor.style.backgroundColor="lightgrey";
    // setTimeout(change_colorA,600);
};
function soundS(){
    let audio = new Audio("S.mp3");
    audio.play();
};
function soundD(){
    let audio = new Audio("D.mp3");
    audio.play();
};
function soundF(){
    let audio = new Audio("F.mp3");
    audio.play();
};
function soundG(){
    let audio = new Audio("G.mp3");
    audio.play();
};
function soundH(){
    let audio = new Audio("H.mp3");
    audio.play();
};
function soundJ(){
    let audio = new Audio("J.mp3");
    audio.play();

};
function soundW(){
    let audio = new Audio("W.mp3");
    audio.play();

};
function soundE(){
    let audio = new Audio("E.mp3");
    audio.play();

};
function soundT(){
    let audio = new Audio("T.mp3");
    audio.play();

};
function soundY(){
    let audio = new Audio("Y.mp3");
    audio.play();

};
function soundU(){
    let audio = new Audio("U.mp3");
    audio.play();

};
// function change_colorA() {
//     let greycolor=document.getElementById("whiteA");
//     greycolor.style.backgroundColor="white";
// };
