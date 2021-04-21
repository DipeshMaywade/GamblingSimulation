const totelAmount = 100;
const betAmount = 1;

let betCount = 0;

bet = () => {
  randomBet = Math.floor(Math.random() * 10) % 2;
  betCount++

  switch(randomBet){
        case 1:
            console.log("Bet Win..");
            break;
        case 0:
            console.log("Bet Loss..");
            break;
        default:
            console.log("No Result");
            
  }
  console.log("bet count: " + betCount);
  return betCount;
};

bet();
