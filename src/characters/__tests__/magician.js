import Magician from '../magician';

test('test correct magician', () => {
  expect(new Magician('magician')).toEqual({
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
