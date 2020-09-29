const users = [
  {
    name: 'Barty',
    rating: 8,
    isOnline: true,
  },
  {
    name: 'Joye',
    rating: 6,
    isOnline: false,
  },
  {
    name: 'Maren',
    rating: 3,
    isOnline: true,
  },
  {
    name: 'Clyve',
    rating: 9,
    isOnline: true,
  },
  {
    name: 'Shelia',
    rating: 3,
    isOnline: false,
  },
  {
    name: 'Giuseppe',
    rating: 10,
    isOnline: false,
  },
  {
    name: 'Beatrisa',
    rating: 10,
    isOnline: true,
  },
  {
    name: 'Emilia',
    rating: 10,
    isOnline: false,
  },
  {
    name: 'Gilburt',
    rating: 7,
    isOnline: true,
  },
  {
    name: 'Eberto',
    rating: 7,
    isOnline: false,
  },
  {
    name: 'El',
    rating: 6,
    isOnline: false,
  },
  {
    name: 'Alejandrina',
    rating: 7,
    isOnline: true,
  },
  {
    name: 'Phillipp',
    rating: 7,
    isOnline: false,
  },
  {
    name: 'Jae',
    rating: 7,
    isOnline: true,
  },
  {
    name: 'Giustina',
    rating: 4,
    isOnline: true,
  },
  {
    name: 'Carmina',
    rating: 6,
    isOnline: true,
  },
  {
    name: 'Dorthy',
    rating: 4,
    isOnline: false,
  },
  {
    name: 'Daryl',
    rating: 9,
    isOnline: false,
  },
  {
    name: 'Ketty',
    rating: 3,
    isOnline: false,
  },
  {
    name: 'Templeton',
    rating: 6,
    isOnline: false,
  },
  {
    name: 'Fae',
    rating: 8,
    isOnline: false,
  },
  {
    name: 'Barnard',
    rating: 3,
    isOnline: false,
  },
  {
    name: 'Randa',
    rating: 6,
    isOnline: true,
  },
  {
    name: 'Viola',
    rating: 5,
    isOnline: true,
  },
  {
    name: 'Channa',
    rating: 4,
    isOnline: false,
  },
  {
    name: 'Lin',
    rating: 6,
    isOnline: true,
  },
  {
    name: 'Andy',
    rating: 6,
    isOnline: true,
  },
  {
    name: 'Tiphani',
    rating: 8,
    isOnline: false,
  },
  {
    name: 'Grange',
    rating: 1,
    isOnline: false,
  },
  {
    name: 'Anton',
    rating: 8,
    isOnline: true,
  },
  {
    name: 'Shelia',
    rating: 8,
    isOnline: true,
  },
  {
    name: 'Urbain',
    rating: 9,
    isOnline: false,
  },
  {
    name: 'Dianemarie',
    rating: 3,
    isOnline: true,
  },
  {
    name: 'Cornelia',
    rating: 1,
    isOnline: false,
  },
  {
    name: 'Aubrette',
    rating: 9,
    isOnline: false,
  },
  {
    name: 'Etienne',
    rating: 8,
    isOnline: true,
  },
  {
    name: 'Manfred',
    rating: 5,
    isOnline: false,
  },
  {
    name: 'Stavro',
    rating: 1,
    isOnline: false,
  },
  {
    name: 'Palm',
    rating: 2,
    isOnline: false,
  },
  {
    name: 'Trumann',
    rating: 3,
    isOnline: true,
  },
  {
    name: 'Tori',
    rating: 3,
    isOnline: true,
  },
  {
    name: 'Cayla',
    rating: 3,
    isOnline: false,
  },
  {
    name: 'Helaina',
    rating: 2,
    isOnline: false,
  },
  {
    name: 'Myer',
    rating: 9,
    isOnline: false,
  },
  {
    name: 'Niels',
    rating: 7,
    isOnline: false,
  },
  {
    name: 'Umeko',
    rating: 9,
    isOnline: true,
  },
  {
    name: 'Merrili',
    rating: 3,
    isOnline: false,
  },
  {
    name: 'Lucia',
    rating: 2,
    isOnline: true,
  },
  {
    name: 'Tiebout',
    rating: 5,
    isOnline: false,
  },
  {
    name: 'Coralie',
    rating: 2,
    isOnline: true,
  },
];

/**
 * Отсортировать пользователей по:
 * 1. Онлайн
 * 2. Рейтинг
 * 3. Имя в алф. порядке
 *
 */

users.sort((a, b) => {
  if (Number(b.isOnline) !== Number(a.isOnline)) {
    // Онлайн
    return Number(b.isOnline) - Number(a.isOnline);
  }

  if (b.rating !== a.rating) {
    //   Рейтинг
    return b.rating - a.rating;
  }

  //   Имя в алф. порядке
  return a.name.localeCompare(b.name);
});

console.table(users);
