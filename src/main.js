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
  var roundCount = 0;
  let wonCount = 0;
  let lostCount = 0;

  let dayStack = 0;

  while (dayStack < 50 && dayStack > -50) {
    roundCount++;
    let result = betResult();
    if (result == 1) wonCount++;
    if (result == -1) lostCount++;
    dayStack = dayStack + result;
  }
  monthResult.push(dayStack);
  if (wonCount > lostCount) {
    wonCountMap.set(dayCount, wonCount);
  } else {
    lostCountMap.set(dayCount, lostCount);
  }
}

//For Most Win
wonCountArray = [];
wonCountMap.forEach((value, keys) => {
  wonCountArray.push(value);
});
let mostWin = Math.max.apply(Math, wonCountArray);

wonCountMap.forEach((value, keys) => {
  if (value == mostWin) {
    console.log(`The Day When Gambler Win The Most is ${keys}`);
  }
});

console.log(wonCountMap);

//For Most Lost 
lostCountArray = [];
lostCountMap.forEach((value, keys) => {
  lostCountArray.push(value);
});
let mostLost = Math.max.apply(Math, lostCountArray);

lostCountMap.forEach((value, keys) => {
  if (value == mostLost) {
    console.log(`The Day When Gambler Lost The Most is ${keys}`);
  }
});

console.log(lostCountMap);

//For Calculate Final Stack at monthEnd 
finalStack = monthResult.reduce((a, b) => a + b, 0);

console.log(`After ${dayCount} Days of Palying Final Amount is ${finalStack}`);
