class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    console.log(`Ошибка: ${res.status}`);
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }
  getMovies() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}
export const moviesApi = new MoviesApi({
  baseUrl: `https://api.nomoreparties.co/beatfilm-movies`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
