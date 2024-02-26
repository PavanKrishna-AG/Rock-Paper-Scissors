let score = JSON.parse(localStorage.getItem("score")) || {
	wins: 0,
	lose: 0,
	tie: 0,
};
updatingElement();
console.log(JSON.parse(localStorage.getItem("score")));

function PlayerMove(move) {
	let result = "";
	const computerChoice = computerMove();
	if (move === "Scissors") {
		const choice = "Scissors";

		if (choice === computerChoice) {
			result = "Tie";
		} else if (computerChoice === "Paper") {
			result = "You Win";
		} else if (computerChoice === "Rock") {
			result = "You Lose";
		}
	} else if (move === "Paper") {
		const choice = "Paper";

		if (choice === computerChoice) {
			result = "Tie";
		} else if (computerChoice === "Scissors") {
			result = "You Lose";
		} else if (computerChoice === "Rock") {
			result = "You Win";
		}
	} else if (move === "Rock") {
		const choice = "Rock";

		if (choice === computerChoice) {
			result = "Tie";
		} else if (computerChoice === "Paper") {
			result = "You Lose";
		} else if (computerChoice === "Scissors") {
			result = "You Win";
		}
	}

	//updating score
	if (result === "You Win") {
		score.wins += 1;
	} else if (result === "You Lose") {
		score.lose += 1;
	} else if (result === "Tie") {
		score.tie += 1;
	}

	localStorage.setItem("score", JSON.stringify(score));
	updatingElement();

	resultElement(result);
	movesElement(move, computerChoice);
}
function computerMove() {
	let computerChoice = "";
	const random = Math.random();
	if (random > 0 && random < 1 / 3) {
		computerChoice = "Rock";
	} else if (random >= 1 / 3 && random < 2 / 3) {
		computerChoice = "Scissors";
	} else if (random >= 1 / 3 && random < 1) {
		computerChoice = "Paper";
	}

	return computerChoice;
}
function updatingElement() {
	document.querySelector(
		".scores1"
	).innerHTML = `Wins:${score.wins},Losses:${score.lose},Tie:${score.tie}`;
}
function resultElement(result) {
	document.querySelector(".results").innerHTML = `${result}`;
}
function movesElement(move, computerChoice) {
	document.querySelector(".moves").innerHTML = `You
  <img class="image" src="images/${move}-emoji.png" alt="${move}">
  <img class="image" src="images/${computerChoice}-emoji.png" alt="${move}">
  Computer`;
}
