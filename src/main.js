const totelStack = 100;

betResult = () => {
randomBet = Math.floor(Math.random () * 10) % 2;
  switch(randomBet){
        case 1:
            return 1
        case 0:
            return -1
  }
};
 
let result = [];
dayCount = 0

for(let i=0; i<20; i++){
    dayCount++
    var dayStack=0;
    while (dayStack < 50 && dayStack > -50){
        dayStack = dayStack + betResult()
    }
    result.push(dayStack);
}

console.log(result);



