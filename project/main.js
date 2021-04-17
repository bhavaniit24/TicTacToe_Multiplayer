const cards = Array.from(document.querySelectorAll(".card"));
const winner = [[1,2,3,],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
let firstPlayer = [];
let secondPlayer = [];
let count = 0;
var final = "";
function check(array) {
	let finalResult = false;
	for(let item of winner){
		let res = item.every(val => array.indexOf(val) !== -1);
		if (res) {
			finalResult = true;
			break;
		}
	}
	return finalResult;
}
function winnerPlayer(p) {
	document.getElementById('winner').innerHTML = p +"<button id='btn'>Reply</button>";	
	document.getElementById('btn').addEventListener("click", function() {
		setTimeout(function(){ rep(); }, 50);	
	})	
}

function draw() {
	if (this.classList == "card") {
		count++;
		if (count%2 !== 0) {
			this.classList.add("x");
			firstPlayer.push(Number(this.dataset.index));
			if (check(firstPlayer)) {
				winnerPlayer("Congrats player one you win (X)");
			}
		} else {
			this.classList.add("o");
			secondPlayer.push(Number(this.dataset.index));
			if (check(secondPlayer)) {
				winnerPlayer("Congrats player two you win (O)");
			}
		}
		if (count === 9) {
			winnerPlayer("Draw");
		}
	}
}
function rep() {
	firstPlayer = [];
	secondPlayer = [];
	count = 0;
	cards.forEach(card => card.classList.remove("x"));
	cards.forEach(card => card.classList.remove("o"));
	document.getElementById('winner').innerHTML = "";
}
cards.forEach(card => card.addEventListener("click", draw));
