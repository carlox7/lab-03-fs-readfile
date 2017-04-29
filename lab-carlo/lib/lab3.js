'use strict';

const fs = require('fs');

module.exports = function(callback) {
  let hexText = [];

  fs.readFile(`${__dirname}/../data/textOne.txt`, function(err, data){
    if(err) throw err;
    hexText.push(data.toString('hex', 0, 8));

    fs.readFile(`${__dirname}/../data/textTwo.txt`, function(err, data){
      if(err) throw err;
      hexText.push(data.toString('hex', 0, 8));

      fs.readFile(`${__dirname}/../data/textThree.txt`, function(err, data){
        if(err) throw err;
        hexText.push(data.toString('hex', 0, 8));
        console.log(hexText);
        if(callback) return(callback(hexText));
      });
    });
  });
};
