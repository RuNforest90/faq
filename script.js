var catNames = ['Petrov', 'Valera', 'Mafin', 'Bob'];

var arrayCats = [];


for (var i = 0; i < random(1, 12); i++){
	var cat = {
	    name: catNames[random(0, catNames.length - 1)],
	    color: 'orange',
	    len: 67,
    };
    arrayCats.push(cat);
}

for (var i = 0; i < random(1, 12); i++){
	var cat = {
	    name: catNames[random(0, catNames.length - 1)],
	    color: 'white',
	    len: 45,
	};
	arrayCats.push(cat);
}

for (var i = 0; i < random(1, 12); i++){
	var cat = {
	    name: catNames[random(0, catNames.length - 1)],
	    color: 'grey',
	    len: 56,
	};
	arrayCats.push(cat);
}

for (var i = 0; i < random(1, 12); i++){
	var cat = {
	    name: catNames[random(0, catNames.length - 1)],
	    color: 'red',
	    len: 20,
	};
	arrayCats.push(cat);
}

for (var i = 0; i < random(1, 12); i++){
	console.log(arrayCats[i]);
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min * 1)) + min;
}