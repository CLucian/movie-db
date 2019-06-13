
const API_KEY = `${process.env.REACT_APP_API}`;
const BASE = "https://api.themoviedb.org/3";

export function constructSearchURL(term, page) {
	return `${BASE}/search/movie?api_key=${API_KEY}&query=${term}&page=${page}`
}

export function constructTrendingURL(page) {
	return `${BASE}/trending/movie/week?api_key=${API_KEY}&page=${page}`
}

