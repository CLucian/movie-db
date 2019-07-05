import React from 'react';

const Pages = (props) => {
	
	console.log('CURRENT PAGE:', props.pageNum, 'TOTAL PAGES:', props.totalPages);
	return (
		<div className="directional-buttons">
			<button className="prevPage dirButtons" onClick={props.prevPage} style={{ pointerEvents: props.pageNum > 1 ? '' : 'none' }}>&#8249;</button> 
			<button className="nextPage dirButtons" onClick={props.nextPage} style={{ pointerEvents: props.pageNum < props.totalPages ? '' : 'none' }}>&#8250;</button>
		</div> 
	)
}


export default Pages;




// { props.totalPages > 1 ? <button className="prevPage dirButtons" onClick={props.prevPage} style={{ pointerEvents: props.pageNum > 1 ? '' : 'none' }}>&#8249;</button> : null }
// { props.totalPages > 1 ? <button className="nextPage dirButtons" onClick={props.nextPage} style={{ pointerEvents: props.pageNum < props.totalPages ? '' : 'none' }}>&#8250;</button> : null }

