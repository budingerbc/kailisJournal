(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.getWordCount = function(title, body) {
 var titleArray = title.split(" ");
 var bodyArray = body.split(" ");
 var wordCount = titleArray.length + bodyArray.length;
 return wordCount;
};

Entry.prototype.getVowelConsonantCount = function(title, body) {
  var vowelCount = 0;
  var consonantCount = 0;
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var titleArray = title.split('');
  var bodyArray = body.split('');
  for (var i = 0; i < titleArray.length; i++) {
    if (vowels.includes(titleArray[i])) {
        vowelCount += 1;
      }
      else {
        consonantCount += 1;
      }
    }
  for (var j = 0; j < bodyArray.length; j++) {
    if (vowels.includes(bodyArray[j])) {
      vowelCount += 1;
    }
    else {
      consonantCount += 1;
    }
  }
  return ("<li>" + "Number of vowels: " + vowelCount + "</li>" + "<li>" + "Number of consonants: " + consonantCount + "</li>");
};

Entry.prototype.getTeaser = function(body) {
  var sentence = body.split(".");
  var firstSentence = sentence[0];
  var wordArray = firstSentence.split(" ");
  if (wordArray.length < 9) {
    return (firstSentence + ".");
  }
    else {
     var firstEightWords = wordArray.slice(0,8).join(" ");
     return firstEightWords;
    }
 };

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    // var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var teaser = entry.getTeaser(body);
    $('#output').append("<li>" + "Entry snippet: " + teaser + "</li>");
  });
});

var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var wordCount = entry.getWordCount(title, body);
    $('#output').append("<li>" + "Number of words in entry: " + wordCount + "</li>");
  });
});

var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);
    var vowelConsonantCount = entry.getVowelConsonantCount(title, body);
    $('#output').append(vowelConsonantCount);
  });
});

},{"./../js/journal.js":1}]},{},[2]);
