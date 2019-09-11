import React from 'react';

class DropDown extends React.Component {
	constructor(props) {
		super(props);
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
								<li onClick={this.props.handleNowPlaying}>Now Playing</li>
								<li onClick={this.props.handleTopRated}>Top Rated</li>
								<li onClick={this.props.handleAction}>Action</li>
								<li onClick={this.props.handleAdventure}>Adventure</li>
								<li onClick={this.props.handleComedy}>Comedy</li>
								<li onClick={this.props.handleCrime}>Crime</li>
								<li onClick={this.props.handleHorror}>Horror</li>
								<li onClick={this.props.handleRomance}>Romance</li>
								<li onClick={this.props.handleSciFi}>Sci-Fi</li>
								<li onClick={this.props.handleWar}>War</li>
							</ul>
					</div>
					)}
				</div>
			</div>
		)
	}

}

export default DropDown;