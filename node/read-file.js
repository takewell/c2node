'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('./jinkou.txt');
const rl = readline.createInterface({ 'input': rs, 'output': {} });

rl.on('line', (lineString) => {
  const columns = lineString.split(' ');
  const pref = columns[0];
  const popu = parseInt(columns[1]);
  const area = parseInt(columns[2]);
  console.log(pref + "\t" + popu + '人' + "\t" + area + 'km2');
});