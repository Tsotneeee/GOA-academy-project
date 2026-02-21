const express = require('express')
const { app: page404 } = require('./middleware/page404.cjs') // page not found middleware function
const app = express()
const PORT = 3000
const { usersRouter } = require('./routes/usersRouter.cjs') // users route import
app.use(express.json())//* express json middleware

app.use('/users', usersRouter) // users route




app.use(page404) // if page isn't found this runs
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))