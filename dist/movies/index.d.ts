import { MoviesBase } from "../base";
import { DetailsResponse, RandomMoviesResponse, SearchResponse } from "./types";
export declare class Movies extends MoviesBase {
    search(searchText: string): Promise<SearchResponse>;
    getMovieDetails(imdbId: string): Promise<DetailsResponse>;
    getRandomMovies(size?: number): Promise<RandomMoviesResponse>;
}
