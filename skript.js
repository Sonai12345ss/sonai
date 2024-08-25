 /*let modeBtn = document.querySelector("#modebtn");
let crrmode= "light";
modeBtn.addEventListener("click", () =>{
    if(crrmode === "light"){
        crrmode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        crrmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(crrmode);
});*/



let trano=0;
let tranx=0;
let Buttans= document.querySelectorAll(".bt");
let newBtn= document.querySelector(".newgame");
let player1=document.querySelector("#yc");
let player2=document.querySelector("#cc");
let playero= true;
const winPatten=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
Buttans.forEach((bt) =>{
bt.addEventListener( "click", () =>{
    if(playero){
        bt.innerText="O" ;
        playero=false;
    }
    else{
        bt.innerText="X";
        playero=true;
    }
    bt.disabled=true;
    checkwiner();
});
});
const resetelement = () =>{
    for( let bt of Buttans ){
        bt.innerText="";
        bt.disabled= false;  
    }
}
const resetscore = () =>{
    for(let bt of Buttans){
        player1.innerText=0;
        player2.innerText=0; 
        trano=0;
        tranx=0;  
    }
}
const checkwiner = ()=>{
for( let patten of winPatten){

    let posi1=Buttans[patten[0]].innerText;
    let posi2=Buttans[patten[1]].innerText;
    let posi3=Buttans[patten[2]].innerText;
    if(posi1!="" && posi2!=""  && posi3!=""){
    if(posi1 ===posi2  && posi2 ===posi3){
        let win=posi1;
if(win==="O" ){
    trano++;
    player1.innerText=trano;

}else{
    tranx++;
    player2.innerText=tranx;
}
        console.log("winer is found bahenchod",win);
    for(let bt of Buttans){
        bt.disabled=true;
    } }}
    
}
};
newBtn.addEventListener("click" ,() =>{
   resetelement();
  
});
let reset = document.querySelector(".reset");
reset.addEventListener("click", () =>{
    resetelement();
    resetscore();
});

