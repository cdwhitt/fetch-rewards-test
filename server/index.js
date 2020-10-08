const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5000
const axios = require("axios")

const { filterData, sortData } = require("./utility")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/fetch-rewards-data", async (req, res) => {
	const { data } = await axios.get(
		"https://fetch-hiring.s3.amazonaws.com/hiring.json"
	)

	const filteredData = filterData(data)
	const sortedData = sortData(filteredData)

	res.send(sortedData)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
