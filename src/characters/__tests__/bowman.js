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

const bowman2 = new Bowman('Bowman2');

test.each(
  [
    ['1', 63],
    ['2', 26],
    ['3', 0],
    ['4', 0],
  ],
)(
  ('test damage %s with 50 point'),
  (_, expected) => {
    bowman2.damage(50);
    expect(bowman2.health).toBe(expected);
  },
);

test.each(
  [[100], [50]],
)(
  ('Test levelUp method with %d health'),
  (health) => {
    const bowman3 = new Bowman('bowman3');
    bowman3.health = health;
    bowman3.levelUp();
    expect(bowman3).toEqual({
      name: 'bowman3',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    });
  },
);

test('Test levelUp method with 0 health', () => {
  const bowman4 = new Bowman('bowman4');
  bowman4.health = 0;
  expect(() => {
    bowman4.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});
