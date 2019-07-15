
const API_KEY = `${process.env.REACT_APP_API}`;
const BASE = "https://api.themoviedb.org/3";

export function constructSearchURL(term, page) {
	return `${BASE}/search/movie?api_key=${API_KEY}&query=${term}&page=${page}`
}

export function constructTrendingURL(page) {
	return `${BASE}/trending/movie/week?api_key=${API_KEY}&page=${page}`
}

export function constructNowPlayingURL(page) {
	return `${BASE}/movie/now_playing?api_key=${API_KEY}&page=${page}`
}

export function constructTopRatedURL(page) {
	return `${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
}

// `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28

// GENRE SEARCHES

export function constructActionURL(page) {
	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=28&page=${page}`
}

export function constructAdventureURL(page) {
	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=12&page=${page}`
}

export function constructComedyURL(page) {
	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=35&page=${page}`
}

export function constructCrimeURL(page) {
	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=80&page=${page}`
}

export function constructRomanceURL(page) {
	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=10749&page=${page}`
}

export function constructHorrorURL(page) {
	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=27&page=${page}`
}

export function constructSciFiURL(page) {
	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=878&page=${page}`
}

export function constructWarURL(page) {
	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=10752&page=${page}`
}