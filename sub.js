let select =document.getElementById("select");

let text1=document.getElementById("text");
let re=document.getElementById("reselt");

text1.addEventListener("input",()=>{
 codee();
})
select.addEventListener("change",()=>{
 codee();
})

function codee(){
 if(select.value=="decode"){
  re.value =window.atob(text1.value);
 }else{
  re.value=window.btoa(text1.value);
 }
}