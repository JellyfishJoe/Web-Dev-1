let quiz = {
	"name": "Superhero Quiz",
	"description": "How many heroes can you name?",
	"question": "What is the real name of ",
	/*"names":[
			{"heroName": "Superman", "trueIdentity": "Clark Kent"},
			{"heroName": "Wonder Woman", "trueIdentity": "Diana Prince"},
			{"heroName": "Batman", "trueIdentity": "Bruce Wayne"}
	],*/
	"heroNames":[
			"Superman",
			"Wonder Woman",
			"Batman"
	],
	"trueIdentities":[
			"Clark Kent", 
			"Diana Prince", 
			"Bruce Wayne"
	]
};		

//These are the hooks that connect to our DOM obejcts
var $questionSpot = document.getElementById('questionSpot');
var $feedback = document.getElementById('feedback');
var $score = document.getElementById('score');

let $form = document.forms.checkAnswer;
let $input = $form.elements.answer;

let $start = document.getElementById('start');
let $again = document.getElementById('playAgain');
//Common practice is to name vars with $ that matches the DOM obejct


//Create an update function that can be used to update an element on a page
function update(el, content, klass){
	var p = el.firstChild; // Either update the first child or create on if there is not one
	if(el === $score){
		p.textContent = content;
		el.appendChild(p);
	}
	p.innerHTML = content;

	if(klass){
		p.className = klass; //If a class name is given apply it to p
	}
}

//Hide elements
function hide(el) {
	el.style.display = "none";
}

//Show elements
function show(el) {
	el.style.display = "block";
}

hide($form);
hide($questionSpot);
hide($feedback);
hide($score);
hide($again);

$start.addEventListener('click', function(){play(quiz)});
$again.addEventListener('click', function(){restart()});

play(quiz);

//Create a function for playing the game
function play(quiz) {
	console.log('started');
	show($form);
	show($questionSpot);
	show($score);

	hide($start);

	var score = 0;
	quiz.trueIdentities[0];
	var i = 0;
	update($score, score);
	console.log("i = " + i);
	//This line will update the score while playing

	function chooseQuestion() {
		question = quiz.heroNames[i];
		console.log(quiz.heroNames[i]);
		answer = ask(question);
	}

	chooseQuestion();

	$form.addEventListener("submit", function(event){
		event.preventDefault();
		console.log("submitted answer = " + $input.value)
		check($input.value);
	});

	function ask(question) {
		update($questionSpot, quiz.question + question + "?");	//This will show the question on the page
		//return prompt("What is the real name of " + quiz.heroNames[i] + "?"); // We still need the prompt to enter answers util we start using forms
		$input.value = "";
		$input.focus();
	}

	function check(answer) {
		console.log("correct answer = " + quiz.trueIdentities[i]);
		show($feedback);
		if(answer === quiz.trueIdentities[i]){
			update($feedback, "Correct!", "right");
			score++;
			update($score, score);
			//i++;
		} else {
			update($feedback, "Wrong!", "wrong");	
		}
		
		i++;
		console.log("i = " + i);
		if(i === quiz.heroNames.length) {
			gameOver();
		} else {
			chooseQuestion();
		}
	}

	function gameOver() {
		basicPopup();
		update($questionSpot, "Game over, you scored " + score + " points!");
		update($feedback, "", 'reset');
		show($again);
		hide($form);
		//hide($questionSpot);
		hide($feedback);
		//hide($score);
	}
}

function restart() {
	location.reload();
}

function basicPopup() {
	console.log("opopfjdiopsafjdpsoaosdafojijklfa;njkla; nbklsbdanjkla bdml mnblaasfagjkl");
	popup = window.open('img/iWannaDie.jpg', 'Popup', 'width=640 height=480');
}