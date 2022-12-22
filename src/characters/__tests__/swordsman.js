import Swordsman from '../swordsman';

const swordsman = {
  name: 'swordsman1',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('test correct Swordsman', () => {
  const result = new Swordsman('swordsman1');
  expect(result).toEqual(swordsman);
});

const incorrectNameSwordsmans = [
  ['to short name', 'a'],
  ['to long name', '123456789ab'],
];
test.each(incorrectNameSwordsmans)(
  ('testing creating Swordsmans instance with %s'),
  (_, name) => {
    expect(() => {
      new Swordsman(name);
    }).toThrow('Длинна имени должна быть от 2 до 10 символов');
  },
);
