import React from 'react';

const SearchBox = (props) => {
	return (
		<div className="container">
			<div className="row">
				<form action="" onSubmit={props.handleSubmit}>
					<div className="input-field">
						<input placeholder="Search movie" type="text" onChange={props.handleChange}/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SearchBox;