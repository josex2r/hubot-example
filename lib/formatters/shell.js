module.exports = {
  formatFilms(films) {
    return films
      .map((film) => `${film.id} - ${film.title} (${film.release_date})`)
      .join('\n');
  }
};
