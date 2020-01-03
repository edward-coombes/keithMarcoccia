const express = require('express')
const app = express()
const officeParser = require('officeparser');
const LOCALPORT = 3000

app.set("view engine", 'ejs')
app.use("/styles",express.static(__dirname + "/views/styles"))
app.use("/images",express.static(__dirname + "/assets/images"))
app.use("/documents",express.static(__dirname + "/assets/documents"))

function test() {

	officeParser.parseOffice("assets/documents/SDPTemplate.docx", (data) => {
		console.log(data)
	})
}

app.get("/", (req, res) => {
	res.render("pages/index")
})

app.listen(LOCALPORT, () => {
	console.log(`process started on port ${LOCALPORT}!`)
	test()
})
