import React from 'react';

const Pages = (props) => {
	
	console.log('CURRENT PAGE:', props.pageNum, 'TOTAL PAGES:', props.totalPages);
	return (
		<div className="directional-buttons">
			{props.pageNum > 1 ?
				<button className="prevPage dirButtons" onClick={props.prevPage}>
					&#8249;
				</button>
				: null
			}
			{ props.pageNum < props.totalPages ? 
				<button className="nextPage dirButtons" onClick={props.nextPage}>
					&#8250;
				</button>
				: null 
			}
			
		</div>
	)
}


export default Pages;

