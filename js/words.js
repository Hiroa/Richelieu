const fs = require('fs');
const Random = require('./random');

module.exports = class Words {
  constructor(path) {
    this.dict = Words.loadDictionary(path);
  }

  getWord() {
    const random = Random.getInt(0, this.dict.length);

    return this.dict[random];
  }

  static loadDictionary(path) {
    return fs.readFileSync(path, { encoding: 'utf-8' })
      .split('\r\n')
      .reduce((results, word) => {
        if (results[0]) {
          results.push(word);
        } else {
          var results = new Array(1);
          results[0] = word;
        }

        return results;
      }, {});
  }
};
