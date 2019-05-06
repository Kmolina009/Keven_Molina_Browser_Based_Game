alert("it works");
//Treating this as a rough draft

/*---Constants---*/
var players;
/*----app's state(variable)----*/
var turn,  winner, score, playerHand,computerHand;

/*---cached elements references---*/
//count of player card pile to determine winner.

/*---event listener---*/
//player clicking their card.
document.getElementById('player').addEventListener('click', cardFlip);
var playerCardT=document.getElementById('p1-card').addEventListener();;
var cpuCardT=document.getElementById('cpu-card').addEventListener();
//player clikcing  the reset button.
document.getElementsByTagName('button').addEventListener('click',init);
document.getElementById('table').addEventListener() 
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
        cards(playerHand);
        cards(cpuHand);
}
//WIP
function cardFlip(){
      table.push()

}//on click, array element is pushed to table, while the player shifts elements.
//prompt's cpu to do the same 
var table = function cardJudge(a,b){
    if(a>b){
        
    }
};

checkForWinner(){
    //conditional that  activates once there are no more cards
    //evaluates who has the greater total  between players
}
// function render (){

// }