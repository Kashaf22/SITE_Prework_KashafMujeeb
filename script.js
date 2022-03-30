/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/


const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var pattern = [1, 2, 5, 3, 1, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0; //To give players strike

function startGame(){
progress = 0;
mistakes =0;
gamePlaying = true;
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
document.getElementById('output').innerHTML = "You have 2 strikes left.";
document.body.style.backgroundImage = "url('https://cdn.glitch.global/a426efd1-427f-482a-b61d-c72a48c40e8d/animate-bird-slide-25.gif?v=1648582437547')"
playClueSequence();
}

function stopGame(){
gamePlaying = false;

document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
document.body.style.backgroundImage = "url('https://cdn.glitch.global/a426efd1-427f-482a-b61d-c72a48c40e8d/animate-bird-slide-25.gif?v=1648582437547')"  
}

//Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 100
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  document.body.style.backgroundImage = "url('https://cdn.glitch.global/a426efd1-427f-482a-b61d-c72a48c40e8d/giphy%20(2).gif?v=1648603139320')"
}
function winGame(){
  stopGame();
  alert("Game Over. You won.");
  document.body.style.backgroundImage = "url('https://cdn.glitch.global/a426efd1-427f-482a-b61d-c72a48c40e8d/cf22171bbda1f35.webp?v=1648603135664')"
}

                 
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }
  else{
    mistakes++;
       if(mistakes == 2) {
      alert("You got 2 strikes!")
      document.getElementById('output').innerHTML = "No more strikes left. Sorry, You lost the game."
      loseGame();
}
        else {
      alert("You guessed the wrong clue ! You got a strike")
      document.getElementById('output').innerHTML = "You have " + mistakes + " strike left";
      playClueSequence()
     }
  }
}
const myFunction1 = () => {
  document.getElementById("first").style.display ='block';
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  }


const myFunction2 = () => {
   
  document.getElementById("second").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
}


const myFunction3 = () => {
  
  document.getElementById("third").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("fourth").style.display ='none'
  document.getElementById("fifth").style.display ='none'
  }

const myFunction4 = () => {
  
  document.getElementById("fourth").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fifth").style.display ='none'
}

const myFunction5 = () => {
   
  document.getElementById("fifth").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
  document.getElementById("fourth").style.display ='none'
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
