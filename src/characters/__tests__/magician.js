import Magician from '../magician';

const magician = {
  name: 'magician1',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('test correct magician', () => {
  const result = new Magician('magician1');
  expect(result).toEqual(magician);
});

const incorrectNameMagicians = [
  ['to short name', 'a'],
  ['to long name', '123456789ab'],
];
test.each(incorrectNameMagicians)(
  ('testing creating Magicians instance with %s'),
  (_, name) => {
    expect(() => {
      new Magician(name);
    }).toThrow('Длинна имени должна быть от 2 до 10 символов');
  },
);
