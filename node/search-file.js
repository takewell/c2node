'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('./mitsudo.txt');
const rl = readline.createInterface({ 'input': rs, 'output': {} });
const map = new Map();

rl.on('line', (lineString) => {
  const columns = lineString.split('\t');
  // console.log(columns);
  const pref = columns[0];
  const popu_density = columns[1];
  map.set(pref, popu_density);
});

rl.on('close', () => {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (data) => {
    console.log(map.get(data));
  });
});