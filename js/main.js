const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min]; // Деструктуризация значений
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(7, 50);

const getRandomArbitrary = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  return (Math.random() * (max - min)) + min;
};

getRandomArbitrary(7, 50);


const author = () => {
  const i = Math.round(Math.random() * (10 - 1) + 1);
  const avatar =  `img/avatars/user${  i  }.png`;
};

const STRINGS = [
  'title',
  'address',
  'type',
  'checkin',
  'checkout',
  'features',
  'description',
  'photos',
];

const NUMBERS = [
  'price',
  'rooms',
  'guests',
];

const moreDetails = () => {
  const randomStringIndex = _.random(0, STRINGS.length - 1);
  const randomNumberIndex = _.random(0, NUMBERS.length - 1);

  return {
    string: STRINGS[randomStringIndex],
    number: NUMBERS[randomNumberIndex],
  };
};

console.log(
  moreDetails(),
);

const generalDetails = Array.from({length: 10});

console.log(generalDetails);

const map = () => {
  const location = {
    width: {
      lat: 35.65000, lng: 139.70000,
    },
    height: {
      lat: 139.70000, lng: 139.80000,
    },
  };
};
