/**
 * Чейнинг
 */

const arrayA = [1, 2, 3, 12, 55];
const arrayB = [3, 4, 5, 55, 12];
const arrayC = [3, 55, 10, 11];

const additionalElement = 777;

// 1. Конкатенируем
const sorted = arrayA
  .concat(additionalElement, arrayB, arrayC, additionalElement)
  // 2. Сортируем
  .sort((a, b) => a - b);

// 3. Убираем неуникальные
// Читать: Map, Set, WeakMap, WeakSet
const onlyUnique = [...new Set(sorted)];

/**
 * =================
 */

const users = [
  {
    id: 1,
    name: 'Jeannine',
    email: 'jbittlestone0@ow.ly',
    gender: 'Female',
    rating: 20,
    isOnline: false,
  },
  {
    id: 2,
    name: 'Lois',
    email: null,
    gender: 'Female',
    rating: 11,
    isOnline: true,
  },
  {
    id: 3,
    name: 'Tiffi',
    email: 'tmckinn2@yahoo.co.jp',
    gender: 'Female',
    rating: 89,
    isOnline: true,
  },
  {
    id: 4,
    name: 'Sayers',
    email: 'sdrysdall3@examiner.com',
    gender: 'Male',
    rating: 99,
    isOnline: true,
  },
  {
    id: 5,
    name: 'Armand',
    email: 'aawton4@usa.gov',
    gender: 'Male',
    rating: 5,
    isOnline: true,
  },
  {
    id: 6,
    name: 'Dirk',
    email: 'dmckennan5@elegantthemes.com',
    gender: 'Male',
    rating: 50,
    isOnline: false,
  },
  {
    id: 7,
    name: 'Wait',
    email: 'wcarreck6@irs.gov',
    gender: 'Male',
    rating: 87,
    isOnline: false,
  },
  {
    id: 8,
    name: 'Adela',
    email: 'awaller7@bbc.co.uk',
    gender: 'Female',
    rating: 88,
    isOnline: true,
  },
  {
    id: 9,
    name: 'Brear',
    email: 'bstennine8@seattletimes.com',
    gender: 'Female',
    rating: 12,
    isOnline: true,
  },
  {
    id: 10,
    name: 'Cherrita',
    email: 'cpringer9@wikimedia.org',
    gender: 'Female',
    rating: 78,
    isOnline: true,
  },
  {
    id: 11,
    name: 'Town',
    email: 'tdacresa@sphinn.com',
    gender: 'Male',
    rating: 75,
    isOnline: false,
  },
  {
    id: 12,
    name: 'Pierce',
    email: 'pjayb@surveymonkey.com',
    gender: 'Male',
    rating: 61,
    isOnline: false,
  },
  {
    id: 13,
    name: 'Elladine',
    email: 'edarwinc@bizjournals.com',
    gender: 'Female',
    rating: 23,
    isOnline: false,
  },
  {
    id: 14,
    name: 'Orton',
    email: null,
    gender: 'Male',
    rating: 38,
    isOnline: false,
  },
  {
    id: 15,
    name: 'Randal',
    email: 'rstennete@cnn.com',
    gender: 'Male',
    rating: 82,
    isOnline: true,
  },
  {
    id: 16,
    name: 'Arlana',
    email: 'aquinnellyf@oakley.com',
    gender: 'Female',
    rating: 93,
    isOnline: true,
  },
  {
    id: 17,
    name: 'Ardelia',
    email: 'aslocombg@mtv.com',
    gender: 'Female',
    rating: 76,
    isOnline: false,
  },
  {
    id: 18,
    name: 'Gilbertina',
    email: null,
    gender: 'Female',
    rating: 7,
    isOnline: true,
  },
  {
    id: 19,
    name: 'Deedee',
    email: null,
    gender: 'Female',
    rating: 61,
    isOnline: true,
  },
  {
    id: 20,
    name: 'Carolina',
    email: 'cdimitriej@addthis.com',
    gender: 'Female',
    rating: 80,
    isOnline: true,
  },
  {
    id: 21,
    name: 'Andrei',
    email: 'atruelockk@ucoz.com',
    gender: 'Female',
    rating: 84,
    isOnline: false,
  },
  {
    id: 22,
    name: 'Mohammed',
    email: 'mtrudgianl@rakuten.co.jp',
    gender: 'Male',
    rating: 18,
    isOnline: false,
  },
  {
    id: 23,
    name: 'Vilma',
    email: 'velletsonm@hibu.com',
    gender: 'Female',
    rating: 75,
    isOnline: false,
  },
  {
    id: 24,
    name: 'Erda',
    email: 'eelmern@yellowbook.com',
    gender: 'Female',
    rating: 57,
    isOnline: true,
  },
  {
    id: 25,
    name: 'Merle',
    email: 'mcolmano@photobucket.com',
    gender: 'Female',
    rating: 68,
    isOnline: true,
  },
  {
    id: 26,
    name: 'Dania',
    email: 'dgobertp@typepad.com',
    gender: 'Female',
    rating: 47,
    isOnline: true,
  },
  {
    id: 27,
    name: 'Zara',
    email: 'zbowmanq@msn.com',
    gender: 'Female',
    rating: 56,
    isOnline: true,
  },
  {
    id: 28,
    name: 'Maggy',
    email: 'mfinkler@samsung.com',
    gender: 'Female',
    rating: 22,
    isOnline: true,
  },
  {
    id: 29,
    name: 'Melisse',
    email: 'mbodiams@patch.com',
    gender: 'Female',
    rating: 6,
    isOnline: false,
  },
  {
    id: 30,
    name: 'Rebekkah',
    email: 'rkaast@bloglines.com',
    gender: 'Female',
    rating: 96,
    isOnline: true,
  },
  {
    id: 31,
    name: 'Adamo',
    email: 'aalloneu@yolasite.com',
    gender: 'Male',
    rating: 30,
    isOnline: true,
  },
  {
    id: 32,
    name: 'Brandea',
    email: 'bbutterleyv@ask.com',
    gender: 'Female',
    rating: 53,
    isOnline: false,
  },
  {
    id: 33,
    name: 'Susanna',
    email: 'scarasw@nsw.gov.au',
    gender: 'Female',
    rating: 67,
    isOnline: true,
  },
  {
    id: 34,
    name: 'Killy',
    email: 'krosevearex@storify.com',
    gender: 'Male',
    rating: 4,
    isOnline: false,
  },
  {
    id: 35,
    name: 'Neddie',
    email: 'nbouldeny@multiply.com',
    gender: 'Male',
    rating: 40,
    isOnline: true,
  },
  {
    id: 36,
    name: 'Fina',
    email: 'fyarrz@vistaprint.com',
    gender: 'Female',
    rating: 80,
    isOnline: true,
  },
  {
    id: 37,
    name: 'Gustie',
    email: 'gbyrne10@cdbaby.com',
    gender: 'Female',
    rating: 3,
    isOnline: true,
  },
  {
    id: 38,
    name: 'Harley',
    email: 'hcoleridge11@google.es',
    gender: 'Female',
    rating: 79,
    isOnline: true,
  },
  {
    id: 39,
    name: 'Kati',
    email: 'kburns12@mit.edu',
    gender: 'Female',
    rating: 86,
    isOnline: false,
  },
  {
    id: 40,
    name: 'Shayne',
    email: 'shuyton13@tmall.com',
    gender: 'Male',
    rating: 52,
    isOnline: true,
  },
  {
    id: 41,
    name: 'Peder',
    email: 'porbine14@prnewswire.com',
    gender: 'Male',
    rating: 1,
    isOnline: false,
  },
  {
    id: 42,
    name: 'Fayth',
    email: 'fgoulborne15@geocities.com',
    gender: 'Female',
    rating: 7,
    isOnline: false,
  },
  {
    id: 43,
    name: 'Cyndia',
    email: 'cdanahar16@walmart.com',
    gender: 'Female',
    rating: 73,
    isOnline: false,
  },
  {
    id: 44,
    name: 'Oliy',
    email: 'onoorwood17@theatlantic.com',
    gender: 'Female',
    rating: 81,
    isOnline: true,
  },
  {
    id: 45,
    name: 'Richard',
    email: 'rranyard18@ihg.com',
    gender: 'Male',
    rating: 67,
    isOnline: true,
  },
  {
    id: 46,
    name: 'Shel',
    email: 'smerkel19@sciencedirect.com',
    gender: 'Female',
    rating: 88,
    isOnline: false,
  },
  {
    id: 47,
    name: 'Alphard',
    email: 'aalexsandrov1a@desdev.cn',
    gender: 'Male',
    rating: 89,
    isOnline: false,
  },
  {
    id: 48,
    name: 'Margo',
    email: 'mgreason1b@yale.edu',
    gender: 'Female',
    rating: 92,
    isOnline: true,
  },
  {
    id: 49,
    name: 'Thelma',
    email: 'thilary1c@seattletimes.com',
    gender: 'Female',
    rating: 30,
    isOnline: true,
  },
  {
    id: 50,
    name: 'Garry',
    email: 'gwillox1d@weibo.com',
    gender: 'Male',
    rating: 30,
    isOnline: false,
  },
];

/**
 * Пользователи
 * Только те, у которых:
 *
 * 1. рейтинг >= 20
 * 2. кто в онлайне
 * 3. есть почта
 */

const MIN_RATING = 20;

const filteredUsers = users
  .filter(user => user.rating >= MIN_RATING)
  .filter(user => user.isOnline)
  .filter(user => user.email);

/**
 * Получить список имейлов пользователей
 * Только тех, у которых:
 *
 * 1. рейтинг >= 20
 * 2. кто в онлайне
 * 3. есть почта
 */

const filteredEmails = users
  .filter(({ rating }) => rating >= MIN_RATING)
  .filter(({ isOnline: userIsOnline }) => userIsOnline)
  .map(({ email: userEmail }) => userEmail)
  .filter(Boolean);
//.filter(email => email);

// console.log(filteredUsers);
console.log(filteredEmails);
