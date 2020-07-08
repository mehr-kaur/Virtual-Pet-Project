//Create variables here
var dog, happyDog, database, foodS, foodStock;
var database;

function preload() {
  
    //load images here
    this.image = loadImage("images/dogImg.png");
    this.image = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250, 250);
  dog.addImage("startingpoint", dogImg.png);
  

  database = firebase.database();
  console.log(database);
  
  console.log("food")

  foodStock = database.ref('Food');
  foodStock.on(value, readStock);
}


function draw() {  
background(46, 139, 87);
if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  text("print foodStock from the database")
  text(30, 30, 30, 30);
  


function readStock(data) {
  foodS = data.val();
}

function writeStock(x){


  database.ref('/').update({
    Food:x
  })
}
}
