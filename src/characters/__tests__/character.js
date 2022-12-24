import Character from '../character';

// test.each(
//   ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'],
// )(
//   ('testing creating instance class Character with correct name and type %s'),
//   (characterType) => {
//     expect(new Character('blabla', characterType)).toEqual({
//       name: 'blabla',
//       type: characterType,
//       health: 100,
//       level: 1,
//       attack: undefined,
//       defence: undefined,
//     });
//   },
// );

test('testing creating instance class Character with correct name', () => {
  expect(new Character('blabla', 'Bowman')).toEqual({
    name: 'blabla',
    type: 'Bowman',
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
    }).toThrow('Длина имени должна быть от 2 до 10 символов');
  },
);

// test('incorect assign type', () => {
//   expect(() => {
//     new Character('name', 'BlaBla');
//   }).toThrow('Некорректный тип персонажа');
// });
