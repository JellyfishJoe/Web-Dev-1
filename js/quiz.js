alert("Welcome on the Internet");

/*let question = "What is 8";
let answer = prompt(question);

alert("You answered " + answer);*/

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

let score = 0;

play(quiz);

function play(quiz) {
	for(var i = 0, question, answer; i < quiz.heroNames.length; i++) {
		question = quiz.heroNames[i];
		answer = ask(question);
		check(answer);
	}

	function ask(question) {
		return prompt(quiz.question + question + "?");
	}

	function check(answer) {
		if(answer === quiz.trueIdentities[i]){
			alert("Correct");
			score++;
		} else {
			alert("Wrong... \n The correct answer was " + quiz.trueIdentities[i]);
		}
	}

	gameOver();
}

/*
for (var i = 0; i < quiz.length; i++) {
	let answer = prompt(quiz[i][0]);

	if(answer === quiz[i][1]){
		alert("Correct");
		score++;
	} else if (answer === quiz[i][2]) {
		alert("Correct");
		score++;
	} else if (answer === quiz[i][3]) {
		alert("Correct");
		score++;
	} else if (answer === quiz[i][4]) {
		alert("Correct");
		score++;
	} else {
		alert("Wrong... \n The correct answer was " + quiz[i][1]);
		//score--;
	}
}
*/

function gameOver() {
	alert("You scored " + score + " points! \n Game Over!");
}