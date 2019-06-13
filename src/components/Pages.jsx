import React from 'react';

const Pages = (props) => {
	
	console.log('CURRENT PAGE:', props.pageNum, 'TOTAL PAGES:', props.totalPages);
	return (
		<div>
			{ props.pageNum < props.totalPages ? 
				<button className="nextPage" onClick={props.nextPage}>
					Next Page
				</button>
				: null 
			}
			{props.pageNum > 1 ?
				<button className="prevPage" onClick={props.prevPage}>
					Previous Page
				</button>
				: null
			}
			{/* <button className="prevPage" onClick={props.prevPage}>
				Previous Page
			</button> */}
		</div>
	)
}


export default Pages;