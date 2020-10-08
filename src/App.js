import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table } from "semantic-ui-react"
const App = () => {
	const [list, setList] = useState([])
	// const [loading, setLoading] = useState(false)
	// const [currentPage, setCurrentPage] = useState(1)
	// const [listItemsPerPage, setListItemsPerPage] = useState(10)

	useEffect(() => {
		const callApiAndSetData = async () => {
			const { data } = await axios.get("/api/fetch-rewards-data")
			setList(data)
		}
		callApiAndSetData()
	}, [])

	const tableRows = list.map(({ id, listId, name }) => {
		return (
			<Table.Row key={name}>
				<Table.Cell>{listId}</Table.Cell>
				<Table.Cell>{name}</Table.Cell>
				<Table.Cell>{id}</Table.Cell>
			</Table.Row>
		)
	})

	return (
		<Table celled padded>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>List ID</Table.HeaderCell>
					<Table.HeaderCell>Name</Table.HeaderCell>
					<Table.HeaderCell>ID</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>{tableRows}</Table.Body>
		</Table>
	)
}

export default App
