function add(type, text, id, aJSObj, obj, addId) {
	var x = document.createElement(type)
	x.innerHTML = text
	x.id = id
	if (obj !== undefined) {
		for (var prop in obj) {
			x.style[prop] = obj[prop]
		}
	}
	if (addId == undefined) {
		document.body.appendChild(x)
	}
}
function times(times, fun) {
	for (var i = 0; i < times; i++) {
		fun();
	}
}