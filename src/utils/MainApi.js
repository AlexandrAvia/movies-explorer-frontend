class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResponse);
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    }).then(this._checkResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headersWithJwt(),
      body: JSON.stringify({
        country: movie.country || "",
        director: movie.director || "",
        duration: movie.duration || "",
        year: movie.year || "",
        description: movie.description || "",
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink || "",
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU || "",
        nameEN: movie.nameEN || "",
        owner: movie.owner,
      }),
    }).then(this._checkResponse);
  }

  editProfile(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headersWithJwt(),
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headersWithJwt(),
    }).then(this._checkResponse);
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: this._headersWithJwt(),
      credentials: "include",
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _headersWithJwt() {
    return {
      authorization: `Bearer ${localStorage.getItem("token")}`,
      ...this._headers,
    };
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.diploma93.nomoredomains.sbs",
  headers: {
    "Content-Type": "application/json",
  },
});
