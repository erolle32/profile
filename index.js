$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

$("body").keydown(function(keyPressed){
	var audio = new Audio("sounds/"+keyPressed.key+".mp3");
	audio.play();
	drumAnimate(keyPressed.key);
	
});

$(".drum").click(function (){
	var drumClicked = $(this).html();
	var audio = new Audio("sounds/"+drumClicked+".mp3");
	audio.play();
	drumAnimate(drumClicked);
});
//Simon Game
var color = ["red","blue","green","yellow"], level = 0, index = 0, playerPicked = [], simonPicked = [], playerTurn = false, simonColor = "", playerColor = "";

$(".simonstart").click(function(){
  if($(this).html() === "Start Game"){
    $(".simonheading").html("Level : "+level);
    $(".simonstart").html("Reset");
    playerTurn = true;
    playerPicked = [];
    simonColor = color[Math.floor(Math.random()*4)];
    simonPicked.push(simonColor);
    $("#"+simonColor).fadeOut(100).fadeIn(100);
    
  }
  else{
    $(".simonheading").html("Simon Game");
    $(".simonstart").html("Start Game");
    level = 0;
    index = 0;
    simonPicked = [];
    playerPicked = [];
    playerTurn = false;
  }
});

$(".simonbutton").click(function(){
  if(playerTurn){
    playerColor = $(this).attr("Id");
    $("#"+playerColor).fadeOut(100).fadeIn(100);
    playerPicked.push(playerColor);
    if(playerPicked[index] !== simonPicked[index]){
      alert("Wrong Guess!!!")
      $(".simonheading").html("Simon Game");
      $(".simonstart").html("Start Game");
      level = 0;
      index = 0;
      simonPicked = [];
      playerPicked = [];
      playerTurn = false;
    }
    else{
      index++;
      if(playerPicked.length === simonPicked.length){
        level++;
        index = 0;
        $(".simonheading").html("Level : "+level);
        setTimeout(function(){
          playerPicked = [];
          simonColor = color[Math.floor(Math.random()*4)];
          simonPicked.push(simonColor);
          $("#"+simonColor).fadeOut(100).fadeIn(100);
        },1000);
      }
    }
    
    
  }
});
  








function drumAnimate(element){
	var classAnimate = $("."+element);
	classAnimate.addClass("pressed");
	setTimeout(function(){
		classAnimate.removeClass("pressed");
	},100);
}

function diceGame(){
	var dice1 = Math.floor(Math.random()*6) +1;
	var dice2 = Math.floor(Math.random()*6) +1;
	$(".dice1").attr("src","images/dice"+dice1+".png");
	$(".dice2").attr("src","images/dice"+dice2+".png");
	
	if(dice1 > dice2 ){
		$(".dice-result").text("Player 1 Wins");
		
	}
	
	else if(dice2 > dice1){
		$(".dice-result").text("Player 2 Wins");
		
	}
	else {
		$(".dice-result").text("It's a Draw!!!");
		
	}
	
	
		
}


