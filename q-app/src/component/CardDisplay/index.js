import React from "react";
import Timer from "../Timer";
import Button from "../Button/";

function CardDisplay(props) {
	const array = props.array;

	if (array === undefined) { //(array[array.length-1] === undefined)
    return <div>Loading...</div>;
  }

	if (array) { //(array[array.length - 1])
    return (
      <div>
      <div className="pd-top"></div>
        {array
          .filter((object) => object.status === "waiting")
          .map((filteredArray) => (
            <div key={filteredArray.ticket_id}>
              <p className="small-grey">{filteredArray.ticket_id}</p>
              <div className="flex-container">
                <Timer />
                <p>{filteredArray.name}</p>
                <p>Room: {filteredArray.roomnumber}</p>
                <p>Question: {filteredArray.message}</p>
                <Button
                  buttonText={"Accept"}
                  handleClick={props.onUpdateInProgTicket}
                  id={filteredArray.ticket_id}
                ></Button>
                <div className="keyword-style">
                  <p>{filteredArray.keywords}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

}

export default CardDisplay;
