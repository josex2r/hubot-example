module.exports = {
  formatFilms(films) {
    return films
      .map((film) => `${film.id} - ${film.title} (${film.release_date})`)
      .join('\n');
  },

  formatDetail(film) {
    return `
Director: ${film.director}
Productor: ${film.producer}
Título: ${film.title}
Sinopsis: ${film.description}
Puntuación: ${film.rt_score}/100 ★
Año de estreno: ${film.release_date}`;
  },

  formatHelp() {
    return `Hola humano!
Si necesitas conocer más sobre alguna película de Ghibli creo que te puedo ser de ayuda.
Los comandos que puedes utilizar son:

- Para ver el listado de películas: "listado de peliculas"
- Para ordenar el listado: "<n> <ultimas|primeras> peliculas"
- Para ver el detalle de una película: "detalle de la película <id>"

Un saludo!`;
  }
};
