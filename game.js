var boxX = [50,150,250];
var boxY = 300;
var txtY = boxY + 34;
var rock = 'Rock';
var paper = 'Paper';
var scissors = 'Scissors';
var comRPS = random(0,3);
var comRSPt = ["Rock","Paper","Scissors"];
var drawScene1 = function() {
    background(199, 195, 195);
    textSize(width/13);
    text('ROCK PAPER SCISSORS',17,46);
    fill(252, 219, 219);
    rect(267,198,100,50,39);
    fill(0, 0, 0);
    textSize(20);
    text("START",288,232);
    
    fill(252, 219, 219);
    rect(33,200,100,50,39);
    fill(0, 0, 0);
    textSize(20);
    text("HOW TO",46,232);
};
var drawScene2 = function() {
    draw = function() {
        background(218, 245, 241);
    fill(0, 0, 0);
    text("YOU",157,294);
    text("COMPUTER",120,42);
    fill(162, 161, 196);
    rect(boxX[0],boxY,90,50);
    fill(3, 3, 3);
    textSize(24);
    text('Rock',60,txtY);
    fill(162, 161, 196);
    rect(boxX[1],boxY,90,50);
    fill(3, 3, 3);
    textSize(24);
    text('Paper',161,txtY);
    fill(162, 161, 196);
    rect(boxX[2],boxY,90,50);
    fill(3, 3, 3);
    textSize(24);
    text('Scissors',252,txtY);
    
    if(mouseX > 50 && mouseX < 140 && mouseY > 300 && mouseY < 350 ){
        textSize(30);
        text(rock,158,240);
        if(comRPS > 0 && comRPS < 1) {
            fill(255, 0, 0);
            textSize(30);
            text(comRSPt[0],158,98);   
        }
        if(comRPS > 1 && comRPS < 2) {
            fill(255, 0, 0);
            textSize(30);
            text(comRSPt[1],158,98);   
        }
        if(comRPS > 02 && comRPS < 3) {
            fill(255, 0, 0);
            textSize(30);
            text(comRSPt[2],158,98); 
            
        }
        
    }
    if(mouseX > 150 && mouseX < 240 && mouseY > 300 && mouseY < 350 ){
        textSize(30);
        text(paper,158,240);
        if(comRPS > 0 && comRPS < 1) {
            fill(255, 0, 0);
            textSize(30);
            text('Rock',158,98);   
        }
        if(comRPS > 1 && comRPS < 2) {
            fill(255, 0, 0);
            textSize(30);
            text('Paper',158,98);   
        }
        if(comRPS > 02 && comRPS < 3) {
            fill(255, 0, 0);
            textSize(30);
            text('Scissors',158,98);   
        }
    }
    if(mouseX > 250 && mouseX < 340 && mouseY > 300 && mouseY < 350 ){
        textSize(30);
       text(scissors,158,240);
        if(comRPS > 0 && comRPS < 1) {
            fill(255, 0, 0);
            textSize(30);
            text('Rock',158,98);   
        }
        if(comRPS > 1 && comRPS < 2) {
            fill(255, 0, 0);
            textSize(30);
            text('Paper',158,98);   
        }
        if(comRPS > 2 && comRPS < 3) {
            fill(255, 0, 0);
            textSize(30);
            text('Scissors',158,98);   
        }
    }
    {
   if(mouseX > 50 && mouseX < 140 && mouseY > 300 && mouseY < 350 && comRPS > 1 && comRPS < 2) {
       fill(255, 0, 0);
       text('Computer Wins!!',95,170);
       
   }
   if(mouseX > 150 && mouseX < 240 && mouseY > 300 && mouseY < 350 && comRPS > 1 && comRPS < 2) {
       fill(255, 0, 0);
       text('Its a draw!!',120,170);
   }
   if(mouseX > 250 && mouseX < 340 && mouseY > 300 && mouseY < 350 && comRPS > 1 && comRPS < 2) {
       fill(255, 0, 0);
       text('You Win!!',150,170);
   }
    }
    {
   if(mouseX > 50 && mouseX < 140 && mouseY > 300 && mouseY < 350 && comRPS > 2 && comRPS < 3) {
       fill(255, 0, 0);
       text('You Win!!',150,170);
   }
   if(mouseX > 150 && mouseX < 240 && mouseY > 300 && mouseY < 350 && comRPS > 2 && comRPS < 3) {
       fill(255, 0, 0);
       text('Computer Wins!!',95,170);
   }
   if(mouseX > 250 && mouseX < 340 && mouseY > 300 && mouseY < 350 && comRPS > 2 && comRPS < 3) {
       fill(255, 0, 0);
       text('Its a draw!!',120,170);
   }
    }
   {
   if(mouseX > 50 && mouseX < 140 && mouseY > 300 && mouseY < 350 && comRPS > 0 && comRPS < 1) {
       fill(255, 0, 0);
       text('Its a draw!!',120,170);
   }
   if(mouseX > 150 && mouseX < 240 && mouseY > 300 && mouseY < 350 && comRPS > 0 && comRPS < 1) {
       fill(255, 0, 0);
       text('You Win!!',150,170);
   }
   if(mouseX > 250 && mouseX < 340 && mouseY > 300 && mouseY < 350 && comRPS > 0 && comRPS < 1) {
       fill(255, 0, 0);
       text('Computer Wins!!',95,170);
   }
   }  
    };
   
    }; 
var howto = function() {
    background(230, 230, 230);
    textSize(29);
    text("Instructions:",20,42);
    text("In this game you have to",20,76);
    text("drag your mouse on rock,",20,102);
    text("paper or scissor to make",20,129);
    text("your choise.",20,160);
    text("Well,other than that,everyody knows how",20,230);
    text("play Rock Paper Scissors!",20,262);
    fill(252, 219, 219);
    rect(158,300,100,50,30);
    fill(0, 0, 0);
    text('MENU',170,335);
};

mouseClicked = function() {
    if (mouseX > 267 && mouseY > 200 && mouseX < 367 && mouseY < 250 ) {
        drawScene2();
    }
    if (mouseX > 33 && mouseY > 200 && mouseX < 133 && mouseY < 250 ) {
        howto();
    }
    if(mouseX > 158 && mouseX < 258 && mouseY > 300 && mouseY < 350) {
        drawScene1();
    }
};

drawScene1();

