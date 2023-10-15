countEl = document.getElementById("count");
saveEl  = document.getElementById("save");
let count = 0;

function increment(){
count = count + 1;
    countEl.innerText=count;
}
function save(){
    let countStr = count + "-" ;
    saveEl.innerText += countStr;
    countEl.innerText = 0;
    count = 0;
}
    
console.log("countEl")




