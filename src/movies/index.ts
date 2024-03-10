import { MoviesBase } from "../base";
import {
  DetailsData,
  DetailsResponse,
  Movie,
  RandomMoviesResponse,
  ResponseDetailsData,
  ResponseMovieData,
  SearchResponse,
} from "./types";

export class Movies extends MoviesBase {
  async search(searchText: string): Promise<SearchResponse> {
    const response = await this.invoke<ResponseMovieData>(
      "",
      `q=${searchText}`
    );
    const { description: items, error_code, ok } = response;
    const movies: Movie[] = items?.map((item) => {
      return {
        title: item["#TITLE"],
        year: item["#YEAR"],
        imdbId: item["#IMDB_ID"],
        rank: item["#RANK"],
        actors: item["#ACTORS"],
        aka: item["#AKA"],
        imdbUrl: item["#IMDB_URL"],
        imdbIv: item["#IMDB_IV"],
        imgPoster: item["#IMG_POSTER"],
        photo_width: item.photo_width,
        photo_height: item.photo_height,
      };
    });
    return { ok, error_code, movies };
  }

  async getMovieDetails(imdbId: string): Promise<DetailsResponse> {
    try {
      const response = await this.invoke<DetailsData>("", `tt=${imdbId}`);
      const { short } = response;
      const details = {
        url: short.url,
        name: short.name,
        description: short.description,
        imageUrl: short.image,
        review: short.review,
        genres: short.genre,
        keywords: short.keywords,
        actors: short.actor,
        director: short.director,
        duration: short.duration,
        id: imdbId,
        rating: short.contentRating,
      };
      return { details, error_code: "200", ok: true };
    } catch (error) {
      return { error_code: "400", ok: false, details: null };
    }
  }

  async getRandomMovies(size: number = 10): Promise<RandomMoviesResponse> {
    let error_code = "400";
    try {
      const randomLetters = (length: number) => {
        let result = "";
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
          counter += 1;
        }
        return result.split("");
      };
      const letters = randomLetters(5);
      const result = [];
      for (let i = 0; i < letters.length; i++) {
        const response = await this.search(letters[i]);
        if (response.ok) {
          const movies = response.movies;
          result.push(...movies);
          if (result.length >= size) {
            error_code = "200";
            break;
          }
        }
      }
      const movies = result.sort((a, b) => a.title - b.title).slice(0, size);
      return { ok: true, movies, error_code };
    } catch (error) {
      return { ok: true, movies: null, error_code };
    }
  }
}
