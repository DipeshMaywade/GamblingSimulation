const totelStack = 100;

bet = () => {
randomBet = Math.floor(Math.random () * 10) % 2;
  switch(randomBet){
        case 1:
            return 1
        case 0:
            return -1
  }
};
 
let dayStack=0;
while (dayStack < 50 && dayStack > -50){
    dayStack = dayStack + bet()
}

if(dayStack == 50){
    console.log("You won 50% of the stake");
}else if(dayStack == -50){
    console.log("You lose 50% of the stack");
}


