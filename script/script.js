//Main Goal: Link the events together
//Make sure to get back to your CSS
/*---Constants---*/
var players;

/*----app's state(variable)----*/
var winner, score, playerHand,cpuHand,playerPile,cpuPile,table
/*---cached elements references---*/

playerHand= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
            1,2,3,4,5,6,7,8,9,10,11,12,13];
    

playerPile=[];
cpuHand = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,
            1,2,3,4,5,6,7,8,9,10,11,12,13];
cpuPile=[];

table = {
cards: [],
judge:function(){ if(this.cards.length === 2){
cardJudge(table.cards)()
        }  
    }
};
var cardImageP= {
    function(){ 
    switch(table.cards[0]){
        case [0]===1:
        'https://i.imgur.com/lR2kJlQ.png';
        break;
        case [0]===2:
        'https://i.imgur.com/br4Zus5.png';
        break;
        case[0]===3:
        'https://i.imgur.com/8wozF7N.png';
        break;
        case[0]===4:
        'https://i.imgur.com/mlF0qxO.png';
        break;
        case[0]===5:
        'https://i.imgur.com/41iFQ55.png';
        break;
        case[0]===6:
        'https://i.imgur.com/o3mJVDa.png';
        break;
        case[0]===7:
        'https://i.imgur.com/J5E2IGe.png';
        break;
        case[0]===8:
        'https://i.imgur.com/ZTqalsj.png';
        break;
        case[0]===9:
        'https://i.imgur.com/WTmdMSP.png';
        break;
        case[0]===10:'https://i.imgur.com/hdkuj2g.png';
        break;
        case[0]===11:
        'https://i.imgur.com/AKcxW92.png';
        break;
        case[0]===12:
        'https://i.imgur.com/lTD1h7O.png';
        break;
        case[0]===13:
        'https://i.imgur.com/4HyHRwb.png';
        
    }
    }
};
//count of player card pile to determine winner.
/*---event listener---*/
//player clicking their card.

document.getElementById('player').addEventListener('click',function(){
    cardFlip(playerHand)
    });

var msg = document.getElementById("msg");
var playerCardT=document.getElementById('p1-card').src= cardImageP();//player card on table//figure out what's needed
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

 function cardJudge(table){  
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
    //conditional that  activates once there are no more cards in either players hand
 function  getWinner(){
    if(playerPile>cpuPile){
        msg.innerHTML= "You Win"
    }else if(cpuPile>playerPile){
       msg.innerHTML = "Try Again"
    } else{
        msg.innerHTML = "It's a Draw"
    }
    //but does it work
};
init ();
function init(){
    shuffle(playerHand);
    shuffle(cpuHand);
console.log(cpuFlip);
console.log(cpuHand);
console.log(cpuPile);
console.log(table.cards);
console.log(playerHand);
console.log(playerPile);
}