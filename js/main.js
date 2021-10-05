const LODGING_OFFERS = 10;

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

const lodging = {
  avatar: 'img/avatars/user'{'getRandomInt(0, 10)'}'.png',
  title: 'Жилье',
  address: '{{'getRandomArbitrary' (lat: 35.65000, lng: 139.70000)}}', '{{'getRandomArbitrary' (lat: 139.70000, lng: 139.80000)}}',
  price: (0, 100),
  type: [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  rooms: [
    getRandomInt(0, 2),
  ],
  guests: [
    getRandomInt(0, 6),
  ],
  checkin: [
    '12:00',
    '13:00',
    '14:00',
  ],
  checkout: [
    '12:00',
    '13:00',
    '14:00',
  ],
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  description: [
    'Опишите ваше жильё',
  ],
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

const createLodging = () => ({
  avatar: lodging.avatar,
  title: lodging.title,
  address: lodging.address,
  price: lodging.price,
  type: lodging.type,
  rooms: lodging.rooms,
  guests: lodging.guests,
  checking: lodging.checking,
  checkout: lodging.checkout,
  features: lodging.features,
  description: lodging.description,
  photos: lodging.photos,
});

const arrayLodging = Array.from({length: LODGING_OFFERS});
