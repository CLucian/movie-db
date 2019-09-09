import React from 'react';

class DropDown extends React.Component {
	constructor() {
		super();
		this.state = { 
			open : false
		}
	}

	container = React.createRef();
	state = {
		open: false
	}


	handleButtonClick = () => {
		this.setState(state => {
			return {
				open: !state.open
			}
		})

	}

	handleClickOutside = event => {
		if (this.container.current && !this.container.current.contains(event.target)) {
			this.setState({
				open: false
			});
		}
	};

	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	}
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}


	render() {
		return(
			<div className="navbar-drop">
				<div className="container" ref={this.container}>
					<button type="button" class="button" className="button fa fa-bars drop-down" onClick={this.handleButtonClick}></button>
					{ this.state.open && (
						<div className="dropdown">
							<ul className="genre-lists">
								<li>Now Playing</li>
								<li>Top Rated</li>
								<li>Action</li>
								<li>Adventure</li>
								<li>Comedy</li>
								<li>Crime</li>
								<li>Horror</li>
								<li>Romance</li>
								<li>Sci-Fi</li>
								<li>War</li>
							</ul>
					</div>
					)}
				</div>
			</div>
		)
	}

}

export default DropDown;