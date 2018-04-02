console.log("\n=====Function=====");
function hello(value) {
	console.log("function : "+value);
}

hello("appu");

console.log("\n=====Method=====");
var obj = {
	name : "appu",
	hello: function() {
		console.log("method : "+ this.name);
	}
};

obj.hello();

console.log("\n=====Method Reference=====");
var obj1 = {
	name : "appu ref",
	hello : obj.hello
};
obj1.hello();

console.log("\n=====Create common method instead refering from one object =====");
function hello() {
	"use strict";
    console.log("hello : "+ this.name);
}
hello();

var obj = {
    m : hello,
    name : "appu"
};
obj.m();

var obj1 = {
    m : hello,
    name : "test"
};
obj1.m();

console.log("=====Constructor======");
function User(id, name) {
    this.id = id;
    this.name = name;
}

var user = new User(1, "appu");
consoloe.log("user id : " + user.id);