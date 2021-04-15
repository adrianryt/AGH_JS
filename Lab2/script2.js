"use strict";
var expect = chai.expect;
var globalsum = 0;
var text = document.getElementById('paragraph');

function sum(x,y) {
	return x+y;
}


function litery(napis){
    var suma = 0;
    for (var i = 0; i < napis.length; i++){
        if(isNaN(napis[i])){
            suma+=1;
        }
    }
    return suma;
}

function cyfry(napis){
    var suma = 0;
    for (var i = 0; i < napis.length; i++){
        if(!isNaN(napis[i])){
            suma += parseInt(napis[i]);

        }
    }
    return suma;
}
function suma(napis){
    var i =0;
    var localsum = 0;
    while(!isNaN(napis[i])){
        localsum *=10;
        localsum += parseInt(napis[i]);
        i++;
    }
    globalsum += localsum;
    return globalsum;
}

var given_string;

given_string = window.prompt("Podaj ciąg znaków");
{
    while(given_string != null){
        console.log(given_string);
        var args = cyfry(given_string) + " " + litery(given_string) + " " + suma(given_string);
        console.log(args);
        text.innerHTML += given_string + "<br>" + "   " + cyfry(given_string) + " " + litery(given_string) + " " + suma(given_string) + "<br>"
        given_string = window.prompt("Podaj ciąg znaków");
    }
}

globalsum = 0;


describe('The sum() function', function() {
 it('Returns 4 for 2+2', function() {
   expect(sum(2,2)).to.equal(4);
 });
 it('Returns 0 for -2+2', function() {
   expect(sum(-2,2)).to.equal(0);
 });
});
describe('The cyfry() function', function() {
    it('Returns 3 for 111', function() {
      expect(cyfry("111")).to.equal(3);
    });
    it('Returns 0 for aba', function() {
      expect(cyfry("aba")).to.equal(0);
    });
    it('Returns 4 for aba112', function() {
        expect(cyfry("aba112")).to.equal(4);
    });
    it('Returns 5 for 23bab', function() {
        expect(cyfry("23bab")).to.equal(5);
    });
    it('Returns 0 for empty string ', function() {
        expect(cyfry('')).to.equal(0);
    });
   });
describe('The litery function', function() {
    it('Returns 0 for 111', function() {
      expect(litery("111")).to.equal(0);
    });
    it('Returns 3 for aba', function() {
      expect(litery("aba")).to.equal(3);
    });
    it('Returns 4 for abaa112', function() {
        expect(litery("abaa112")).to.equal(4);
    });
    it('Returns 5 for 23babab', function() {
        expect(litery("23babab")).to.equal(5);
    });
    it('Returns 0 for empty string ', function() {
        expect(litery('')).to.equal(0);
    });
   });
describe('The suma function', function() {
    it('Returns 111 for 111', function() {
      expect(suma("111")).to.equal(111);
    });
    it('Returns 111 for aba', function() {
      expect(suma("aba")).to.equal(111);
    });
    it('Returns 111 for abaa112', function() {
        expect(suma("abaa112")).to.equal(111);
    });
    it('Returns 134 for 23babab', function() {
        expect(suma("23babab")).to.equal(134);
    });
    it('Returns 134 for empty string ', function() {
        expect(suma('')).to.equal(134);
    });
   });