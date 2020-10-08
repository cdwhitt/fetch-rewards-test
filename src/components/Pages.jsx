import React from "react"
import { List, Button } from "semantic-ui-react"

const Pages = ({ listItemsPerPage, totalListLength, paginate }) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalListLength / listItemsPerPage); i++) {
		pageNumbers.push(i)
	}
	return (
		<List horizontal>
			{pageNumbers.map((number) => (
				<List.Item key={number}>
					<Button color="blue" onClick={() => paginate(number)}>
						{number}
					</Button>
				</List.Item>
			))}
		</List>
	)
}

export default Pages
