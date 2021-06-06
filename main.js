function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    }
    img="";
    function preload(){
    img=loadImage("e09cdd40-087e-4762-b28b-915d28ad6632.jpeg");
    }
    function draw(){
    image(img,0,0,600,500);
    }