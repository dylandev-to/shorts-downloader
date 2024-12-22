const app = require("express")()
const env = require("dotenv").config()

app.get('/', (req, res) => {
    res.json(      {
        name: "john"
      })
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})