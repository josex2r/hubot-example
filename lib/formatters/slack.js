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
  },

  formatHelp() {
    const message = {
      title: 'Hola humano!',
      text: 'Si necesitas conocer más sobre alguna película de Ghibli creo que te puedo ser de ayuda.\nLos comandos que puedes utilizar son:',
      attachments: []
    };

    [
      'Para ver el listado de películas: "listado de peliculas"',
      'Para ordenar el listado: "<n> <ultimas|primeras> peliculas"',
      'Para ver el detalle de una película: "detalle de la película <id>"',
    ].forEach((topic) => {
      message.attachments.push({
        color: getRandomHexColor(),
        title: topic,
        footer_icon: 'https://static.thenounproject.com/png/61692-200.png'
      });
    });

    return message;
    return `Hola humano!
Si necesitas conocer más sobre alguna película de Ghibli creo que te puedo ser de ayuda.
Los comandos que puedes utilizar son:

- Para ver el listado de películas: "listado de peliculas"
- Para ordenar el listado: "<n> <ultimas|primeras> peliculas"
- Para ver el detalle de una película: "detalle de la película <id>"

Un saludo!`;
  }
};
