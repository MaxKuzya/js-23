const propsArray = [
  {
    id: 1,
    name: 'Cookley',
    value: 6,
  },
  {
    id: 2,
    name: 'Stronghold',
    value: 22,
  },
  {
    id: 3,
    name: 'Zamit',
    value: -75,
  },
  {
    id: 4,
    name: 'Solarbreeze',
    value: 55,
  },
  {
    id: 5,
    name: 'Y-find',
    value: 98,
  },
  {
    id: 6,
    name: 'Lotlux',
    value: 5,
  },
  {
    id: 7,
    name: 'Voyatouch',
    value: -99,
  },
  {
    id: 8,
    name: 'Job',
    value: -92,
  },
  {
    id: 9,
    name: 'Tampflex',
    value: -33,
  },
  {
    id: 10,
    name: 'Tres-Zap',
    value: 55,
  },
];

// Chaining (англ. chain - цепь)
const normalizedArr = propsArray
  .filter(el => el.value >= 0)
  .reduce((acc, el) => {
    acc[el.id] = el;

    return acc;
  }, {});

console.log(normalizedArr);
