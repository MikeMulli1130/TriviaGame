//idea here is to start the game - all questions are true or false

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
document.onkeyup(); true or false


//no matter the response to the question - right or wrong - go to the next question

var response = ["q1","q2","q3","q4","q5","q6",]

var checkWin

//alerting the user as to whether they got the answer right or wrong:

var checkWin = function () {

if{ response ([0] === true);
alert ("That is correct!");
score++;
updateScore();
}

else {
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
