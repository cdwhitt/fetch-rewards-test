import React from "react"
import { Table, Dimmer, Loader } from "semantic-ui-react"

const List = ({ list, loading }) => {
	if (loading) {
		return (
			<Table.Row>
				<Table.Cell>
					<Dimmer active>
						<Loader>Loading</Loader>
					</Dimmer>
				</Table.Cell>
			</Table.Row>
		)
	}

	return (
		<>
			{list.map(({ name, listId, id }) => (
				<Table.Row key={name}>
					<Table.Cell>{listId}</Table.Cell>
					<Table.Cell>{name}</Table.Cell>
					<Table.Cell>{id}</Table.Cell>
				</Table.Row>
			))}
		</>
	)
}

export default List
