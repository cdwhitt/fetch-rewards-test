//Filters out items where name === ""|| null
const filterData = (data) => {
	const filteredData = data.filter(
		(item) => item.name !== "" && item.name !== null
	)
	return filteredData
}

//Sorts by listId and id
const sortData = (filteredData) => {
	const sortedData = filteredData.sort(function (a, b) {
		const listIdA = a.listId
		const listIdB = b.listId

		//Sort first on listId
		if (listIdA > listIdB) {
			return 1
		} else if (listIdA < listIdB) {
			return -1
		} else {
			// If the listIds are the same, do a nested sort on id
			const idA = a.id
			const idB = b.id

			if (idA > idB) {
				return 1
			} else if (idA < idB) {
				return -1
			} else {
				return 0
			}
		}
	})

	return sortedData
}

module.exports = {
	filterData,
	sortData,
}
