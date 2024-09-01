let base_url =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let fromcurr = document.querySelector("#from select");
let tocurr = document.querySelector("#to select");
let btn = document.querySelector("button");
let msg = document.querySelector("#cmsg");
    
    
    
    
   

    const drop = document.querySelectorAll("#process select");
    for(let select of drop){
        for( choose in countryList){
            let newopt = document.createElement("option");
            newopt.innerText = choose;
            newopt.value = choose;
             if(select.name === "from" && choose === "USA"){
                 newopt.selected = "selected";
             }
             else if(select.name === "to" && choose === "INR"){
                 newopt.selected = "selected";
             }
            select.append(newopt);
            
        }
        select.addEventListener("change",(evt) =>{

            updateimg(evt.target);
        });
    }


const updateimg = (element) =>{
    let currcode = element.value;
    let countrycode = countryList[currcode];

    let ig = element.parentElement.querySelector("img");
    ig.src = `https://flagsapi.com/${countrycode}/flat/64.png`;
}
btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    let amt = document.querySelector("input");
    let at = amt.value;
    if(at == "" || at < 0){
        at = 1;
        amt.value = "1";
    }

const url = `${base_url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json()`;
console.log(url);
let response = await fetch(url);
console.log(response);
let data = await response.json();
let rate = data[tocurr.value.toLowerCase()];
let final = at*rate;
msg.innerText = `${at} ${fromcurr.value}= ${final} ${tocurr.value}`;

}
);
