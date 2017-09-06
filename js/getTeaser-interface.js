var Entry = require('./../js/entry.js').entryModule;

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
