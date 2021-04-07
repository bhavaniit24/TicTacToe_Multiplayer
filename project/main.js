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
	setTimeout(function(){ alert(p); }, 50);
}
function draw() {
	if (this.classList == "card") {
		count++;
		if (count%2 !== 0) {
			this.classList.add("x");
			firstPlayer.push(Number(this.dataset.index));
			if (check(firstPlayer)) {
				winnerPlayer("Congrats player one you win");
			}
		} else {
			this.classList.add("o");
			secondPlayer.push(Number(this.dataset.index));
			if (check(secondPlayer)) {
				winnerPlayer("Congrats player two you win");
			}
		}
		if (count === 9) {
			winnerPlayer("Draw");
		}
	}
}
function rep() {
	const w = document.querySelectorAll(".winner");
	firstPlayer = [];
	secondPlayer = [];
	count = 0;
	w.remove();
}
cards.forEach(card => card.addEventListener("click", draw));
