'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    const start = () => {
      const userAction = prompt('Ваш ход: введите камень, ножницы или бумага');

      if (userAction === null) {
        const isStop = confirm('Вы точно хотите выйти из игры?');

        if (isStop) {
          alert(`Игра окончена!
          Компьютер: ${result.computer} очко(в),
          вы: ${result.player} очко(в)!`);
          return;
        } else {
          start();
        }
      } else {
        const normalizedUserAction = userAction.toLowerCase().trim();
        const userActionIndex = FIGURES_RUS.findIndex(
          figure => figure.includes(normalizedUserAction));

        const botActionIndex = getRandomIntInclusive(0, 2);
        const botAction = FIGURES_RUS[botActionIndex];

        if (userActionIndex === -1) {
          alert('Не корректный ход. Попробуйте еще раз!');
          start();
          return;
        }

        alert(`Компьютер выбрал: ${botAction}`);

        if (userActionIndex === botActionIndex) {
          alert('Ничья');
        } else if ((userActionIndex + 1) % 3 === botActionIndex) {
          alert('Вы выиграли!');
          result.player += 1;
        } else {
          alert('Вы проиграли!');
          result.computer += 1;
        }

        start();
      }
    };

    return start;
  };
  window.rPS = game;
})();
