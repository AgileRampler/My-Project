const countEl = document.getElementById("count-el")
const incrementBtn = document.getElementById("increment")
const saveBtn = document.getElementById("save-el")
const entriesEl = document.getElementById("entries") 
let count=0;

incrementBtn.addEventListener("click",function(){

     count = count + 1 ;
    countEl.innerHTML =count;
})

saveBtn.addEventListener("click",function(){
   let countSave = count + "-" ;
   entriesEl.innerText += countSave;
   countEl.innerHTML = 0 ;
   count = 0 ;

   
})
