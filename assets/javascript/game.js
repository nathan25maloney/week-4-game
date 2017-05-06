var computerChoice = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var scoreNumber = 0;
var wins = 0;
var loses = 0;

function randomNumber(){
	computerChoice = Math.floor(Math.random()*100) + 20;
	
}
function resetCheck(){
	if(scoreNumber > computerChoice){
        loses += 1;
 		randomNumber();
 		$('#loses').text(loses);
 		$('#computerChoice').text(computerChoice);
 		scoreNumber = 0;
 		$('#counter').text(scoreNumber);
		crystal1 = 0;
		crystal2 = 0;
		crystal3 = 0;
		crystal4 = 0;
	} else if (scoreNumber === computerChoice){
		wins += 1;
		randomNumber();
		$('#wins').text(wins);
		$('#computerChoice').text(computerChoice);
		scoreNumber = 0;
		$('#counter').text(scoreNumber);
		crystal1 = 0;
		crystal2 = 0;
		crystal3 = 0;
		crystal4 = 0;
            		}
}

$( window ).on( "load", randomNumber());

$(document).ready(function(){ 
	$('#computerChoice').text(computerChoice);

	$("#button-1").on("click", function() {
            if (scoreNumber< computerChoice) {
            	if (crystal1 === 0) {
					crystal1 = Math.floor(Math.random()*12);
            		console.log(crystal1);
            		scoreNumber = scoreNumber + crystal1;
            		$('#counter').text(scoreNumber);
            		resetCheck();
            	} else {
            		scoreNumber = scoreNumber + crystal1;
            		$('#counter').text(scoreNumber);
            		resetCheck();
            		console.log(crystal1);
            	}
            }    
        });

    $("#button-2").on("click", function() {
    	if (scoreNumber< computerChoice) {
            	if (crystal2 === 0) {
            		crystal2 = Math.floor(Math.random()*12);
            		console.log(crystal2);
            		scoreNumber = scoreNumber + crystal2;
            		$('#counter').text(scoreNumber);
            		resetCheck();
            	} else {
            		scoreNumber = scoreNumber + crystal2;
            		$('#counter').text(scoreNumber);
            		resetCheck();
            		console.log(crystal2);
            	}
            }   
        });


    $("#button-3").on("click", function() {
    	if (scoreNumber< computerChoice) {
            	if (crystal3 === 0) {
            		crystal3 = Math.floor(Math.random()*12);
            		console.log(crystal3);
            		scoreNumber = scoreNumber + crystal3;
            		$('#counter').text(scoreNumber);
            		resetCheck();
            	} else {
            		scoreNumber = scoreNumber + crystal3;
            		$('#counter').text(scoreNumber);
            		resetCheck();
            		console.log(crystal3);
            	}
            }     
        });


    $("#button-4").on("click", function() {
    	if (scoreNumber< computerChoice) {
            	if (crystal4 === 0) {
            		crystal4 = Math.floor(Math.random()*12);
            		console.log(crystal4);
            		scoreNumber = scoreNumber + crystal4;
            		$('#counter').text(scoreNumber);
            		resetCheck();
            	} else {
            		scoreNumber = scoreNumber + crystal4;
            		$('#counter').text(scoreNumber);
            		resetCheck();
            		console.log(crystal4);
            	}
            } 
        });
});