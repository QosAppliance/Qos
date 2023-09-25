const application = require('polka')()

const sirv = require('sirv')('source')

const lokijs = require('lokijs')

const database = new lokijs('sandbox.db', {
    autosave: true,
    autosaveInterval: 10000,
    autoload: true
})

const occupants = database.addCollection('occupants')

application.use(sirv)

application.get('/', function(_, response) {

    response.end('Witamy w QOS')

})

application.get('/os', function(_, response) {

    response.end(process.env.vacant)

})

application.listen(process.env.vacant)