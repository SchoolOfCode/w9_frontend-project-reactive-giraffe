import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "../Button";
import Input from "../Input";
import CardDisplay from "../CardDisplay";
import CardContainer from "../CardContainer";

import moment from 'moment';
moment().format();



// How to connect DB to get post time?
// install dotenv
// submit > get posttime, recent time - posttime = time 
// e.g 12:00 , get data from DB , get recent time = 13:00, time : 13:00 -12:00 = 1:00

// let date_1 = new Date ('6/21/2022')
// let date_2 = new date();

// let difference = date_1.getTime() - datee_2.getTime();
// console.log(difference) //base on ref time in milliseconds 

// use moment.js ?

function App() {
	const [question, setQuestion] = useState("");
	const [questionArray, setQuestionArray] = useState([
		{
			id: "test",
			name: "test",
			room_number: "test",
			message: "test",
		},
	]);
	const [name, setName] = useState("");
	const [id, setId] = useState(1);
	const [roomNumber, setRoomNumber] = useState("");

	function storeQuestion(event) {
		setQuestion(event.target.value);
		console.log(event.target.value);
	}

	function storeName(event) {
		setName(event.target.value);
	}

	function storeRoomNumber(event) {
		setRoomNumber(event.target.value);
	}

	function clickSubmit() {
		const questionObject = {
			id: id,
			name: name,
			room_number: roomNumber,
			message: question,
		};

		setQuestionArray([...questionArray, questionObject]);
		console.log(questionArray);
		setQuestion("");
		setName("");
		setRoomNumber(null);

		//Post request
	}

  let date = moment().format('MM-DD-YYYY hh:mm:ss')
  console.log(date);

	return (
		<div className="App">
			<header className="App-header">
        <div className="q-bg">
				<Input
					placeholder={"Name"}
					value={name}
					handleChange={storeName}
				></Input>
				<Input
					placeholder={"Room number"}
					value={roomNumber}
					handleChange={storeRoomNumber}
				></Input>
				<Input
					placeholder={"Enter question..."}
					value={question}
					handleChange={storeQuestion}
				></Input>
				<Button buttonText={"Submit"} handleClick={clickSubmit}></Button>
				<CardContainer array={questionArray} time={"12:00"}></CardContainer>
        </div>
			</header>
		</div>
	);
}

export default App;
