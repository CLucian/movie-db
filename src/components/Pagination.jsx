import React from 'react';
import MovieList from './MovieList';

const Pagination = (props) => {

	let totalPages = props.totalPages;
	let currentPage = 1;

	for (currentPage; currentPage <= totalPages; currentPage++) {
		console.log(currentPage)
	}

	return (
		<div>
			<button>{props.currentPage}</button>
		</div>
	)
}


export default Pagination;




	// const pageLinks = []

	// for(let i = 1; i <= props.pages + 1; i++) {
	// 	let active = props.currentPage == i ? 'active' : '';

	// 	pageLinks.push(<li className={`${active}`} key={i} onClick={() => props.nextPage(i)} >
	// 			<a href="#">{i}</a>
	// 		</li>
	// 	)
	// }



// 	return (
// 		<div className="container">
// 			<div className="row">
// 				<ul className="pagination">
// 					{/* { props.currentPage > 1 ? <li className={`${active}`} onClick={() => props.nextPage(i)} >
// 							<a href="#">{i}</a>
// 						</li> : ''
// 					} */}
// 					{/* { pageLinks }  */}
// 				</ul>
// 			</div>
// 		</div>
// 	)
// }