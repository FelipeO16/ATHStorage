const middleware = {}

middleware['teste'] = require('..\\middleware\\teste.ts')
middleware['teste'] = middleware['teste'].default || middleware['teste']

export default middleware
