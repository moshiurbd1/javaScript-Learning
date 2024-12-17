// function heightNumber(a){
//     let max=a[0];
//     for(let i=0; i<a.length; i++){
//         if(a[i]>max){
//             max=a[i];
//         }
//     }
//     return max;
// }

// let a=[1,33,656,77,88,99];
// let b=heightNumber(a);
// document.write(b);

// function highestS(a){
//     var highestScore=0;
//     var highestScorer=[0][0];
//     for(var i=0; i<a.length; i++){
//         if(highestScore<a[i][1]){
//             highestScore=a[i][1];
//             highestScorer=a[i][0];
//         }
//     }
//     document.write(highestScorer);
// }
// var a=[
//     ["moshiur",388],
//     ["Rahman",2211],
//     ["abdur Rahman",100]
// ];
// highestS(a);

//Guese game
// var a=parseInt(prompt("Enter a number: "));
// var x=Math.floor(Math.random()*6)+1;
// if(a==x){
//     alert("You won");
// }else{
//     alert("You lost");
// }

// function image1(){
//     var b=document.querySelector("#image");
//     console.log(b);
//     b.src="img/image1.jpg";
// }
// function image2(){
//     var b=document.querySelector("#image");
//     console.log(b);
//     b.src="img/image2.jpg";
// }
// var a=document.querySelectorAll(".pera2");
// console.log(a);
// a.innerHTML="hi"
//traversing....
// var ol=document.querySelector("ol");
// var li=ol.children[0];
// console.log(li.innerHTML);
// var l=li.parentElement;
// console.log(l);
// var next=li.nextElementSibling;
// console.log(next);
// var previous=next.previousElementSibling;
// console.log(previous);

// var heading = document.querySelector("#head");
// function addStyle(){
//     heading.classList.add("heading");
// }
// function removeStyle(){
//     heading.classList.remove("heading")
// }
// heading.addEventListener("mouseover",function(){
// this.style.color="green";
// this.innerHTML="I can Listen you";
// });
// heading.addEventListener("mouseout",function(){
// this.style.color="black";
// });

// var head= document.querySelector(".header");
// var btn=document.querySelectorAll(".btn")[0];
// var btn1=document.querySelectorAll(".btn")[1];
// var btn2=document.querySelectorAll(".btn")[2];
// function clikedFun(){
//     var text=btn.innerHTML;
//     head.innerHTML=text;
// }
// function clikedFun1(){
//     var text=btn1.innerHTML;
//     head.innerHTML=text;
// }
// function clikedFun2(){
//     var text=btn2.innerHTML;
//     head.innerHTML=text;
// }


