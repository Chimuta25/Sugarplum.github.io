router.get('/', (req, res) => {
    try {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.status(201).send('ok')
    } catch (error) {
        console.error(error)
    }
})