var catNames = ['Pushok', 'Marsik', 'Mafik', 'Tusik'];
var catColors = ['blue', 'white', 'red',];
var catlen = [89, 56, 13,];
var cat = {
	name: catNames[random(0, catNames.length - 1)],
	color: 'orange',
	len: 30,
};
var cat={
	name: catNames[random(0, catNames.length - 1)],
	color: catColors[random(0, catColors.length - 1)],
	len: catlen[random(0, catlen,length - 1)],
}

var arrayCats = [cat, cat, cat];
 
for (var i = 0; i < arrayCats.length; i++) {
	console.log(arrayCats[i]);
}
 
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(0, 5));
