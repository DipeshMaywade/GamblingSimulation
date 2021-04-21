betResult = () => {
  randomBet = Math.floor(Math.random() * 10) % 2;
  switch (randomBet) {
    case 1:
      return 1;
    case 0:
      return -1;
  }
};

let monthResult = [];
let lostCountMap = new Map();
let wonCountMap = new Map();

dayCount = 0;

for (let day = 0; day < 20; day++) {
  dayCount++;
  let dayStack = 0;
  let wonCount = 0;
  let lostCount = 0;

  while (dayStack < 50 && dayStack > -50) {
    let result = betResult();
    if (result == 1) wonCount++;
    if (result == -1) lostCount++;
    dayStack = dayStack + result;
  }
  monthResult.push(dayStack);
  if (dayStack == 50) {
    wonCountMap.set(wonCount, dayStack);
  } else {
    lostCountMap.set(lostCount, dayStack);
  }
}
console.log(wonCountMap);

console.log(lostCountMap);

finalStack = monthResult.reduce((a, b) => a + b, 0);

console.log(`After ${dayCount} Days of Palying Final Amount is ${finalStack}`);
