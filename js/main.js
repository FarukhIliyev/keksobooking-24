function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

getRandomInt(0, 100);


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomArbitrary(0, 100);
