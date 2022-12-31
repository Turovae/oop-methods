import Character from '../character';

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

test.each([
  ['to short name', 'a'],
  ['to long name', '123456789ab'],
])(
  ('testing creating instance class Character with %s'),
  (_, name) => {
    expect(() => {
      new Character(name, 'Bowman');
    }).toThrow('Длина имени должна быть от 2 до 10 символов');
  },
);

test('incorect assign type', () => {
  expect(() => {
    new Character('name', 'BlaBla');
  }).toThrow('Некорректный тип персонажа');
});
