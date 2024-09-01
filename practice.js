// let arr = [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// });
// arr.forEach((val)=>{
//     console.log(val,arr);
// });
// arr.forEach((m)=>{
//     console.log(m*m);
// });
// console.log(arr);
//  let newarr = arr.map((m)=>{
//     return (m*m);
// });
// console.log(newarr);


//DOM

 let b = document.querySelector("p");
  
 let k = b.setAttribute("id","box2");
 b.innerHTML;
  console.log(b.innerHTML);
  let  c = b.getAttribute("id");
  console.log(c);
 b.style.backgroundColor = "red";
 
  console.log(b.innerText);


  //creating ele in js

  let nb = document.createElement("button");
  nb.innerText = "clicked here !!";
  let f = document.querySelector("div");
  f.append(nb);
  nb.setAttribute("id","button1");
  console.log(f.innerHTML);
let t = document.querySelector("body");
// t.onmouseover = () =>{
//     console.log("mouse moved on web");
// }

//  nb.onclick = () =>{
//     console.log("clicked");
//     alert("clicked");
//     let a = 0;
//     a++;
//     console.log(a);
//   };
//   nb.addEventListener("click",()=>{
//     console.log("clicked on button");
//   })

//   let head = () =>{
//     console.log("moved");
//   }
//   nb.addEventListener("mouseover",head);
//   nb.removeEventListener("mouseover",head);
let i = t.setAttribute("class","dark");
 let j = t.setAttribute("class","light");
console.log(f.innerHTML);
// i.style.backgroundColor = "black";
// i.style.color = "white";
// j.style.backgroundColor = "white";
// j.style.color = "black";
let present = "dark";
nb.addEventListener("click",()=>{
    if(present == "light"){
        present = "dark";
        t.classList.add("dark");
        t.classList.remove("light");


    }
    else{
        present = "light";
        t.classList.add("light");
        t.classList.remove("dark");


    }
})