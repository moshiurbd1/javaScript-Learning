var link=["img/image1.jpg","img/image2.jpg"]
var image=document.querySelector("#image");
var count=0;
function next(){
    count++;
    if(count>=link.length){
        count = 0;
        image.src=link[count];
    }else{
        image.src=link[count];
    }
    console.log(count);
}
function previous(){
    count--;
    if(count<0){
        count = link.length-1;
        image.src=link[count];
    }else{
        image.src=link[count];
    }
    console.log(count);
}