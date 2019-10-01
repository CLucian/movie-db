
// Returns true/false if type of genre from array
export function isGenre(type){
	const genres = ['action', 'adventure', 'comedy', 'crime', 'romance', 'horror', 'scifi', 'war']
	return genres.includes(type)
}

export function isCategory(type){
	const categories = ['nowPlaying', 'trending', 'topRated']
	return categories.includes(type)
}