let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#rbtn");
let show = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");
let msgho = document.querySelector("#msgho");
let play = false;
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];
const restart = () =>
    
{
    msgho.classList.add("hide");
    play = true;
    for(let i of btn){
        i.disabled = false;
        i.innerText = "";
    }

}
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked")
if(play){

    box.innerText = "o";
    play = false;
}
else{
    box.innerText = "x";
    play= true;
}
box.disabled =true;
checkwin();
    });
});
const disablebox = () =>{
    for(let i of btn){
        i.disabled = true;
    }
};
function showwin(winner){
    msgho.innerText = `congradulations! winner is ${winner}`;
    msgho.classList.remove("hide");
    disablebox();

}
function checkwin()
{
    for(let i of win){
        let v1 = btn[i[0]].innerText;
        let v2 = btn[i[1]].innerText;
        let v3 = btn[i[2]].innerText;
        if(v1 != "" && v2 != "" && v3 != "" ){
            if(v1==v2 && v2==v3){
               showwin(v1);
            }

        }
    }
}
newgame.addEventListener("click",restart);
reset.addEventListener("click",restart);