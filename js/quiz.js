alert("Welcome on the Internet");

/*let question = "What is 8";
let answer = prompt(question);

alert("You answered " + answer);*/

let quiz = [["what is Superman\'s real name?", "Clark Kent", "Clark kent", "clark Kent", "clark kent"],
			["What is Wonder Woman\'s real name?", "Diana Prince", "Diana prince", "diana Prince", "diana prince"],
			["What is Batman\'s real name?", "Bruce Wayne", "Bruce wayne", "bruce Wayne", "bruce wayne"]];

let score = 0;

play(quiz);

function play(quiz) {
	for(var i = 0, question, answer; i < quiz.length; i++) {
		question = quiz[i][0];
		answer = ask(question);
		check(answer);
	}

	function ask(question) {
		return prompt(question);
	}

	function check(answer) {
		if(answer === quiz[i][1]){
			alert("Correct");
			score++;
		} else {
			alert("Wrong... \n The correct answer was " + quiz[i][1]);
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