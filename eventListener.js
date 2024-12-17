var btn= document.querySelectorAll(".btn");
console.log(btn.length);
for(var i=0; i<btn.length; i++){
var a=document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var text = this.innerHTML;
    var style=this.classList.add('b');
    //setTimeout
    setTimeout(() => {
        this.classList.remove("b");
    }, 150);
    // document.querySelector(".header").innerHTML=text +" is clicked";
    switch(text){
        case "A":
        var audio=new Audio("audio/a.m4a");
        audio.play();
        break;
        case "B":
        var audio=new Audio("audio/b.m4a");
        audio.play();
        break;
        case "C":
        var audio=new Audio("audio/c.m4a");
        audio.play();
        break;
    }
});
console.log(a);
}