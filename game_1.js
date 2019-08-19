

var scores, roundScore, activePlayer, gamePlaying;


init();

//document.querySelector('#current-' +activePlayer).textContent = dice;


//var x = document.querySelector('#score-0').textContent;
//console.log(x);





document.querySelector('.btn-roll').addEventListener('click', function(){

if(gamePlaying){

    var dice = Math.floor(Math.random() * 6) + 1;

    //2. display number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' +dice+ '.png';
    
   //3. Update the round score if the rolled number was not a 1
   if (dice !== 1){
     //add score
     roundScore += dice;
     document.querySelector('#current-' + activePlayer).textContent = roundScore;
   }
   else{
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     //active red dot symbol
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     document.querySelector('.dice').style.display = 'none';

   }

}

});

document.querySelector('.btn-hold').addEventListener('click', function(){

       if(gamePlaying){
         //add current score to global score
         scores[activePlayer] += roundScore;

         //Update the UI
         document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];

         //check if player own the game
         if (scores[activePlayer] >= 10){
           document.querySelector('#name-' + activePlayer).textContent = 'Congrats Winner!' ;
           document.querySelector('.dice').style.display = 'none';
           document.querySelector('.player-' +activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' +activePlayer + '-panel').classList.remove('active');
           gamePlaying = false;
         } 

        else{
         //next player
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     //active red dot symbol
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     document.querySelector('.dice').style.display = 'none';

        }
      }

});




document.querySelector('.btn-new').addEventListener('click', init);


function init(){

  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');



}
