import Undead from '../undead';

const undead = {
  name: 'undead1',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('test correct undead', () => {
  const result = new Undead('undead1');
  expect(result).toEqual(undead);
});

const incorrectNameUndeads = [
  ['to short name', 'a'],
  ['to long name', '123456789ab'],
];
test.each(incorrectNameUndeads)(
  ('testing creating Undeads instance with %s'),
  (_, name) => {
    expect(() => {
      new Undead(name);
    }).toThrow('Длинна имени должна быть от 2 до 10 символов');
  },
);
