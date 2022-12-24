import Zombie from '../zombie';

test('test correct zombie', () => {
  expect(new Zombie('zombie')).toEqual({
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
