console.log("%cAnimV", "background-color: black; color: white; padding: 10px", "running");
var usemes = {
	timequotient: 1
}
var p = {
	fadein: {
		opacity: 0,
		direction: "reverse",
		easing: "linear",
		duration: 300
	}
}
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
	}else{
		document.getElementById(addId).appendChild(x)
	}
	if (aJSObj !== undefined) {
		aJSObj.target = "-%-+'" +id+ "'+-%-"
		//setTimeout(function(){
				//var xa = JSON.stringify(aJSObj).replace("\"-%-\+'", "document.getElementById('").replace("+-%-\"", ")")
				//eval("anime(" + xa + ")")
				//console.log(document.getElementById("test"));
				aJSObj.targets = x
				anime(aJSObj)
		//},500)
	}
}
function times(times, fun) {
	for (var i = 0; i < times; i++) {
		fun(i);
	}
}
function wait(time, fun) {
	setTimeout(
		function(){fun()}, time*1000
	)
}
function s(call, waitt) {
	if (waitt !== undefined) {
		var test = call
		call = waitt
		waitt = test
	}
	//console.log(call)
	wait(usemes.timequotient + waitt,
		function(){call();if (waitt!==undefined) {usemes.timequotient =+ waitt;}}
	)
	//usemes.timequotient += waitt
	return {s: s}
}
function rem(query) {
	document.querySelectorAll(query).forEach((e)=>e.remove())
}
function cls(){rem("body > *")}
var a = anime
function style(sty){
	var aa = document.createElement("style")
	aa.innerHTML = sty
	document.head.appendChild(aa)
}
function el(query){
	if (query.startsWith("#")) {
		return document.getElementById(query.replace(/#/, ""))
	}
}