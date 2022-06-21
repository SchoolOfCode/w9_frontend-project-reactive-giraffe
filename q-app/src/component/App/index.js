import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "../Button";
import Input from "../Input";
import CardDisplay from "../CardDisplay";
import CardContainer from "../CardContainer";


// How to connect DB to get post time?

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

	return (
		<div className="App">
			<header className="App-header">
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
			</header>
		</div>
	);
}

export default App;
