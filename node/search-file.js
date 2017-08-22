'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('./mitsudo.txt');
const rl = readline.createInterface({ 'input': rs, 'output': {} });
const map = new Map();

rl.on('line', (lineString) => {
  const columns = lineString.split('\t');
  const pref = columns[0];
  const popu_density = columns[1];
  map.set(pref, popu_density);
});

rl.on('close', () => {
  console.log('都道府県名を入力してください。(ctrl+cで終了)');
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (data) => {
    let a = data.slice(0, data.length - 1);
    console.log(a + "\t" + map.get(a));
  });
});