const hapi = require('@hapi/hapi');
const routes =  require('./routes')

const host = 'localhost';
const port = 5000;


const init = async () => {
	const server = hapi.server({
		host,
		port,
		routes : {
			cors : {
				origin : ['*'],
			},
		},
	});
	await server.start();
	console.log(`Selamat server telah berjalan pada ${server.info.uri}`);
};

init();