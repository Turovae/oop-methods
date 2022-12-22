import Zombie from '../zombie';

const zombie = {
  name: 'zombie1',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('test correct zombie', () => {
  const result = new Zombie('zombie1');
  expect(result).toEqual(zombie);
});

const incorrectNameZombies = [
  ['to short name', 'a'],
  ['to long name', '123456789ab'],
];
test.each(incorrectNameZombies)(
  ('testing creating Zombies instance with %s'),
  (_, name) => {
    expect(() => {
      new Zombie(name);
    }).toThrow('Длинна имени должна быть от 2 до 10 символов');
  },
);
