import React from 'react';

const Pagination = (props) => {
	const pageLinks = [];

	const totalPages = props.totalPages;

	for(let i = 1; i <= totalPages; i++) {
		let activePage = props.pageNum == i ? 'active' : '';

		pageLinks.push(<li key={i} className={activePage} onClick={() => props.pagination(i)}><a href="#">{i}</a></li>);
	}

	return (
		<div>
			<ul>
				{ pageLinks }
			</ul>
		</div>
	)
}


export default Pagination;






	