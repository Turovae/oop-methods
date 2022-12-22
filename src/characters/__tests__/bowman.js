import Bowman from '../bowman';

const bowman = {
  name: 'bowman1',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('test correct bowman', () => {
  const result = new Bowman('bowman1');
  expect(result).toEqual(bowman);
});

const incorrectNameBowmans = [
  ['to short name', 'a'],
  ['to long name', '123456789ab'],
];
test.each(incorrectNameBowmans)(
  ('testing creating Bowmans instance with %s'),
  (_, name) => {
    expect(() => {
      new Bowman(name);
    }).toThrow('Длинна имени должна быть от 2 до 10 символов');
  },
);
