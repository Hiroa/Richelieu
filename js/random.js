module.exports = class Random {
  static getInt(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
  }

  static getInts(count, min, max) {
    return [...Array(count)].map(() => Random.getInt(min, max));
  }
};
