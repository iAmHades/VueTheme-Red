var ejs = require('ejs');
var users = ['geddy', 'neil', 'alex'];
var fs = require('fs');
var path = './editor/ejs/src/index.ejs';
var fileSize;
var file = fs.readFileSync(path, "utf8");
var outdir = ejs.render(file, {
	users: users
});
fs.writeFile('./editor/ejs/target/index.html', outdir, (err) => {
	if (err) throw err;
	console.log('It\'s saved!');
});