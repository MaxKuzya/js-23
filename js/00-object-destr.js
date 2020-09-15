const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

const badHotel = {
  name: 'Bad Resort Hotel',
  capacity: 15.5,
};

// Объявим переменные и присвоим им значения из объекта
const { name, stars, status } = hotel;

/*
    const name = hotel.name;
    const stars = hotel.stars;
    const status = hotel.status;
  */

const { name: hotelName } = hotel;
/*
    const hotelName = hotel.name;
  */

const { stars = 1 } = badHotel;
/*
    const noStarsPropery = badHotel.stars === undefined;
    const stars = noStarsPropery ? 1 : badHotel.stars;
  */

const { name, ...hotelWithoutName } = hotel;

console.log(hotel, hotelWithoutName);

console.log(name, stars, status); // "Resort Hotel", 5, undefined
