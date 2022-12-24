import Bowman from '../bowman';

test('test correct bowman', () => {
  expect(new Bowman('bowman')).toEqual({
    name: 'bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

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
