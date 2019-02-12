var bank = 
["nightmare","book","booger","water", "bottle", "pencil", "table","window", "acid", "sweater", "cloud", "snacks","bubble","backpack","chair","coffee","candy","hero"];
// In the line above i created a variable with all of the words i wanted to use inside of my game. That the player would have to try and guess to win.
var letters = 
["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// The line above are all the letters that the player can guess to try and figure out the correct word.

var word=""
var guessnum =0
var note=""
var countwordlgenth = 0
var guessedletters= []    
var wrongletters= []
// In the line above I wanted to create variables that would be use throughout my project. so i placed them at the top.
function getWord(){
  for (i = 0; i < 20; i++){
    document.getElementById(i).innerHTML = "";
  }
// the line above is my for loop.
  guessedletters=[]
  wrongletters=[]
  word= bank[Math.floor((Math.random() * bank.length) + 1)]
// the line above is what will choose a random word, for the player to try and guess. the random word comes from the var wordBank above
  console.log(word)
  guessnum = word.length+5;
  countwordlgenth = word.length;
  for (i = 0; i < word.length; i++){
// they're three parts to our function and those are stated above.
    document.getElementById(i).innerHTML = "_";
// console.log actually runs our function above. and that is what that line is doing above. its running the function and giving us something back
  }
// the lines below are similar to alerts. when a wrong letter is guessed then it will be added to output3. which is under the wrong letters line.
  document.getElementById("output3").innerHTML = wrongletters;  
  document.getElementById("output1").innerHTML = guessedletters;
  document.getElementById("output2").innerHTML = guessnum;
}

function guessed()  {
      var guessletter= document.getElementById("guess").value;
      var lettercheck1 = 'False';
      console.log(guessletter);  
      var lettercheck2 = 'False';
      for (i = 0; i < guessedletters.length; i++) {
        if (guessedletters[i]== guessletter){
          lettercheck1='True';
        }}
      if (lettercheck1 =='False'){
        guessedletters.push(guessletter);
         guessnum=guessnum-1;
      }
      for (i = 0; i < word.length; i++){
        if (word[i]==guessletter){
          lettercheck2 = 'True';
          if (lettercheck2=='True'){
            document.getElementById(i).innerHTML = guessletter; 
            countwordlgenth=countwordlgenth-1;
          }
        }
      }
      if (lettercheck2 == 'False' && lettercheck1=="False") {
        wrongletters.push(guessletter)
        lettercheck2='False'
      } 
      if (guessnum==0){

          note="You lost"
          wrongletters=[]
          guessedletters=[]
          guessnum=[]
          getWord()
        } 

   document.getElementById("output3").innerHTML = wrongletters;  
   document.getElementById("output1").innerHTML = guessedletters;
   document.getElementById("output2").innerHTML = guessnum;
   document.getElementById("output4").innerHTML = note;
   document.getElementById("guess").value = "";
}