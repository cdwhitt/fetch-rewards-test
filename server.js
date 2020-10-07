const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5000
const axios = require("axios")
// const cors = require("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())

app.get("/api/fetch-rewards-data", async (req, res) => {
	const { data } = await axios.get(
		"https://fetch-hiring.s3.amazonaws.com/hiring.json"
	)

	const filteredData = data.filter(
		(item) => item.name !== "" && item.name !== null
	)

	console.log(filteredData, "FILTERED DATA")

	res.send(filteredData)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
