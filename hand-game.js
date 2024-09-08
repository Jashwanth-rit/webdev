let usr = 0;
let csr = 0;

let msg = document.querySelector("#msg");
let us = document.querySelector("#u");
let cs = document.querySelector("#compu");

const getcompchoice = () =>{
    let choices =["rock","paper","scissor"];
let idx = Math.floor(Math.random()*3);
return choices[idx];
}



const play = (user,comp) =>
{
    if(user == "rock" && comp == "scissor" || user == "paper" && comp == "rock" || user == "scissor" && comp == "paper"){
        console.log("played");
usr++;
us.innerText = usr;
msg.innerText = `you won, ${user} defeated ${comp}`;
msg.style.backgroundColor = 'green';


    }
    else if(user == "scissor" && comp == "rock" || user == "rock" && comp == "paper" || user == "paper" && comp == "scissor"){
        console.log("played");
        csr++;
        cs.innerText = csr;
        msg.innerText = `comp won, ${comp} defeated ${user}`;
        msg.style.backgroundColor = 'red';

    }
    else {

        msg.innerText = `match is draw`;
        msg.style.backgroundColor = 'black';


    }
}

let choice = document.querySelectorAll(".choice");


choice.forEach((ch)=>{
    
    ch.addEventListener("click",()=>{
        const userchoice = ch.getAttribute("id");
const compchoice = getcompchoice();
play(userchoice,compchoice);
    })
})