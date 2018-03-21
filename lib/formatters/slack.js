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
        footer: `${film.rt_score}/100 ★ - ${film.release_date}`,
        footer_icon: 'https://i.pinimg.com/originals/a3/0e/d7/a30ed7ee208f2241b8f292ca1e9c115b.jpg'
      });
    });

    return message;
  },

  formatDetail(film) {
    return {
      attachments: [{
        color: getRandomHexColor(),
        author_name: `${film.director} & ${film.producer}`,
        title: film.title,
        title_link: `https://www.google.es/search?q=${film.title}`,
        text: film.description,
        footer: `${film.rt_score}/100 ★ - ${film.release_date}`,
        footer_icon: 'https://i.pinimg.com/originals/a3/0e/d7/a30ed7ee208f2241b8f292ca1e9c115b.jpg'
      }]
    };
  }
};
