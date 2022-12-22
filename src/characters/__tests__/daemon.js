import Daemon from '../daemon';

const daemon = {
  name: 'daemon1',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('test correct daemon', () => {
  const result = new Daemon('daemon1');
  expect(result).toEqual(daemon);
});

const incorrectNameDaemons = [
  ['to short name', 'a'],
  ['to long name', '123456789ab'],
];
test.each(incorrectNameDaemons)(
  ('testing creating Daemons instance with %s'),
  (_, name) => {
    expect(() => {
      new Daemon(name);
    }).toThrow('Длинна имени должна быть от 2 до 10 символов');
  },
);
