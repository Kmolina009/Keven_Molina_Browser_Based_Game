// alert("it works");
//Treating this as a rough draft

/*---Constants---*/
var players;
/*----app's state(variable)----*/
var turn,  winner, score, playerHand,computerHand

/*---cached elements references---*/
//count of player card pile to determine winner.

/*---event listener---*/
//player clicking their card.
//player clikcing  the reset button.
//player clicking start button/ note: DOM manipulation could allow them both to be the same.
/*---functions---*/
//"shuffle card deck.", assign cards to each player "randomly".
//check for winner(could trigger once there are no cards left)

init ();


function init(){
    var playerHand= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
                                1,2,3,4,5,6,7,8,9,10,11,12,13,14,];
    var cpuHand = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
                            1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    players= {
        player: 0,
        cpu: 0,
        tie : 0,
    } //currently keeping track of the score....

    //an idea for the assigning of suites is  assigning a range of cards to a suit
   
        /*Taking in to account suites are largly ignored. 
        The number/rank is what determines the winner*/

        //Have 52 cards in deck
        //shuffle deck
        function shuffle (a){
            a.sort(() => Math.random()-0.5);
            return a
        };
        cards(playerHand);
        cards(cpuHand);
}
//WIP
function cardFlip(evt.target){
        

}

function render (){

}