const hapi = require('@hapi/hapi');
const host = 'localhost';
const port = 5000;


const init = async (host, port) => {
	const server = hapi.server(
	{
		host, port,
	})

	await server.start();
	console.log(`Server telah berjalan pada ${server.info.uri}`);

	server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { username = `user` , location = `loc` } = request.query;    
        return `Hello, ${username} From ${location}!`;
    },
 });
}

init(host,port);
