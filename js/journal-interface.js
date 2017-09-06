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
