import React from 'react';

// import { ReactComponent as Search } from "../img/SVG/search.svg";

const SearchBox = (props) => {
	return (
		<div className="container-searchbox">
			<div className="row">
				<form action="" onSubmit={props.handleSubmit} className="searchForm">
					<div className="input-field">
						<input placeholder="Search Movie Title..." type="text" onChange={props.handleChange} className="__searchTerm" />
					</div>
					{/* <div className="submit">{
						props.searchTerm.length > 0 ? 
						<button className="search-button" onClick={props.handleSubmit}>
							<Search className="search-button__searchIcon" />
						</button>
			 			: null}
			 		</div> */}

				</form>
				<div className="discover">
					<button className="discover__button" type="button" onClick={props.handleTrending}>Popular Movies</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBox;


{/* <svg class="icon icon-search"> */ }
{/* <use xlinkHref="img/SVG/search.svg#icon-search">
								</use>
							</svg> */}