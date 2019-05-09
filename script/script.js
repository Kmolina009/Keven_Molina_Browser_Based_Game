//Main Goal: Link the events together
//Make sure to get back to your CSS
/*---Constants---*/
var players;

/*----app's state(variable)----*/
var winner, score, playerHand,cpuHand,playerPile,cpuPile,table
/*---cached elements references---*/

playerHand= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
                    1,2,3,4,5,6,7,8,9,10,11,12,13,14,];
    

playerPile=[];
cpuHand = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
1,2,3,4,5,6,7,8,9,10,11,12,13,14];
cpuPile=[];

table = {
cards: [],
judge:function(){ if(this.cards.length === 2){
cardJudge(table.cards)()
        }  
    }
};

//count of player card pile to determine winner.
/*---event listener---*/
//player clicking their card.

document.getElementById('player').addEventListener('click',function(){
    cardFlip(playerHand)
    })

var playerCardT=document.getElementById('p1-card').addEventListener();//player card on table

var cpuCardT=document.getElementById('cpu-card').addEventListener();//computer card on table

document.getElementsByTagName('button').addEventListener('click',init);//reset button

// var table = document.getElementById('table').addEventListener(onload,cardJudge)// table, if two values are present, function judge

//player clicking start button/ note: DOM manipulation could allow them both to be the same.
/*---functions---*/
//"shuffle card deck.", assign cards to each player "randomly".

function cardFlip(arr){
    // Element to table.
    //cpu sends element to table.
    arr.sort(() => Math.random()-0.5);
    table.cards.push(arr[0]);
     arr.splice(0,1);
     cpuFlip()
     return table.cards
 };
 function cpuFlip(){
     if(table.cards.length===1){
        cpuHand.sort(() => Math.random()-0.5);
    table.cards.push(cpuHand.pop());
    cardJudge(table);
     return table.cards
     
     }}
 
 //The hands at play lose there current card
// function playedCard(i) {
//     i.splice(0,1);
//      return i
//   };
 function cardJudge(table){  //will need testing
    //activates once there are two cards on table
    if(table.cards[0]>table.cards[1]){
        playerPile.push(table.cards[0],table.cards[1])
    } else {cpuPile.push(table.cards[0],table.cards[1])
    }
    table.cards.splice(0,2)
    return table
 };

 checkForWinner = function(){
    if(playerHand.length===0&&cpuHand.length===0){
        cpuPile.reduce((acc,currentval)=> acc+currentval);
        playerPile.reduce(total,num);
        getWinner();
    }    
 }
    /*conditional that  activates once there are no more cards in either players hand
    
*/
 function  getWinner(){
    if(playerPile>cpuPile){
        alert("You Win")
    }else if(cpuPile>playerPile){
        alert("Try Again")
    } else{
        alert("It's a Draw");
    }
    //evaluates who has the greater total sum between players
};



// playedCard(cardFlip());
// playedCard(cardFlip());

init ();

function init(){
    shuffle(playerHand);
    shuffle(cpuHand);

    players= {
        player: 0,
        cpu: 0,
        tie : 0,
    }
           };
           
           console.log(cpuFlip);
 console.log(cpuHand);
console.log(cpuPile);
console.log(table.cards);
console.log(playerHand);
console.log(playerPile);// table, if two values are present, function judge}
    //Winner is determined by the greater total of pile

       
/*Another version that involves pushing things to the table
That prompts the cpu to push
function cardFlip(i){
   // Element to table.
   //cpu sends element to table.
   table.cards.push(i[0]);
   if(table.cards.push){
   }
    return table
};
*/
      

//WIP






 
//use reduce method to "tally" card value


   //evaluates who has the greater total sum between players

// function render (){

// }
