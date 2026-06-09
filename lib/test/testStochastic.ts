import { calculateStochastic } from "../indicators/stochastic";

const highs = [
  100,101,102,103,104,105,106,107,108,109,
  110,111,112,113,114,115,116,117,118,119,
];

const lows = [
   95,96,97,98,99,100,101,102,103,104,
  105,106,107,108,109,110,111,112,113,114,
];

const closes = [
   98,99,100,101,102,103,104,105,106,107,
  108,109,110,111,112,113,114,115,116,117,
];

const stochastic = calculateStochastic(highs, lows, closes);

console.log(stochastic);