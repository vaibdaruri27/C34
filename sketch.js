var ball;
var database, position;
var ballpos;

function setup(){

    database = firebase.database();
    
    createCanvas(500,500);
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    ballpos = database.ref('ball/position'); 
    ballpos.on("value",readOp,showErr);

    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readOp(data){ 
    position=data.val(); 
    ball.x=position.x; 
    ball.y=position.y; 
} 
function showErr(){ 
    console.log("error"); 
}
function writePosition(x,y){ 
    database.ref('ball/position').set({
         'x' : position.x + x, 
         'y' : position.y + y 
      }
    ) 
}
