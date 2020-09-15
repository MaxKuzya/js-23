/**
 * Array.prototype.reduce
 *
 * - Возвращает значение (аккумулятор)
 */

const numbers = [1, 23, 66, 155, 43, 0];
const users = [
  {
    id: 4278278934,
    first_name: 'Pietra',
    last_name: 'Olek',
    email: 'polek0@unesco.org',
    gender: 'Female',
    message_count: 22,
    country: 'Poland',
  },
  {
    id: 2,
    first_name: 'Jacinda',
    last_name: 'Gronous',
    email: 'jgronous1@youtube.com',
    gender: 'Female',
    message_count: 47,
    country: 'United States',
  },
  {
    id: 2352354,
    first_name: 'Esme',
    last_name: 'Nulty',
    email: 'enulty2@blinklist.com',
    gender: 'Male',
    message_count: 100,
    country: 'Ukraine',
  },
  {
    id: 2352352354,
    first_name: 'Irina',
    last_name: 'Doerr',
    email: 'idoerr3@biblegateway.com',
    gender: 'Female',
    message_count: 98,
    country: 'Poland',
  },
  {
    id: 5,
    first_name: 'Logan',
    last_name: 'Lipprose',
    email: 'llipprose4@php.net',
    gender: 'Male',
    message_count: 72,
    country: 'United States',
  },
  {
    id: 6,
    first_name: 'Joscelin',
    last_name: 'McCrie',
    email: 'jmccrie5@blogspot.com',
    gender: 'Female',
    message_count: 23,
    country: 'Ukraine',
  },
  {
    id: 7,
    first_name: 'Christie',
    last_name: 'Yeeles',
    email: 'cyeeles6@parallels.com',
    gender: 'Female',
    message_count: 31,
    country: 'Poland',
  },
  {
    id: 8,
    first_name: 'Goldina',
    last_name: 'Heathcoat',
    email: 'gheathcoat7@va.gov',
    gender: 'Female',
    message_count: 11,
    country: 'United States',
  },
  {
    id: 9,
    first_name: 'Kingsley',
    last_name: 'Sayles',
    email: 'ksayles8@hp.com',
    gender: 'Male',
    message_count: 7,
    country: 'Poland',
  },
  {
    id: 10,
    first_name: 'Sanderson',
    last_name: 'Chastang',
    email: 'schastang9@reverbnation.com',
    gender: 'Male',
    message_count: 13,
    country: 'Ukraine',
  },
  {
    id: 11,
    first_name: 'Jeramie',
    last_name: 'De Beauchamp',
    email: 'jdebeauchampa@jigsy.com',
    gender: 'Male',
    message_count: 38,
    country: 'Ukraine',
  },
  {
    id: 12,
    first_name: 'Lorena',
    last_name: 'Fausch',
    email: 'lfauschb@bbb.org',
    gender: 'Female',
    message_count: 33,
    country: 'United States',
  },
  {
    id: 13,
    first_name: 'Carla',
    last_name: 'Vinau',
    email: 'cvinauc@myspace.com',
    gender: 'Female',
    message_count: 69,
    country: 'Poland',
  },
  {
    id: 14,
    first_name: 'Corabelle',
    last_name: 'Barthropp',
    email: 'cbarthroppd@ow.ly',
    gender: 'Female',
    message_count: 84,
    country: 'United States',
  },
  {
    id: 15,
    first_name: 'Madelaine',
    last_name: 'Crewdson',
    email: 'mcrewdsone@paypal.com',
    gender: 'Female',
    message_count: 80,
    country: 'Poland',
  },
  {
    id: 16,
    first_name: 'Haily',
    last_name: 'Cluitt',
    email: 'hcluittf@census.gov',
    gender: 'Male',
    message_count: 67,
    country: 'Poland',
  },
  {
    id: 17,
    first_name: 'Geoffry',
    last_name: 'Peskin',
    email: 'gpesking@house.gov',
    gender: 'Male',
    message_count: 16,
    country: 'Belarus',
  },
  {
    id: 18,
    first_name: 'Neale',
    last_name: 'Thewles',
    email: 'nthewlesh@seattletimes.com',
    gender: 'Male',
    message_count: 95,
    country: 'Ukraine',
  },
  {
    id: 19,
    first_name: 'Alma',
    last_name: 'Seine',
    email: 'aseinei@google.co.uk',
    gender: 'Female',
    message_count: 7,
    country: 'United States',
  },
  {
    id: 20,
    first_name: 'Riannon',
    last_name: 'Matyashev',
    email: 'rmatyashevj@netvibes.com',
    gender: 'Female',
    message_count: 82,
    country: 'Ukraine',
  },
  {
    id: 21,
    first_name: 'Brandais',
    last_name: 'Duligal',
    email: 'bduligalk@e-recht24.de',
    gender: 'Female',
    message_count: 22,
    country: 'United States',
  },
  {
    id: 22,
    first_name: 'Rocky',
    last_name: 'De Giorgi',
    email: 'rdegiorgil@ustream.tv',
    gender: 'Male',
    message_count: 55,
    country: 'Poland',
  },
  {
    id: 23,
    first_name: 'Pepe',
    last_name: 'Lepper',
    email: 'plepperm@purevolume.com',
    gender: 'Male',
    message_count: 65,
    country: 'Poland',
  },
  {
    id: 24,
    first_name: 'Urson',
    last_name: 'Chaloner',
    email: 'uchalonern@hubpages.com',
    gender: 'Male',
    message_count: 16,
    country: 'Poland',
  },
  {
    id: 25,
    first_name: 'Teressa',
    last_name: 'Litchmore',
    email: 'tlitchmoreo@shareasale.com',
    gender: 'Female',
    message_count: 15,
    country: 'Ukraine',
  },
  {
    id: 26,
    first_name: 'Leroy',
    last_name: 'Di Matteo',
    email: 'ldimatteop@amazon.com',
    gender: 'Male',
    message_count: 40,
    country: 'United Kingdom',
  },
  {
    id: 27,
    first_name: 'Alonso',
    last_name: 'Tolle',
    email: 'atolleq@dedecms.com',
    gender: 'Male',
    message_count: 6,
    country: 'Poland',
  },
  {
    id: 28,
    first_name: 'Jerrine',
    last_name: 'Parrington',
    email: 'jparringtonr@booking.com',
    gender: 'Female',
    message_count: 46,
    country: 'United States',
  },
  {
    id: 29,
    first_name: 'Callean',
    last_name: 'Keeling',
    email: 'ckeelings@latimes.com',
    gender: 'Male',
    message_count: 67,
    country: 'Ukraine',
  },
  {
    id: 30,
    first_name: 'Cynde',
    last_name: 'Edge',
    email: 'cedget@scientificamerican.com',
    gender: 'Female',
    message_count: 53,
    country: 'Poland',
  },
  {
    id: 31,
    first_name: 'Charmaine',
    last_name: 'Longmire',
    email: 'clongmireu@behance.net',
    gender: 'Female',
    message_count: 67,
    country: 'Poland',
  },
  {
    id: 32,
    first_name: 'Carry',
    last_name: 'Danilovich',
    email: 'cdanilovichv@seesaa.net',
    gender: 'Female',
    message_count: 74,
    country: 'Poland',
  },
  {
    id: 33,
    first_name: 'Xenos',
    last_name: 'Gibbins',
    email: 'xgibbinsw@netlog.com',
    gender: 'Male',
    message_count: 59,
    country: 'Poland',
  },
  {
    id: 34,
    first_name: 'Evey',
    last_name: 'Farre',
    email: 'efarrex@alibaba.com',
    gender: 'Female',
    message_count: 22,
    country: 'Poland',
  },
  {
    id: 35,
    first_name: 'Liuka',
    last_name: 'Jehan',
    email: 'ljehany@census.gov',
    gender: 'Female',
    message_count: 22,
    country: 'Poland',
  },
  {
    id: 36,
    first_name: 'Cammi',
    last_name: 'Drew-Clifton',
    email: 'cdrewcliftonz@wunderground.com',
    gender: 'Female',
    message_count: 49,
    country: 'United States',
  },
  {
    id: 37,
    first_name: 'Ailis',
    last_name: 'de Castelain',
    email: 'adecastelain10@360.cn',
    gender: 'Female',
    message_count: 86,
    country: 'Belarus',
  },
  {
    id: 38,
    first_name: 'Charis',
    last_name: 'Partkya',
    email: 'cpartkya11@fc2.com',
    gender: 'Female',
    message_count: 94,
    country: 'Poland',
  },
  {
    id: 39,
    first_name: 'Reese',
    last_name: 'Hodges',
    email: 'rhodges12@newyorker.com',
    gender: 'Male',
    message_count: 87,
    country: 'Poland',
  },
  {
    id: 40,
    first_name: 'Rochella',
    last_name: 'Cuffin',
    email: 'rcuffin13@dailymail.co.uk',
    gender: 'Female',
    message_count: 19,
    country: 'Ukraine',
  },
  {
    id: 41,
    first_name: 'Kiley',
    last_name: 'Vickerstaff',
    email: 'kvickerstaff14@smugmug.com',
    gender: 'Male',
    message_count: 94,
    country: 'United States',
  },
  {
    id: 42,
    first_name: 'Donella',
    last_name: 'Scaplehorn',
    email: 'dscaplehorn15@liveinternet.ru',
    gender: 'Female',
    message_count: 65,
    country: 'Poland',
  },
  {
    id: 43,
    first_name: 'Cornelle',
    last_name: 'Lucia',
    email: 'clucia16@state.tx.us',
    gender: 'Female',
    message_count: 63,
    country: 'Ukraine',
  },
  {
    id: 44,
    first_name: 'Gaynor',
    last_name: 'Twine',
    email: 'gtwine17@elpais.com',
    gender: 'Female',
    message_count: 77,
    country: 'Poland',
  },
  {
    id: 45,
    first_name: 'Uriel',
    last_name: 'Sulman',
    email: 'usulman18@cnet.com',
    gender: 'Male',
    message_count: 34,
    country: 'Ukraine',
  },
  {
    id: 46,
    first_name: 'Ann',
    last_name: 'Rousell',
    email: 'arousell19@topsy.com',
    gender: 'Female',
    message_count: 44,
    country: 'Ukraine',
  },
  {
    id: 47,
    first_name: 'Nil',
    last_name: 'Nornable',
    email: 'nnornable1a@nationalgeographic.com',
    gender: 'Male',
    message_count: 95,
    country: 'Ukraine',
  },
  {
    id: 48,
    first_name: 'Linn',
    last_name: 'McKag',
    email: 'lmckag1b@youtu.be',
    gender: 'Male',
    message_count: 13,
    country: 'Ukraine',
  },
  {
    id: 49,
    first_name: 'Erin',
    last_name: 'Byk',
    email: 'ebyk1c@salon.com',
    gender: 'Male',
    message_count: 60,
    country: 'United States',
  },
  {
    id: 50,
    first_name: 'Courtney',
    last_name: 'Burtonwood',
    email: 'cburtonwood1d@stumbleupon.com',
    gender: 'Male',
    message_count: 25,
    country: 'Belarus',
  },
];

const sum = numbers.reduce((acc, el) => {
  //   console.log('Аккумулятор:', acc);
  //   console.log('Текущий элемент:', el);

  return acc + el;
}, 0);

// console.log('Сумма всех чисел:', sum);

const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;

  return acc;
}, {});

const usersByCountry = users.reduce((acc, user) => {
  if (acc[user.country] === undefined) {
    acc[user.country] = {};
  }

  acc[user.country][user.id] = user;

  return acc;
}, {});

const example = {
  bar: 42,
};

example.bar;
example['bar'];

example.foo = 155;
example['foo'] = 155;

// console.dir(usersById);
// console.log(usersById[42]);

console.log(usersByCountry);

// const product = productsArray.find(
//   el => el.color === 'red' && el.dimensions === '20X50' && el.shape === 'round',
// );

//productsArray["red"]["20X50"]["round"]
