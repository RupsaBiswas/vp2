//Create variables here
var dog, happydog, dogIMG, happydogIMG;
var foodS, foodStock;
var database;


function preload()
{
  //load images here
  
dogIMG= loadImage("Dog.png");
happydogIMG= loadImage("happydog.png");


  
}

function setup() {
	createCanvas(displayWidth, displayHeight);
  dog= createSprite(350,480,10,30);
  dog.addImage(dogIMG);
  dog.scale=0.5;

  
  database = firebase.database();
  
  foodStock= database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogIMG);
  }








  drawSprites();

  textSize(20);
  fill("black");
  text("food remaining:"+ foodS,200,200 );
  
  text("press UPARROW key to feed the dog",20,150);
}


  
  //print the foodStock from the databse
  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

    if(x<-0){
      x=0;
    }
    else{
      x=x-1;
    }
    
   database.ref('/').update({
      food:x
    })
  }
  





