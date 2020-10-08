const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5000
const axios = require("axios")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/fetch-rewards-data", async (req, res) => {
	//Fetch JSON data
	const { data } = await axios.get(
		"https://fetch-hiring.s3.amazonaws.com/hiring.json"
	)

	//Filter out items with "" or null name
	const filteredData = data.filter(
		(item) => item.name !== "" && item.name !== null
	)

	//Sort items first by listId then by id
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

	//Send sortedData to front end
	res.send(sortedData)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
