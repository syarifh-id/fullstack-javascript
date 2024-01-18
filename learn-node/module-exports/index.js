// const sayHello = (nama,umur) => `hai nama saya ${nama}, umur saya ${umur}`;
// console.log(sayHello(nama,2020-lahir));

const server = require('./server.js')

console.log(server.sayHello("Syarif"), server.host);

console.log(server.santri)
console.log(server.santri.kegiatan())