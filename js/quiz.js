alert("Welcome on the Internet");

/*let question = "What is 8";
let answer = prompt(question);

alert("You answered " + answer);*/

let quiz = [["what is Superman\'s real name?", "Clark Kent"],
			["What is Wonder Woman\'s real name?", "Diana Prince"],
			["What is Batman\'s real name?", "Bruce Wayne"]];

let score = 0;

for (var i = 0; i < quiz.length; i++) {
	let answer = prompt(quiz[i][0]);

	if(answer === quiz[i][1]){
		alert("Correct");
		score++;
	} else {
		alert("Wrong... \n The correct answer was " + quiz[i][1]);
		//score--;
	}
}

alert("You scored " + score + " points! \n Game Over!");