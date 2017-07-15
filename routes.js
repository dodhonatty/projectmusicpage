import path from 'path'
module.exports = App => {
App.get('/', (req, res) => {
	/*optional stuff to do after getScript */ 
	res.sendFile(path.resolve(__dirname,'static','index.html'))
})
}
