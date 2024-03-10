# SDK-MOVIES
- Network business logic SDK in TypeScript that encapsulates the logic for fetching movie data from the API. [@luiscamargom/sdk-movies](https://www.npmjs.com/package/@luiscamargom/sdk-movies)

## SDK MOVIES USE

> Installation

```
    npm install @luiscamargom/sdk-movies
```

> Instantiate

- apiKey: Fake Id that could be used for some authentication flow

```
    import Typicode from "@luiscamargom/sdk-movies

    const client = new Typicode({apiKey:"123"})
```

## SDK MOVIES METHODS

### Get Movie Details Function
- Function: getMovieDetails(id:string)
- Param: id => ID from the movie you want details
- Response Structure:
```
Details Interface 
    {
        url: string;
        name: string;
        description: string;
        imageUrl: string;
        review: Review;
        genres: string[];
        keywords: string;
        actors: Actor[];
        director: Director[];
        duration: string;
        id: string;
        rating: string;
    }

Response Interface
    {
        details: Details;
        ok: boolean;
        error_code: string;
    }
```

### Get Random Movies Function

- Function: getRandomMovies(size:number)
- Param: size => Quantity of random movies
- Response Structure:
```
Movies Interface 
    {
        title: string;
        year: number;
        imdbId: string;
        rank: number;
        actors: string;
        aka: string;
        imdbUrl: string;
        imdbIv: string;
        imgPoster: string;
        photo_width: number;
        photo_height: number;
    }

Response Interface 
    { 
        movies: Movie[];
        ok: boolean;
        error_code: string
    }
```

### Search Movies Function
- Function: search(term:string)
- Param: term => Search movie term that you are looking for
- Response Structure:
```
Movie Interface 
    {
        title: string;
        year: number;
        imdbId: string;
        rank: number;
        actors: string;
        aka: string;
        imdbUrl: string;
        imdbIv: string;
        imgPoster: string;
        photo_width: number;
        photo_height: number;
    }

Response Interface
    { 
        movies: Movie[];
        ok: boolean;
        error_code: string;
    }
```