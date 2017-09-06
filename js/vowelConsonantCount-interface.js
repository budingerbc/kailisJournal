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
