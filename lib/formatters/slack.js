function getRandomHexColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

module.exports = {
  formatFilms(films) {
    const message = {
      attachments: []
    };

    films.forEach((film) => {
      message.attachments.push({
        color: getRandomHexColor(),
        title: film.title,
        text: film.id,
        footer: `${film.rt_score}/100 ★`,
        footer_icon: 'https://i.pinimg.com/originals/a3/0e/d7/a30ed7ee208f2241b8f292ca1e9c115b.jpg',
        ts: new Date(film.release_date, 1, 1)
      });
    });

    return message;
  }
};
