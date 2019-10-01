
const API_KEY = `${process.env.REACT_APP_API}`;
const BASE = "https://api.themoviedb.org/3";


export function getCategoryURL(type, page){
	switch (type){
		case 'trending':
			return `${BASE}/trending/movie/week?api_key=${API_KEY}&page=${page}`
		case 'nowPlaying':
			return `${BASE}/movie/now_playing?api_key=${API_KEY}&page=${page}`
		case 'topRated':
			return `${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
		default:
			throw new Error('Type does not exist');
			
	}
}

export function constructSearchURL(term, page) {
	return `${BASE}/search/movie?api_key=${API_KEY}&query=${term}&page=${page}`
}

export function constructMovieIdURL(id) {
	return `${BASE}/movie/${id}?api_key=${API_KEY}`
}

export function constructSimilarMovieIdURL(id) {
	return `${BASE}/movie/${id}/similar?api_key=${API_KEY}`
}



// GENRE SEARCHES

const GENRES = {
	'action': 28,
	'adventure': 12,
	'comedy': 35,
	'crime': 80,
	'romance': 10749,
	'horror': 27,
	'scifi': 878,
	'war': 10752
}


export function constructGenreURL(type, page){
	const genre = GENRES[type] || 28

	return `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=${genre}&page=${page}`
}

