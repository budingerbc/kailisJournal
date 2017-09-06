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
