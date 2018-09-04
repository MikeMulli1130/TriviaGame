

//idea here is to start the game - all questions are true or false


// here is the counter
var timeleft = 90;
var downloadTimer = setInterval(function(){
  document.getElementById("counter").value = 90 - --timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);

<progress value="0" max="90" id="progressBar"></progress>


//when the user clicks the correct answer, 

document.getElementById("#q1").onclick = function () {
    alert("True!");
}

//to start the game we need a start game function - 
var startGame = function (){


var question = {
    q1: {
        name: "q1",
        value: true,
    },
    
    q2: {
        name: "q2",
        value: false,
    },
    
    q3: {
        name: "q3",
        value: true,
    },
    
    q4: {
        name: "q4",
        value: true,
    },
    
    q5: {
        name: "q5",
        value: true,
    },
    
    q6: {
        name: "q6",
        value: false,
    },
    
    }

}; 


// here is where I want to check whether all questions were answered 
//and want to check which, if any, were answered correctly

var currentScore
var targetScore
var score
var updateScore
var score = 0

//need to know that there are more questions - var question index tracks this
var questionIndex = 0;

//need to note when the user pushes the buttons:
document.onkeyup(); "true || false"




//no matter the response to the question - right or wrong - go to the next question

var response = ["q1","q2","q3","q4","q5","q6",]

var checkWin

//alerting the user as to whether they got the answer right or wrong:

var checkWin = function () {

if { 
    function (response [0] === true);
alert ("That is correct!");
score++;
updateScore();
}

else if {
    alert ("Try again!");
}

if{ response ([1] === false);
    alert ("That is correct!");
    score++;
updateScore();
    }
    
    else {
        alert ("Try again!");
    }

    if{ response([2] === true);
        alert ("That is correct!");
        score++;


updateScore();
        }
        
        else {
            alert ("Try again!");
        }

        if{ response([3] === true);
            alert ("That is correct!");
            score++;
updateScore();
            }
            
            else {
                alert ("Try again!");
            }

            if{ response([4] === true);
                alert ("That is correct!");
                score++;
updateScore();
                }
                
                else {
                    alert ("Try again!");
                }

                if{ response([5] === false);
                    alert ("That is correct!");
                    score++;
updateScore();
                    }
                    
                    else {
                        alert ("Try again!");
                    }


};

//scoring = need to track # of right ans, # of wrong ans and # of unaswered
//I know i need to relate this to my html in lines 38-42
// still not quite clear on linking between javascript and html. What I could get to work
//i did in HTML

