const inputBox=document.getElementById("input-box");
const listC=document.getElementById("list-container");

function addTask(){

    if(inputBox.value=== ''){
        alert("You Must Write Something..!");

    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listC.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value=" ";
    saveData1();
    
}


listC.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("check");
        saveData1();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData1();
    }
    
},false);

function saveData1(){
    localStorage.setItem("data1",listC.innerHTML);
}

function showTask(){
    listC.innerHTML=localStorage.getItem("data1");
}
showTask();