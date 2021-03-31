//make variables for questions, answers, time and score
//make variables for areas that will be changing text in html (queryselectors)
//make function for timer that ticks down 
    // starts time at 30 sec
    //make if statement saying that if clock reaches 0 then stop the quiz
//make a function that starts the game
    //start ticking down timer
    //have the question with choices pop up once quiz starts
    //make for loop that will cycle through array of questions and the choices
        //add event listeners to all choices and 
            //add functions of correct and incorrect to event listener
                //if correct, score goes up by 10, and if incorrect, time goes down by 5
//make function for when game is done
    //ask for intital for leaderboard
    //save score locally and post on leaderboard when game is done
    //make start button say "restart", and run function "startgame " if clicked
    //make event listener that will make this function start when click "start"



var scoreboardDoc = document.getElementById ('Qlist')
var QuestionTextDoc = document.getElementById ('questionText')
var button = document.querySelector(".button")
var orderedListDoc = document.querySelector ("#OList")
var timeDoc = document.getElementById('timerText')
var questionsDoc = document.querySelector (".quizQuestion")
var questions = ["What do you use to style your HTML?","What IS NOT part of the CSS box model?","what HTML element do you use to insert an image into html?","What element do you use to make an Ordered List?","What element do you use to make an Unordered List?","what do you use to change backround color in CSS","How many fingers are in 1 hand","what opperator in Java performs multiplication","what opperator in Java performs division"]
var answer1 = ["CSS","spacing","<img>","<ol>","<ul>","background-color: COLOR ;","5","*","/"]
var answer2 = ["Python","margin","<pic>","<ul>","<h2>","color: COLOR ; ","7","/","%"]
var answer3 = ["Functions","padding","<embed>","<li>","<ol>","backroundColor: COLOR ; ","3","-","*"]
var answer4 = ["Arrays","border","<div>","<orderedlist>","<li>","bc: COLOR ; ","10","+","-"]
var totalSeconds = 30
var score = 0



function timer (){
    var printTimeLeft = setInterval (function(){
        totalSeconds--;
        timeDoc.textContent = totalSeconds + "seconds";


    }, 1000);
    if (totalSeconds == 0 ) {
        
        endQuiz ()
    }
}

function correct () {
    
    score = score + 10

}

function incorrect () {
    
    totalSeconds == totalSeconds - 5
}

function startQuiz () {
    
    function timer () ;

    var list1 = document.createElement ("li")
    var list2 = document.createElement ("li")
    var list3 = document.createElement ("li")
    var list4 = document.createElement ("li")

    
    
    for ( i=0 ; i<questions.length; i++) {
        
        QuestionTextDoc.innerHTML = questions [ i ]
        
        list1.textContent = answer1 [ i ]
        list2.textContent = answer2 [ i ]
        list3.textContent = answer3 [ i ]
        list4.textContent = answer4 [ i ]
        
        orderedListDoc.appendChild (list1)
        orderedListDoc.appendChild (list2)
        orderedListDoc.appendChild (list3)
        orderedListDoc.appendChild (list4)
        
        list1.setAttribute ("id","choice1")
        list2.setAttribute ("id","choice2")
        list3.setAttribute ("id","choice3")
        list4.setAttribute ("id","choice4")

        var choice1Doc = document.getElementById ('choice1')
        var choice2Doc = document.getElementById ('choice2')
        var choice3Doc = document.getElementById ('choice3')
        var choice4Doc = document.getElementById ('choice4')


        choice1Doc.addEventListener ("click", correct)
        choice2Doc.addEventListener ("click", incorrect)
        choice3Doc.addEventListener ("click", incorrect)
        choice4Doc.addEventListener ("click", incorrect)





    }
    }

    function endQuiz () {
        button.innerHTML = "restart"
        var form1 = document.createElement ('form')
        form1.textContent = "enter intitals here"
        form1.setAttribute ("id","form")




        var scoreboardDoc = document.getElementById ('Qlist')
        var scoreboard2 = document.createElement ('li')
        scoreboard2.textContent = form1 + ": " + score
        scoreboardDoc.appendChild ('scoreboard2')




    }

    button.addEventListener ("click", startQuiz )


