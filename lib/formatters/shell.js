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
  }
};
