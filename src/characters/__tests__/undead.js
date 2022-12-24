import Undead from '../undead';

test('test correct undead', () => {
  expect(new Undead('undead')).toEqual({
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
