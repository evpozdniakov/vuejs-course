function User(firstName, patronymic, lastName, avatar) {
  this.firstName = firstName;
  this.patronymic = patronymic;
  this.lastName = lastName;
  this.avatar = avatar;
}

User.getUsersSync = function() {
  return [
    new User(
      'Владимир',
      'Владимирович',
      'Маяковский',
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Mayakovsky_1915.jpg',
    ),
    new User(
      'Анна',
      'Андреевна',
      'Горенко',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Kuzma_petrov-vodkin%2C_ritratto_di_anna_akhmatova%2C_1922.JPG',
    ),
    new User(
      'Николай',
      'Степанович',
      'Гумилев',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Ngumil.jpg/440px-Ngumil.jpg',
    ),
    new User(
      'Александр',
      'Александрович',
      'Блок',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Alexander_Blok.jpeg/534px-Alexander_Blok.jpeg',
    ),
    new User(
      'Игорь',
      'Васильевич',
      'Лотарев',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Igor_Severyanin.jpg/340px-Igor_Severyanin.jpg',
    ),
    new User('Марина', 'Ивановна', 'Цветаева'),
  ];
};
