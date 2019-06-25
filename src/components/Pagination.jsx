import React from 'react';

export function paginationNumber(currentPage, totalPages) {
	let startPage;
	let endPage;

	if (totalPages <= 5) {
		startPage = 1;
		endPage = 5;
	} else {
		if (currentPage <= 3) {
			startPage = 1;
			endPage = 5;
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

	const totalPages = props.totalPages;
	let currentPage = props.pageNum;


	const pageValue = paginationNumber(currentPage, totalPages);
	const startPage = pageValue.startPage;
	const endPage = pageValue.endPage;



	console.log('Start Page:', startPage);
	console.log('End Page:', endPage);


	for(let i = startPage; i <= endPage; i++) {
		let activePage = currentPage === i ? 'active' : '';

		pageLinks.push(<li key={i + 'z'} className={activePage} onClick={() => props.pagination(i)}><a href="#">{i}</a></li>);

		console.log('This is the current page number:', currentPage)
	}

	

	return (
		<div>
			<ul className="pagination-links">
				{ pageLinks }
			</ul>
		</div>
	)
}


export default Pagination;






	