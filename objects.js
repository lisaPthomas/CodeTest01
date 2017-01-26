//objects 


var person = {
    name: 'Sarah',
    country: 'US',
    age: 35,
    treehouseStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
    var div = document.getElementById('output');
    div.innerHTML = message;
}

//print message to page 'hello my name is Sarah'
var message = '<p>Hello. My Name is ' + person.name + '</p>';
print(message)

//print message to page 'hello my name is Sarah'
var message = '<p>Hello. My Name is ' + person.name + '</p>';
print(message)

//for in loops only work with objects not arrays


//console will log all properties in the object
//name
//country
//age
//treehouseStudent
//skills
for (prop in person) { //prop is not a keyword, you can name it anything
    console.log(prop);

}


//person[prop] has to be in brackets to give values of property
for (prop in person) { //prop is not a keyword, you can name it anything
    console.log(prop, ': ', person[prop]);

}
//further example

var shanghai = {
    population: 14.35e6,
    longitude: '31.2000 N',
    latitude: '121.5000 E',
    country: 'CHN'
};

for (var key in shanghai) {
    console.log(key, ": ", shanghai[key]);
}

//logs
population: 14.35e6
longitude: '31.2000 N'
latitude: '121.5000 E'
country: 'CHN'
