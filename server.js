import Express from 'express'
import path from 'path'

const port = 8080

const App = Express()

App.get('/', (req, res) => {
	/*optional stuff to do after getScript */ 
	res.sendFile(path.resolve(__dirname,'static','index.html'))
});

App.listen(port, err => {
 console.log('server is runnig on port'+ port)
})
