var Entry = require('./../js/entry.js').entryModule;

describe('Entry', function() {
  var reusableEntry;
  beforeEach(function() {
    reusableEntry = new Entry('Hello', 'there');
  });
  it('should show how beforeEach() works', function() {
    console.log(reusableEntry);
  });
  it('should test whether an Entry has a title and a body', function () {
    expect(reusableEntry.title).toEqual('Hello')
    expect(reusableEntry.body).toEqual('there')
  });
  it('should correctly count the number of words in the title and body', function() {
    expect(reusableEntry.getWordCount()).toEqual(2);
  });
});
