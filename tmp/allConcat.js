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

$(document).ready(function(){
  $('#time').text(moment());
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
