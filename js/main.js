const getRandomInt = (min, max) => {
  if (min >= max) {
    max = Math.ceil(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (max-min)) + min;
  }
};

getRandomInt(0, 100);

const getRandomArbitrary = (min, max) => {
  if (min >= max) {
    max = Math.ceil();
    min = Math.floor();
    return Math.random() * (max - min) + min;
  }
};

getRandomArbitrary(0, 100);
