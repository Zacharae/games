var suits = [
	♠,
	♥,
	♦,
	♣,
];

var deck = [
	A♠,2♠,3♠,4♠,5♠,6♠,7♠,8♠,9♠,10♠,J♠,Q♠,K♠,A♥,2♥,3♥,4♥,5♥,6♥,7♥,8♥,9♥,10♥,J♥,Q♥,K♥,A♦,,2♦,3♦,4♦,5♦,6♦,7♦,8♦,9♦,10♦,J♦,Q♦,K♦,A♣,2♣,3♣,4♣,5♣,6♣,7♣,8♣,9♣,10♣,J♣,Q♣,K♣,
];
// 'deck' is the master deck, all the other stuff will be used to check hands
var spades = [
	♠,
	[2♠,3♠,4♠,5♠,6♠,7♠,8♠,9♠,10♠,J♠,Q♠,K♠,A♠]
];
var hearts = [
	♥,
	[2♥,3♥,4♥,5♥,6♥,7♥,8♥,9♥,10♥,J♥,Q♥,K♥,A♥]
];
var diamonds = [
	♦,
	[2♦,3♦,4♦,5♦,6♦,7♦,8♦,9♦,10♦,J♦,Q♦,K♦,A♦]
];
var clubs = [
	♣,
	[2♣,3♣,4♣,5♣,6♣,7♣,8♣,9♣,10♣,J♣,Q♣,K♣,A♣]
];
var jacksorbetter = [
	J♠,Q♠,K♠,A♠,J♥,Q♥,K♥,A♥,J♦,Q♦,K♦,A♦,J♣,Q♣,K♣,A♣
]