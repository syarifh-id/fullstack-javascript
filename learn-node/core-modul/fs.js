const fs = require('fs');
// console.log(fs);

// try {
// 	fs.writeFileSync('text.txt', 'menuliskan text secara synchronous ke file');
// }catch(e){
// 	console.log(e)
// }


// const text = fs.readFileSync('text.txt' , 'utf-8');
// console.log(text);

fs.writeFile('text.txt', 'menuliskan text secara Asynchronous kedalam file', (e) => {console.log(e)})

fs.readFile('tegxt.txt', 'utf-8', (e, data) => {
	if(e) {
		console.log(e);
	}else{
		console.log(data);
	}
})