
//Main Goal: Link the events together

/*---Constants---*/
var players;
/*----app's state(variable)----*/
var turn,  winner, score, playerHand, cpuHand, playerPile, cpuPile;
playerHand= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,];
playerPile=[];
cpuHand = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
1,2,3,4,5,6,7,8,9,10,11,12,13,14];
cpuPile=[];
var table = {
    cards : [],
    judge:function(){ if(this.cards.length === 2){
            cardJudge(table.cards);
    }
        }
            }// table, if two values are present, function judge}
console.log(playerHand);
console.log(playerPile);
console.log(cpuHand);
console.log(cpuPile);
console.log(table.cards);
/*---cached elements references---*/
//count of player card pile to determine winner.

/*---event listener---*/
//player clicking their card.
document.getElementsById("player").addEventListener("click", cons/*cardFlip(playerHand)*/);//player click event
// var playerCardT = document.getElementById('p1-card').addEventListener();//player card on table, should load coresponding card image
// var cpuCardT=document.getElementById('cpu-card').addEventListener();//computer card on table
// document.getElementsById('reset').addEventListener('click',init);//reset button
//player clicking start button/ note: DOM manipulation could allow them both to be the same.
/*---functions---*/

//check for winner(could trigger once there are no cards left)

init();

shuffle(playerHand);
shuffle(cpuHand);


    
//WIP
function cardFlip(i){
    // Element to table.
    //cpu sends element to table.
    table.cards.push(i[0]);
    if(table.cards.push){
    }
     return table
};
 //cpu sends element to table.but how can I get two elements sent
cardFlip(cpuHand);

//The hands at play lose there current card
function playedCard(i) {
    i.splice(0,1);
	return i
  };
  
  function cardJudge(){  //will need testing
    //activates once there are two cards on table
    
    if(a[0]>a[1]){
        playerPile.push(a[0],a[1])
    } else {cpuPile.push(a[0],a[1])
    return a
    }
};
//use reduce method to "tally up" card value

function checkForWinner(){
    if(playerHand.length===0&&cpuHand.length===0){

    }
    /*conditional that  activates once there are no more cards in either players hand
    */if(playerPile>cpuPile){
        console.log("You win")
    }else if(cpuPile>playerPile){
        console.log("Try Again")
    } else{
        "It's a draw"
    }
    //evaluates who has the greater total sum between players
};
// function render (){

    function init(){
        players= {
            player: 0,
            cpu: 0,
            tie : 0,
          
        } //Winner is determined by the greater total of pile
            /*Taking in to account suites are largly ignored. 
            refer to rps on assigning image/value
            */
           table.cards=[];
    }
    function shuffle (a){
        a.sort(() => Math.random()-0.5);
        return a
        render()
    };