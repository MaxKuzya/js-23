/**
 * Array.prototype.map
 *
 * - Возвращает новый массив
 * - Позволяет что-то сделать для каждого элемента
 * - Не изменяет исходный массив
 */

const data = [
  {
    id: 1,
    first_name: 'Dov',
    last_name: 'Skayman',
    email: 'dskayman0@time.com',
    gender: 'Male',
  },
  {
    id: 2,
    first_name: 'Cornela',
    last_name: 'Brimming',
    email: 'cbrimming1@bluehost.com',
    gender: 'Female',
  },
  {
    id: 3,
    first_name: 'Udale',
    last_name: 'Rothwell',
    email: 'urothwell2@cbc.ca',
    gender: 'Male',
  },
  {
    id: 4,
    first_name: 'Uriel',
    last_name: 'Critten',
    email: 'ucritten3@constantcontact.com',
    gender: 'Male',
  },
  {
    id: 5,
    first_name: 'Johnathon',
    last_name: 'Gwalter',
    email: 'jgwalter4@diigo.com',
    gender: 'Male',
  },
  {
    id: 6,
    first_name: 'Jean',
    last_name: 'Skelhorn',
    email: 'jskelhorn5@miibeian.gov.cn',
    gender: 'Female',
  },
  {
    id: 7,
    first_name: 'Gunilla',
    last_name: 'Ponton',
    email: 'gponton6@mapquest.com',
    gender: 'Female',
  },
  {
    id: 8,
    first_name: 'Wyn',
    last_name: 'Scroggins',
    email: 'wscroggins7@yale.edu',
    gender: 'Male',
  },
  {
    id: 9,
    first_name: 'Jenica',
    last_name: 'Bicknell',
    email: 'jbicknell8@springer.com',
    gender: 'Female',
  },
  {
    id: 10,
    first_name: 'Christalle',
    last_name: 'Pretsel',
    email: 'cpretsel9@jiathis.com',
    gender: 'Female',
  },
];

const names = data.map(el => {
  return el.first_name;
});

const emails = data.map(el => {
  return el.email;
});

function sendLetterTo(email) {
  // Magic happens...
  // Функция отправляет письмо на {email}
}

emails.forEach(email => {
  sendLetterTo(email);
});

const clone = [...data];

console.table(data);

console.table(emails);
