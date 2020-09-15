/**
 * Array.prototype.find
 *
 * - Возвращает первый элемент, для которого проверка вернула true
 * - ЛИБО undefined, если для всех проверка вернула false
 * - Колбек должен возвращать буль (true, false)
 */

const users = [
  {
    id: 1,
    first_name: 'Toddy',
    last_name: 'McGooch',
    email: 'tmcgooch0@is.gd',
    gender: 'Male',
  },
  {
    id: 2,
    first_name: 'Nancee',
    last_name: 'Craise',
    email: 'ncraise1@hostgator.com',
    gender: 'Female',
  },
  {
    id: 3,
    first_name: 'Rossy',
    last_name: 'Moar',
    email: 'rmoar2@altervista.org',
    gender: 'Male',
  },
  {
    id: 4,
    first_name: 'Genovera',
    last_name: 'Cowcha',
    email: 'gcowcha3@usgs.gov',
    gender: 'Female',
  },
  {
    id: 5,
    first_name: 'Amalle',
    last_name: 'Sanper',
    email: 'asanper4@unc.edu',
    gender: 'Female',
  },
  {
    id: 6,
    first_name: 'Gabriel',
    last_name: 'Clute',
    email: 'gclute5@sitemeter.com',
    gender: 'Male',
  },
  {
    id: 7,
    first_name: 'Parry',
    last_name: 'Vallentine',
    email: 'pvallentine6@digg.com',
    gender: 'Male',
  },
  {
    id: 8,
    first_name: 'Dennet',
    last_name: 'Stanbury',
    email: 'dstanbury7@geocities.com',
    gender: 'Male',
  },
  {
    id: 9,
    first_name: 'Rockie',
    last_name: 'Yeskov',
    email: 'ryeskov8@rakuten.co.jp',
    gender: 'Male',
  },
  {
    id: 10,
    first_name: 'Thomas',
    last_name: 'Gambrell',
    email: 'tgambrell9@amazon.co.jp',
    gender: 'Male',
  },
  {
    id: 11,
    first_name: 'Sammie',
    last_name: 'Willcott',
    email: 'swillcotta@webmd.com',
    gender: 'Male',
  },
  {
    id: 12,
    first_name: 'Matilda',
    last_name: 'Bairstow',
    email: 'mbairstowb@exblog.jp',
    gender: 'Female',
  },
  {
    id: 13,
    first_name: 'Wilhelmine',
    last_name: 'McQuaid',
    email: 'wmcquaidc@oakley.com',
    gender: 'Female',
  },
  {
    id: 14,
    first_name: 'Boyce',
    last_name: 'Goodlad',
    email: 'bgoodladd@themeforest.net',
    gender: 'Male',
  },
  {
    id: 15,
    first_name: 'Rees',
    last_name: 'Lingner',
    email: 'rlingnere@sbwire.com',
    gender: 'Male',
  },
  {
    id: 16,
    first_name: 'Frazier',
    last_name: 'Lavell',
    email: 'flavellf@wsj.com',
    gender: 'Male',
  },
  {
    id: 17,
    first_name: 'Drusy',
    last_name: 'Rosthorn',
    email: 'drosthorng@archive.org',
    gender: 'Female',
  },
  {
    id: 18,
    first_name: 'Kahlil',
    last_name: 'Low',
    email: 'klowh@telegraph.co.uk',
    gender: 'Male',
  },
  {
    id: 19,
    first_name: 'Sharl',
    last_name: 'Cometson',
    email: 'scometsoni@unblog.fr',
    gender: 'Female',
  },
  {
    id: 20,
    first_name: 'Dukie',
    last_name: 'Hallgath',
    email: 'dhallgathj@timesonline.co.uk',
    gender: 'Male',
  },
  {
    id: 21,
    first_name: 'Louisa',
    last_name: 'Del Dello',
    email: 'ldeldellok@imgur.com',
    gender: 'Female',
  },
  {
    id: 22,
    first_name: 'Micky',
    last_name: 'Ferrarini',
    email: 'mferrarinil@marriott.com',
    gender: 'Female',
  },
  {
    id: 23,
    first_name: 'Moshe',
    last_name: 'Ebbers',
    email: 'mebbersm@linkedin.com',
    gender: 'Male',
  },
  {
    id: 24,
    first_name: 'Brion',
    last_name: 'Raffan',
    email: 'braffann@buzzfeed.com',
    gender: 'Male',
  },
  {
    id: 25,
    first_name: 'Giulio',
    last_name: 'Crosskill',
    email: 'gcrosskillo@unesco.org',
    gender: 'Male',
  },
  {
    id: 26,
    first_name: 'Kelby',
    last_name: 'Heighton',
    email: 'kheightonp@twitter.com',
    gender: 'Male',
  },
  {
    id: 27,
    first_name: 'Imogene',
    last_name: 'McGrale',
    email: 'imcgraleq@un.org',
    gender: 'Female',
  },
  {
    id: 28,
    first_name: 'Janey',
    last_name: 'Gayne',
    email: 'jgayner@npr.org',
    gender: 'Female',
  },
  {
    id: 29,
    first_name: 'Free',
    last_name: 'McKelvie',
    email: 'fmckelvies@mozilla.org',
    gender: 'Male',
  },
  {
    id: 30,
    first_name: 'Bucky',
    last_name: 'Full',
    email: 'bfullt@pcworld.com',
    gender: 'Male',
  },
  {
    id: 31,
    first_name: 'Alli',
    last_name: 'Wynrahame',
    email: 'awynrahameu@studiopress.com',
    gender: 'Female',
  },
  {
    id: 32,
    first_name: 'Henrie',
    last_name: 'Behrendsen',
    email: 'hbehrendsenv@cmu.edu',
    gender: 'Female',
  },
  {
    id: 33,
    first_name: 'Gabbie',
    last_name: 'Clemits',
    email: 'gclemitsw@netlog.com',
    gender: 'Male',
  },
  {
    id: 34,
    first_name: 'Claribel',
    last_name: 'Belk',
    email: 'cbelkx@mac.com',
    gender: 'Female',
  },
  {
    id: 35,
    first_name: 'Ty',
    last_name: 'Cumbes',
    email: 'tcumbesy@vistaprint.com',
    gender: 'Male',
  },
  {
    id: 36,
    first_name: 'Currey',
    last_name: 'Nabbs',
    email: 'cnabbsz@lulu.com',
    gender: 'Male',
  },
  {
    id: 37,
    first_name: 'Joelie',
    last_name: 'Leonida',
    email: 'jleonida10@ucsd.edu',
    gender: 'Female',
  },
  {
    id: 38,
    first_name: 'Ara',
    last_name: 'Macieja',
    email: 'amacieja11@reddit.com',
    gender: 'Female',
  },
  {
    id: 39,
    first_name: 'Risa',
    last_name: 'Epton',
    email: 'repton12@infoseek.co.jp',
    gender: 'Female',
  },
  {
    id: 40,
    first_name: 'Johann',
    last_name: 'Franzonetti',
    email: 'jfranzonetti13@sohu.com',
    gender: 'Male',
  },
  {
    id: 41,
    first_name: 'Chelsae',
    last_name: 'Rozzier',
    email: 'crozzier14@google.co.uk',
    gender: 'Female',
  },
  {
    id: 42,
    first_name: 'Dasie',
    last_name: 'Forseith',
    email: 'dforseith15@networkadvertising.org',
    gender: 'Female',
  },
  {
    id: 43,
    first_name: 'Lola',
    last_name: 'Haney',
    email: 'lhaney16@nsw.gov.au',
    gender: 'Female',
  },
  {
    id: 44,
    first_name: 'Ody',
    last_name: 'Jerams',
    email: 'ojerams17@businessweek.com',
    gender: 'Male',
  },
  {
    id: 45,
    first_name: 'Chip',
    last_name: 'Fiddler',
    email: 'cfiddler18@marketwatch.com',
    gender: 'Male',
  },
  {
    id: 46,
    first_name: 'Ava',
    last_name: 'Renoden',
    email: 'arenoden19@github.com',
    gender: 'Female',
  },
  {
    id: 47,
    first_name: 'Morlee',
    last_name: 'Curless',
    email: 'mcurless1a@adobe.com',
    gender: 'Male',
  },
  {
    id: 48,
    first_name: 'Julio',
    last_name: 'Bentame',
    email: 'jbentame1b@wp.com',
    gender: 'Male',
  },
  {
    id: 49,
    first_name: 'Jacques',
    last_name: 'Whyte',
    email: 'jwhyte1c@nsw.gov.au',
    gender: 'Male',
  },
  {
    id: 50,
    first_name: 'Orran',
    last_name: 'Chilles',
    email: 'ochilles1d@bandcamp.com',
    gender: 'Male',
  },
];

function changeUserEmail(id, newEmail) {
  const foundUser = { ...users.find(el => el.id === id) };
  foundUser.email = newEmail;

  return foundUser;
}

function findUsersByName(query) {
  const foundUsers = users.filter(el =>
    el.first_name.toLowerCase().includes(query.toLowerCase()),
  );

  return foundUsers;
}

console.log(changeUserEmail(37, 'newEmail@google.com'));
console.table(users);

console.table(findUsersByName('gen'));
