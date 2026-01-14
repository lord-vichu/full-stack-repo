const additem=()=>{
    //Step1. Read user input from textbox
    let userinput=document.querySelector("#inp").value
    //Step2. Create list item
    let listitem=document.createElement("li")
    listitem.textContent=userinput
    //step3. Target the list
    let list=document.querySelector("#todo")
    //Step4. Add item to the list
    list.appendChild(listitem)
  
}aduhahdhah

let btn=document.querySelector("#btn")
//document.getElemntById("btn");
btn.addEventListener("click",additem)