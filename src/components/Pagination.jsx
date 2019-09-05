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
		} else if (currentPage >= 499) {
			startPage = 495;
			endPage = 499;
			totalPages = 499;
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

	if (totalPages >= 499) {
		totalPages = 499
	}
	


	for(let i = startPage; i <= endPage; i++) {
		pageLinks.push(
			<li key={i + 'z'} className="pageNumbers" style={{textDecoration: currentPage === i ? 'underline': 'none', pointerEvents: currentPage === i ? 'none': '' }} onClick={() => props.pagination(i)}><a href="#top">{i}</a></li>
		);
	}


	return (
		<div>
			{
				props.totalPages >= 1 ?
					<ul className="pagination-links">
						<li className="pageNumbers" style={{ pointerEvents: currentPage === 1 ? 'none' : '' }} onClick={() => props.pagination(1)}><a href="#top">First Page</a></li>
						<li>...</li>
						{pageLinks}
						<li>...</li>
						<li className="pageNumbers" style={{ pointerEvents: currentPage === totalPages ? 'none' : '' }} onClick={() => props.pagination(totalPages)}><a href="#top">Last Page</a></li>	
							<span className="fa fa-arrow-up"></span>						
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






	