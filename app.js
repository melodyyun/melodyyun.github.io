/**
* LOGIC
*/

var score = 0;
var playerChoice;

//this is an object
var readable = {
  '0': 'Rock',
  '1': 'Paper',
  '2': 'Scissors'
}

//function to generate random number between 0-3 (will never actually reach 3)
var cpuChoice ={
  init: function(){
    this.store = Math.floor(Math.random()*3);
    this.text = readable[this.store];
  },
  store: '',
  text: '',
}

/** to test above code:
cpuChoice.init();
console.log('cpuChoice is:', cpuChoice.store, cpuChoice.text);
*/

//used to determine winner
var order =[0, 1, 2, 0]; //Rock < Paper < Scissors < Rock (0<1<2<0)

var chooseWinner = function(player, cpu){
  if(order[player] === order[cpu]){
    backgroundColor('#f9eb14');
    return "The game is tied. Try again?";
  }
  if(order[player] === order[cpu + 1]){
    backgroundColor('#66b266');
    score++;
    return "You won!";
  }else{
    backgroundColor('#FF7F7F');
    score--;
    return "You lose :(";
  }
}

//colors:   red(#FF7F7F)

//console.log(chooseWinner(1,0));

/**
* UI
*/

//change color of background


function backgroundColor(color){
  document.body.style.backgroundColor = color;
}
//  init: function changeBackground(color) {
//   document.body.style.background = color;
//}




var paragraph = document.querySelector('p');

var assignClick = function(tag, pos){
  //assign a click listener
  tag.addEventListener("click", function(){
    //set the player's choice
    playerChoice = pos; //this is a variable
    //give feedback to the cpu cpuChoice
    cpuChoice.init();
    paragraph.innerText = "The computer chose: " + cpuChoice.text;
    //determine a winner
    //display the winner and the current score
    paragraph.innerText += "\n" +  chooseWinner(playerChoice, cpuChoice.store);
    paragraph.innerText += "\n" + "SCORE: " + score;
  })

}
//listener for playerChoice
var images = {
  tags: document.getElementsByTagName('img'),
  init: function(){
    for(var step = 0; step < this.tags.length; step++){
      assignClick(this.tags[step], step);
    }
  }
}

images.init();
