alert("it works");
//Main Goal: Link the events together

/*---Constants---*/
var players;
/*----app's state(variable)----*/
var turn,  winner, score, playerHand,cpuHand,playerPile,cpuPile;

/*---cached elements references---*/
//count of player card pile to determine winner.

/*---event listener---*/
//player clicking their card.
document.getElementById('player').addEventListener('click', cardFlip);//player click event
var playerCardT=document.getElementById('p1-card').addEventListener();//player card on table
var cpuCardT=document.getElementById('cpu-card').addEventListener();//computer card on table
document.getElementsByTagName('button').addEventListener('click',init);//reset button
var table = document.getElementById('table').addEventListener(,cardJudge)// table, if two values are present, function judge
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
    } //Winner is determined by the greater total of pile
        /*Taking in to account suites are largly ignored. 
        refer to rps on assigning image/value
        */
        
        
        function shuffle (a){
            a.sort(() => Math.random()-0.5);
            return a
        };
        shuffle(playerHand);
        shuffle(cpuHand);
}
//WIP
function cardFlip(){
    // Element to table.
    //cpu sends element to table.
    table.push(i[0]);
     return table
};
 //cpu sends element to table.but how can I get two elements sent
cardFlip(cpuHand);

//The hands at play lose there current card
function playedCard(i) {
    i.splice(0,1);
	return i
  };
playedCard(cardFlip());
playedCard(cardFlip());

  
  function cardJudge(a){  //will need testing
    //activates once there are two cards on table
    if(a[0]>a[1]){
        playerPile.push(a[0],a[1])
    } else {cpuPile.push(a[0],a[1])
    return a
    }
};
//use reduce method to "tally" card value

checkForWinner(){
    if(playerHand.length===0&&cpuHand.length===0){
            
    }
    /*conditional that  activates once there are no more cards in either players hand
    */
    //evaluates who has the greater total sum between players
}
// function render (){

// }