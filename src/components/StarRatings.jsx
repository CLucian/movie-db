import React from 'react';

const StarRatings = (props) => {

	
	const getRating = (num) => {
		const fivePointRating = num / 2;
		return	Math.round(fivePointRating * 2) / 2;
	}

	const getStarPercentage = (num) => {
		const fivePointRating = num / 2;
		return Math.round(fivePointRating * 2) * 10;
	}


	const getStarPercent = (num) => {
		return Math.round(num * 2) / 2 * 10
	}





	console.log('THIS IS THE VOTE AVERAGE', props.rating)

	return(
		<div>
			{props.rating}
			<br></br>
			{getRating(props.rating)}
			<br/>
			{getStarPercentage(props.rating)}
			<div class="rating-star">
				<span className="fa fa-star"></span>
				<span className="fa fa-star"></span>
				<span className="fa fa-star"></span>
				<span className="fa fa-star"></span>
				<span className="fa fa-star"></span>
				<span class="rate" style={{ width: `${getStarPercentage(props.rating)}%`}}>
					<span className="fa fa-star full"></span>
					<span className="fa fa-star full"></span>
					<span className="fa fa-star full"></span>
					<span className="fa fa-star full"></span>
					<span className="fa fa-star full"></span>
				</span>
			</div>
		</div>
	)
}

export default StarRatings;

// style={{ width: `getStarPercent(props.rating)%`}}
// style={{ width: "50%" }}
// return(
// 	<div className="stars-outer">
// 		{}
// 		<div>

// 		</div>
// 	</div>
// )

// 7.4 --> 7.4/2 --> 3.7 --> 