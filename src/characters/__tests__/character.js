import Character from '../character';

test('incorect assign type', () => {
  expect(() => {
    new Character('name', 'BlaBla');
  }).toThrow('Некорректный тип персонажа');
});
