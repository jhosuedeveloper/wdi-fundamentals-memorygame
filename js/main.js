 //Name: JR


 var cards = [
 {
 	rank: "queen",
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
 }

 ];

 var cardsInPlay = [];
var counter = 0;
document.getElementById('numbers').innerHTML = counter;
var checkForMatch = function()

{
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      counter++;
      appendingScores();
  } else {
      alert("Sorry, try again.");
  }
}



 var flipCard = function() 
 {

var cardId = this.getAttribute('data-id');



console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

this.setAttribute('src', cards[cardId].cardImage)

 if(cardsInPlay.length === 2)
 {
 	checkForMatch();
 }



}


var createBoard= function()
{
	for(var i=0; i<cards.length; i++)
	{
		var cardElement = document.createElement('img'); 
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}


}

createBoard();

var reset = document.getElementsByTagName('button')[0];


var resetting= function()
{
	
	for(var i=0; i<cards.length; i++)
	{
	var item = document.getElementById('game-board')
	item.removeChild(item.childNodes[0]);
	item.removeEventListener('click',flipCard);
	cardsInPlay=[];

	}



	createBoard();
}
reset.addEventListener('click', resetting);





var appendingScores = function()
{
document.getElementById('numbers').innerHTML = counter;
}










