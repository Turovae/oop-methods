export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длинна имени должна быть от 2 до 10 символов');
    }
    const types = {
      Bowman: {
        attack: 25,
        defence: 25,
      },
      Swordsman: {
        attack: 40,
        defence: 10,
      },
      Magician: {
        attack: 10,
        defence: 40,
      },
      Undead: {
        attack: 25,
        defence: 25,
      },
      Zombie: {
        attack: 40,
        defence: 10,
      },
      Daemon: {
        attack: 10,
        defence: 40,
      },
    };
    if (!types[type]) {
      throw new Error('Некорректный тип персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = types[type].attack;
    this.defence = types[type].defence;
  }
}
