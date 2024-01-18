const host = "localhost";

function sayHello(nama) {
	return	`Hai Nama Saya ${nama}`;
};

const santri = {
	nama : "Syarif",
	umur : 22,
	kegiatan() {
		return `halo nama saya ${this.nama}`;
	},
};


// module.exports.sayHello = sayHello;
// module.exports.host = host;

// muliple exports

// module.exports = {
// 	sayHello : sayHello,
// 	host : host
// }

module.exports = {sayHello, host, santri}