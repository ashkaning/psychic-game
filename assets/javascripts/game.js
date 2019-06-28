var randomWordGuessGame = ['ashkan', 'george', 'celine'];
var wordGame = randomWordGuessGame[Math.floor(Math.random() * randomWordGuessGame.length)];//Choosing random array or string
var wordGameStr = Array.from(wordGame); //convert word to array        
var wordTry = 10; //max try
var winCount = 0;
var loseCount = 0;
var winUserTemp = [];//temp array to save the user guessing
var winUser = []; //initial an array to store user's correct letter input
var loseUser = []; //initial an array to store user's wrong letter input
var match = false;
var wonGame = new Audio('assets/sounds/won.mp3'); 
var lostGame = new Audio('assets/sounds/lost.mp3');
for (i = 0; i < wordGameStr.length; i++) {
    winUserTemp.push('-')
}
document.getElementById("blanks").innerHTML = winUserTemp.join(' ');
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/images/"+wordGame+".jpg");
    x.setAttribute("alt", wordGame);
    document.getElementById("images").appendChild(x);  
/////////////////get lettters from user////////////////
document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase(); //convert to lower case and catch the letters on keyUp

    for (i = 0, j = wordGame.length; i <= j; i++) {
        if (wordGameStr[i] == userGuess) {
            match = true;
        }
    }
    if (match && wordTry > 0) {
        storeCorrectCharacters();
        match = false;
    }
    else if (match === false && wordTry > 0) {
        storeWrongCharacters()
        match = false;
    }
    else {
        document.getElementById("remained").innerHTML = ('You lost the game :). The Word is:' + wordGame);
        lostGame.play();
    }
    function storeCorrectCharacters() {
        winUser.push(userGuess);
        arrayCompare(wordGameStr, userGuess);
        if (wordGameStr.toString() == winUserTemp.toString()) {
            wonGame.play();
            alert('Hey! You Won!')
            
        }
        this.wordTry = this.wordTry - 1;
        document.getElementById("userInput").innerHTML = winUser.join('');
        document.getElementById("remained").innerHTML = (wordTry);
    }
    function storeWrongCharacters() {
        loseUser.push(userGuess);
        this.wordTry = this.wordTry - 1;
        loseCount++;
        document.getElementById("userWrongInput").innerHTML = loseUser.join('');
        document.getElementById("remained").innerHTML = (wordTry);
    }
    function arrayCompare(arr1, arr2) {
        for (i = 0; i < arr1.length; i++) {
            var found = arr1.lastIndexOf(arr2);
            var found2 = arr1.indexOf(arr2);
        }
        winUserTemp.splice(found, 1, arr2);
        winUserTemp.splice(found2, 1, arr2);
        winCount++;
        document.getElementById("blanks").innerHTML = winUserTemp.join(' ');


    }
}
