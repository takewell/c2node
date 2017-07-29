'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('./jinkou.txt');
const rl = readline.createInterface({ 'input': rs, 'output': {} });
const map = new Map();

rl.on('line', (lineString) => {
  // console.log(lineString);
  const columns = lineString.split(' ');
  // console.log(columns);
  const pref = columns[0];
  const popu = parseInt(columns[1]);
  const area = parseInt(columns[2]);
  const popu_density = (popu / area).toFixed(2) + '人/km2';
  map.set(pref, popu_density);
});

rl.on('close', () => {
  let data = "";
  map.forEach((value, key) => {
    data += key + '\t' + value + '\n';
  }, map);
  fs.writeFile('./mitsudo.txt', data, ({ encoding: 'utf-8' }), (err) => {
    if (err) throw err;
    console.log('The file has benn saved!');
  });
});