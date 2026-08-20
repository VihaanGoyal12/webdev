let guess = 0;
let number = 10;
while(true){
    guess = parseInt(prompt("guess a number"));
    if(guess == number) {
        break;
        alert('Winner');
    }
}