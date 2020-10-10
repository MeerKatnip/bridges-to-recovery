const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../bridges-to-recovery/public`))

app.get('*', (req, res) => {
    req.sendFile(path.resolve(`${__dirname}/../bridges-to-recovery/public/index.html`));
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
})