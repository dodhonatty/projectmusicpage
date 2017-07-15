import Express from 'express'
import routes from './routes'

const port = 8080

const App = Express()

routes(App)

App.listen(port, err => {
 console.log('server is runnig on port'+ port)
})
