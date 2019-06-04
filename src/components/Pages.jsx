import React from 'react';

const Pages = (props) => {
	
	
	return (
		<div>
			<button className="nextPage" onClick={props.nextPage} >
				Next Page
			</button>
			<button className="prevPage" onClick={props.prevPage}>
				Previous Page
			</button>
		</div>
	)
}


export default Pages;