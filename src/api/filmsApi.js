import axios from "axios";

const url = 'https://kinopoiskapiunofficial.tech'
const config = {headers: {"X-API-KEY": "c10d41ad-4398-496c-bd6e-63d9871adbb5"}}

class FilmsApi {
  static async getFilms(type, currentPage) {
    return await axios.get(`${url}/api/v2.2/films/top?type=${type}&page=${currentPage}`, config)
  }

  static async getFilm(id) {
    return await axios.get(`${url}/api/v2.1/films/${id}`, config)
  }

  static async getImagesById(id) {
    return await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/frames`, config)
  }

}

export default FilmsApi