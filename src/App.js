import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
const App = () => {
	const [list, setList] = useState([])

	useEffect(() => {
		const callApiAndSetData = async () => {
			const { data } = await axios.get("/api/fetch-rewards-data")

			setList(data)
		}

		callApiAndSetData()
	}, [])

	const listNodes = list.map((listItem) => {
		return <li key={listItem.id}>{listItem.name}</li>
	})

	return (
		<div className="App">
			<ul>{listNodes}</ul>
		</div>
	)
}

export default App
