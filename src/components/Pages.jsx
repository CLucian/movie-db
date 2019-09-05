import React from 'react';

const Pages = (props) => {
	
	console.log('CURRENT PAGE:', props.pageNum, 'TOTAL PAGES:', props.totalPages);

	let totalPages = props.totalPages

	if (totalPages > 499) {
		totalPages = 499
	}

	return (
		<div>
			{
				props.totalPages >= 1 ?
					<div className="directional-buttons">					
					</div> 
				: null
			}
		</div>
	)
}


export default Pages;



