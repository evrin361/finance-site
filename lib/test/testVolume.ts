import { calculateVolume } from "../indicators/volume";

const volumes = [
  1000, 1200, 1100, 1150, 1050,
  1300, 1250, 1400, 1500, 1600,
];

const result = calculateVolume(volumes);

console.log(result);
