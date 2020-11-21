rover_x=10;
rover_y=10;
rover_height=100;
rover_width=100;
rover_image="Formula 1.jpg";
car2_image="Car2.jpg"
background_image="Track1 .jpeg";
car2_x= 10;
car2_y=200;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var Images=["Track1 .jpeg","Track2.webp","Track 3.jpg"];
random_number = Math.floor(Math.random()*5);
console.log(random_number);
background_image= Images[random_number];




function add(){
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar;
    car2_imgTag.src = car2_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
function uploadcar(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y , rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
    if(keyPressed == '38')
    {

        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {

        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {

        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {

        right();
        console.log("right");
    }
    if(keyPressed == '87')
    {

        above();
        console.log("up");
    }
    if(keyPressed == '83')
    {

         below();
        console.log("down");
    }
    if(keyPressed == '68')
    {

        side2();
        console.log("left");
    }
    if(keyPressed == '65')
    {

        side1();
        console.log("right");
    }
}
function up()
{
     if (rover_y>=0){
    rover_y= rover_y-10;
     uploadBackground();
     uploadrover();
     uploadcar();
     }
}
function down()
{
    if (rover_y<=500){ 
    rover_y= rover_x+10;
     uploadBackground();
     uploadrover();
     uploadcar();
    }
}
function right()
{
    if (rover_x<=700){ 
    rover_x= rover_x+10;
     uploadBackground();
     uploadrover();
     uploadcar();
    }
}
function left()
{
    if (rover_x>=0){ 
    rover_x= rover_x-10;
     uploadBackground();
     uploadrover();
     uploadcar();
    }
}
function above()
{
     if (rover_y>=0){
    car2_y= car2_y-10;
     uploadBackground();
     uploadcar();
     uploadrover();
     }
}
function below()
{
    if (rover_y<=500){ 
        car2_y= car2_y+10;
     uploadBackground();
     uploadcar();
     uploadrover();
    }
}
function side1()
{
    if (rover_x<=700){ 
        car2_x= car2_x+10;
     uploadBackground();
     uploadcar();
     uploadrover();
    }
}
function side2()
{
    if (rover_x>=0){ 
        car2_x= car2_x-10;
     uploadBackground();
     uploadcar();
     uploadrover();
    }
    if(rover_x >= 600)
    {
        console.log("car1 Won");
        document.getElementById('game_status').innerHTML="Car 1 Won!!";
    }
    if(car2_x >= 600)
    {
        console.log("car2 Won");
        document.getElementById('game_status').innerHTML="Car 2 Won!!";
    }
}