let ar=document.getElementById("Arbic");
let en=document.getElementById("english");
let tit=document.getElementById("tit");



ar.onclick =()=>{
 languge("arbic");
}
en.onclick =()=>{
 languge("english")
}

function languge(lang){
if(lang ==="arbic"){
tit.innerHTML="اهلا وسهلا بك في موقعي ";
}else if(lang==="english"){
tit.innerHTML="Hellow in the my web";
}


}

function swi(){
document.addEventListener("keydown",(event)=>{
 let a= document.querySelector("body");
switch(event.key ){
 case "1":a.style.background="gray";
 break;
 case "2":a.style.background="red";
 break;
default :a.style.background="green";
}
});

}

class App{
 constructor(){
  let a=document.getElementById("b");
  a.addEventListener('cut',()=>{
   this.cut1();
  })
 } cut1(){

 for(let i=0;i< 5;i++){
  alert("helloe"+i)

 }

}



}onload =new App();

function  past(){
 alert("in past t t t")
}