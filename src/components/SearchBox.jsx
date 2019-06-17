import React from 'react';

const SearchBox = (props) => {
	return (
		<div className="container--searchbox">
			<div className="row">
				<form action="" onSubmit={props.handleSubmit}>
					<div className="input-field">
						<input placeholder="Search movie" type="text" onChange={props.updateSearchTerm} />
					</div>
					{ props.searchTerm.length > 0 ? <button onClick={props.handleSubmit}>Submit</button> : null }
					<button type="button" onClick={props.handleTrending}>Discover</button>
				</form>
			</div>
		</div>
	)
}

export default SearchBox;