'use strict';

const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');

describe('#readText', function(){
  it('should read a file, and produce a hex buffer', function() {
    fs.readFile(`${__dirname}/data/textOne.txt`, function(err, data){
      let bufferData = data;
      expect(bufferData).to.be.equal(typeof Buffer.from('4669727374206669'));
    });
  });
});

describe('#readFile', function(){
  it('should read a file, and produce a hex buffer', function(done) {
    fs.readFile(`${__dirname}/data/textTwo.txt`, function(err, data){
      let bufferData = data;
      expect(bufferData).to.be.equal(typeof Buffer.from('5365636f6e642066'));
    });
    done();
  });
});

describe('#readFile', function(){
  it('should read a file, and produce a hex buffer', function(done) {
    fs.readFile(`${__dirname}/data/textThree.txt`, function(err, data){
      let bufferData = data;
      expect(bufferData).to.be.equal(typeof Buffer.from('4f6e63652075706f'));
    });
    done();
  });
});
