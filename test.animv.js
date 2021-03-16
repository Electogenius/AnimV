		//format: tagname text/src id animejs style parent
s(() => {
	times(15, (i) => {
		add("p", "Welcome", "test" + i, { fontSize: 20, easing: "easeOutExpo" }, { fontSize: 0, textAlign: "center"})
		wait(1, () => {
			a({
				targets: "p",
				opacity: 0,
				duration: anime.stagger(250, { from: "center" }),
				easing: "linear"
			})
		})
	})
}).s(2.5, () => { //scene 2
	cls();
	add("h1", "AnimV", "why", p.fadein);
	add("p", "A badly made, tiny javascript 'library' for making animations in your browser", "d", p.fadein)
	add("p", "Because who needs to sell an organ a month for powerful animation software", "e", p.fadein)
	style("pre{overflow:scroll;background-color:#222;padding:5px;border-radius:3px}")
	add("pre", "add('p', 'Hello world!', 'elementId', p.fadein, {font: 'monospace'}, el('#app'))", "code", p.fadein)
})

//add('p', 'Hello world!', 'elementId', p.fadein, {font: 'monospace'}, )