// var cible = document.getElementsByClassName("para-first");

// document.getElementById("ExpPro").onclick = function(){
//     hide() 
// }

// function hide(){
//     for(let i = 0; i <document.getElementsByClassName("para-first").length;i = i + 1){
//      cible[0].hidden = false
//     }
// }







// le contenu que tu veux cacher
var cible = document.getElementById('parafirst');

// la ou tu dois cliquer 


document.getElementById('ExpPro').onclick = function(){
   if (cible.hidden == true){
    //    cache le contenu
       cible.hidden = false
   }else{
    //    montre le contenu
       cible.hidden = true
   };
}





var cible2 = document.getElementById('parasecond');


document.getElementById('ExpPro2').onclick = function(){
   if (cible2.hidden == true){
       cible2.hidden = false
   }else{
       cible2.hidden = true
   };
}







var cible3 = document.getElementById('parathird');


document.getElementById('ExpPro3').onclick = function(){
   if (cible3.hidden == true){
       cible3.hidden = false
   }else{
       cible3.hidden = true
   };
}





var cible4 = document.getElementById('parafourth');


document.getElementById('ExpPro4').onclick = function(){
   if (cible4.hidden == true){
       cible4.hidden = false
   }else{
       cible4.hidden = true
   };
}



