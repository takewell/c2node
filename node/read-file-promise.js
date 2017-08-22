'use strict';
const fs = require('fs');
const filename = './jinkou.txt';

Promise.resolve({}).then((object) => {
  return new Promise((resolve) => {
    let isExist = false;
    try {
      fs.startSync(filename);
      return true;
    } catch (err) {
      console.log("Can not read this file")
      return false;
    }
    return resolve(isExist);
  });
}).then((filename) => {
  return new Promise((resolve) => {
    fs.readFile(filename, { encoding: 'utf-8' }, (err, content) => {
      return resolve(content);
    });
  });
}).then((content) => {
  return new Promise((resolve) => {
    const popu = content.replace(/\d{6,8}/, "");
    console.log(popu);
    fs.writeFile(filename + '.txt', popu, () => {
      return resolev();
    });
  });
});