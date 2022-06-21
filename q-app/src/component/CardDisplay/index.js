import React from "react";
import Keyword from "../Keyword";

function CardDisplay(props ) {
	const array = props.array;
	return (
		<div>
			{array.map(function (array) {
				return (
					<div>
						<p>{array.id}</p>
						<div className="flex-container">
							<div className="clockIcon"></div>
							<p>{props.time}</p>
							<p>{array.name}</p>
							<p>Room: {array.room_number}</p>
							<p>Question: {array.message}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default CardDisplay;
