let express = require('express') //STEP 1 ALL OF THESE ARE NECESSARY EVERY TIME, AND GO TO THE TERMINAL AND "NPM I EXPRESS" & 'NPM I MONGOOSE'
let bp = require('body-parser')
let server = express()
let port = 3000

require('./server-assets/db/mlab-config')

server.use(express.static(__dirname + '/public')) //STEP 4 THIS MAKES IT SO THAT MY FRONT-END WORKS
server.use(bp.json()) //STEP 4.5
server.use(bp.urlencoded({ extended: true }))

//ROUTES
let giftRoutes = require('./server-assets/routes/gift-routes')
server.use('/api/gifts', giftRoutes)



// CATCH ALL
server.get('*', (req, res, next) => {
  res.status(404).send('NO MATCHING ROUTE') //STEP 2 CREATING AN ERROR TO SEND 
})

server.listen(port, () => {
  console.log('Server running on port:', port)// STEP 3 CHECK TO SEE THAT THE SERVER IS RUNNING ON THE PORT
})