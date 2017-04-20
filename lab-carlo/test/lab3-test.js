const expect = require('chai').expect;
const Buffer = require('buffer').Buffer;
const fs = require('fs');

fs.readFile(`${__dirname}/data/textOne.txt`, function(err, data){
  if(err) throw err;
  let bufferOne = Buffer.from(data);
  console.log(bufferOne.toString('hex', 0, 8));
  //console.log(bufferOne.toString('UTF-8', 0, 8));

  fs.readFile(`${__dirname}/data/textTwo.txt`, function(err, data){
    if(err) throw err;
    let bufferTwo = Buffer.from(data);
    console.log(bufferTwo.toString('hex', 0, 8));
    //console.log(bufferTwo.toString('UTF-8', 0, 8));

    fs.readFile(`${__dirname}/data/textThree.txt`, function(err, data){
      if(err) throw err;
      let bufferThree = Buffer.from(data);
      console.log(bufferThree.toString('hex', 0, 8));
      //console.log(bufferThree.toString('UTF-8', 0, 8));
    });
  });
});



describe('#readFile', function(){
  it('should read a file, and produce a hex buffer', function() {
    fs.readFile(`${__dirname}../data/textOne.txt`, function(err, data){
      let bufferData = data;
      expect(bufferData).to.be.equal(typeof Buffer.from('4669727374206669'));
    });
  });
});

describe('#readFile', function(){
  it('should read a file, and produce a hex buffer', function(done) {
    fs.readFile(`${__dirname}../data/textTwo.txt`, function(err, data){
      let bufferData = data;
      expect(bufferData).to.be.equal(typeof Buffer.from('5365636f6e642066'));
    });
    done();
  });
});

describe('#readFile', function(){
  it('should read a file, and produce a hex buffer', function(done) {
    fs.readFile(`${__dirname}../data/textThree.txt`, function(err, data){
      let bufferData = data;
      expect(bufferData).to.be.equal(typeof Buffer.from('4f6e63652075706f'));
    });
    done();
  });
});
