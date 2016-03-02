var expect = require('chai').expect;
var algorithms = require('./sort');

var RANDOM = [], SORTED = [], REVERSE = [];
for (var i = 0; i < 30000; i++) {
  RANDOM.push(Math.floor(Math.random() * 30000));
  SORTED.push(i);
  REVERSE.push(30000 - 1 - i);
}
var RANDOM_SORTED = RANDOM.slice().sort((a, b) => a - b);

for (var name in algorithms) {
  var sort = algorithms[name];
  describe(name, function() {
    var random, sorted, reverse;
    before(() => {
      random = RANDOM.slice();
      sorted = SORTED.slice();
      reverse = REVERSE.slice();
    });

    it('should sort a random array', () => {
      expect(this(random)).to.eql(RANDOM_SORTED);
    });

    it('should sort a sorted array', () => {
      expect(this(sorted)).to.eql(SORTED);
    });

    it('should sort a reversed array', () => {
      expect(this(reverse)).to.eql(SORTED);
    });

  }.bind(sort));
}
