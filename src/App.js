import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Container } from "semantic-ui-react"
import List from "./components/List"
import Pages from "./components/Pages"
const App = () => {
	const [list, setList] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [listItemsPerPage] = useState(50)

	useEffect(() => {
		const callApiAndSetData = async () => {
			setLoading(true)
			const { data } = await axios.get("/api/fetch-rewards-data")
			setList(data)
			setLoading(false)
		}
		callApiAndSetData()
	}, [])

	const indexOfLastItem = currentPage * listItemsPerPage
	const indexOfFirstItem = indexOfLastItem - listItemsPerPage
	const currentList = list.slice(indexOfFirstItem, indexOfLastItem)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<Container text>
			<Table celled padded striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>List ID</Table.HeaderCell>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>ID</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<List loading={loading} list={currentList} />
				</Table.Body>
			</Table>
			<Pages
				listItemsPerPage={listItemsPerPage}
				totalListLength={list.length}
				paginate={paginate}
			/>
		</Container>
	)
}

export default App
