alert("it works");
//Treating this as a rough draft

/*---Constants---*/
var players;
/*----app's state(variable)----*/
var turn,  winner, score, playerHand,computerHand,playerPile,cpuPile;

/*---cached elements references---*/
//count of player card pile to determine winner.

/*---event listener---*/
//player clicking their card.
document.getElementById('player').addEventListener('click', cardFlip);//player click event
var playerCardT=document.getElementById('p1-card').addEventListener();//player card on table
var cpuCardT=document.getElementById('cpu-card').addEventListener();//computer card on table
document.getElementsByTagName('button').addEventListener('click',init);//reset button
var table = document.getElementById('table').addEventListener()// table, if two values are present, function judge
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
    let placeHolder=[];
    table.push(i[0]);
     //cpu sends element to table.but how can I get two elements sent
     //The hands at play lose there current card
     return table
}
cardFlip(playerHand); 
cardFlip(cpuHand);

function cardJudge(a,b){  //will need testing
    //activates once there are two cards on table
    if(a>b){
        playerPile.push(a&&b)
    } else {cpuPile.push(a&&b)}
};

//use reduce method to "tally" card value

checkForWinner(){
    //conditional that  activates once there are no more cards
    //evaluates who has the greater total  between players
}
// function render (){

// }