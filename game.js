var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern =[];

var gamePattern =[];
var started = false;
var level = 0;
// below start the code


$(document).keypress(function(){
    
if(!started){
    $("#level-title").text("Level " + level);
    nextSecuence();
    started = true;
}
});




//click button push array userClickedPattern

$(".btn").click(function (){ 
    
    var userChosenColour = $(this).attr('id');
    
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

    });
    

    //checkanswer

function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel] ){
        console.log("success");
        
    
    if(userClickedPattern.length === gamePattern.length ){
        setTimeout(function () {
            nextSecuence();
          }, 1000);
    } 
    }
    else
    {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
          }, 200);
         $("h1").text("Game Over, Press Any Key to Restart");
         startOver(); 
          
    }
    

}


// random numbers 
function nextSecuence(){
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level "+level)
        
        var randomNumber = Math.floor(Math.random()*4);
        var randomChoosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChoosenColour);
        
        $("#"+ randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

        playSound(randomChoosenColour);       

    }       


    function playSound(name){


        var audio = new Audio('sounds/'+name+'.mp3');
        audio.play();
       
    
    }

    function animatePress(currentColour){
        $("#"+ currentColour).addClass("pressed");

        setTimeout(function() {
            $("#"+ currentColour).removeClass("pressed");
          }, 100);
        

      
    }



function startOver(){
    buttonColours = ["red", "blue", "green", "yellow"];
    userClickedPattern =[];
    gamePattern =[];
    started = false;
    level = 0;
}





    



  
   





