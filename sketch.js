var hypnoticball, database, position;

function setup(){
    createCanvas(500,500);
    database= firebase.database()
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";
    var hypnoticballPosition= database.ref('ball/position')
    hypnoticballPosition.on("value",readPosition,showError)
}

function draw(){
   
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    hypnoticball.x = hypnoticball.x + x;
    hypnoticball.y = hypnoticball.y + y;
}
function readPosition(data){
    position= data.val()
    hypnoticball.x=position.x
    hypnoticball.y=position.y
}