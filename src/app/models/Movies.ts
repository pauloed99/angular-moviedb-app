export interface Movies {
    page:          number;
    results:       Result[];
    total_results: number;
    total_pages:   number;
}

export interface Result {
    poster_path?:      string;
    adult:             boolean;
    overview:          string;
    release_date:      Date;
    genre_ids:         number[];
    id:                number;
    original_title:    string;
    title:             string;
    backdrop_path:     null;
    popularity:        number;
    vote_count:        number;
    video:             boolean;
    vote_average:      number;
}
