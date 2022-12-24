import Character from '../character';

test('testing creating instance class Character with correct name', () => {
  expect(new Character('blabla', 'BlaBla')).toEqual({
    name: 'blabla',
    type: 'BlaBla',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

const incorrectNames = [
  ['to short name', 'a'],
  ['to long name', '123456789ab'],
];
test.each(incorrectNames)(
  ('testing creating instance class Character with %s'),
  (_, name) => {
    expect(() => {
      new Character(name, 'Bowman');
    }).toThrow('Длинна имени должна быть от 2 до 10 символов');
  },
);

// test('incorect assign type', () => {
//   expect(() => {
//     new Character('name', 'BlaBla');
//   }).toThrow('Некорректный тип персонажа');
// });
