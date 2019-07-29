import React from 'react';

export function paginationNumber(currentPage, totalPages) {
	let startPage;
	let endPage;
	let page1 = 1;


	console.log('TOTAL NUMBER OF PAGES', totalPages); 
	if (totalPages <= 5) {
		startPage = 1;
		endPage = totalPages;
	} else {
		if (currentPage <= 3) {
			startPage = 1;
			endPage = 5;
		} else if (totalPages >= 999) {
			startPage = 995;
			endPage = 999;
			totalPages = 999;
		} else if (currentPage + 2 >= totalPages) {
			startPage = totalPages - 4;
			endPage = totalPages;
		} else {
			startPage = currentPage - 2;
			endPage = currentPage + 2;
		}
	}
	return {
		startPage,
		endPage
	}
} 

const Pagination = (props) => {
	const pageLinks = [];

	let totalPages = props.totalPages;
	let currentPage = props.pageNum;


	const pageValue = paginationNumber(currentPage, totalPages);
	const startPage = pageValue.startPage;
	let endPage = pageValue.endPage;

	if (totalPages >= 999) {
		totalPages = 999
	}
	



	// console.log('Start Page:', startPage);
	// console.log('End Page:', endPage);
	// console.log('Total Pages', totalPages);


	for(let i = startPage; i <= endPage; i++) {
		pageLinks.push(
			<li key={i + 'z'} style={{textDecoration: currentPage === i ? 'underline': 'none', pointerEvents: currentPage === i ? 'none': ''}} onClick={() => props.pagination(i)}><a href="#">{i}</a></li>
		);

		// console.log('This is the current page number:', currentPage)
		// console.log('THIS IS THE TOTAL NUMBER OF PAGES:', totalPages);
	}


	return (
		<div>
			{
				props.totalPages >= 1 ?
					<ul className="pagination-links">
						<li style={{ pointerEvents: currentPage === 1 ? 'none' : '' }} onClick={() => props.pagination(1)}><a href="#">First Page</a></li>
						<li>...</li>
						{ pageLinks }
						<li>...</li>
						<li style={{ pointerEvents: currentPage === totalPages ? 'none' : '' }} onClick={() => props.pagination(totalPages)}><a href="#">Last Page</a></li>	
					</ul>
				: null
			}
		</div>
	)
}

// {
// 	props.totalPages > 1 ?
// 		<ul className="pagination-links">
// 			<li style={{ pointerEvents: currentPage === 1 ? 'none' : '' }} onClick={() => props.pagination(1)}><a href="#">First Page</a></li>
// 			<li>...</li>
// 			{pageLinks}
// 			<li>...</li>
// 			<li style={{ pointerEvents: currentPage === totalPages ? 'none' : '' }} onClick={() => props.pagination(props.totalPages)}><a href="#">Last Page</a></li>
// 		</ul>
// 		: null
// }



export default Pagination;






	