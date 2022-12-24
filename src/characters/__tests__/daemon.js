import Daemon from '../daemon';

test('test correct daemon', () => {
  expect(new Daemon('daemon')).toEqual({
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
