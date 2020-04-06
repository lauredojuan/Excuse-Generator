

window.onload = () => {
	document.querySelector("#LieButton").addEventListener("click", () => {
	document.querySelector("#excuseline").innerHTML =excuseforge();
})

};

let excuseforge =() => {

let descrip =["A spooky ","A terrifying ","A nice ","A misterious ","An evil "]
let who =["sorcerer ","extraterrestrial ","man ","monster ", "unicorn "]
let accion=["burned ","decorated ","pulverized ","painted ", "disintegrated ", "disappeared "]
let what=["my car ","my computer ","my sandwidch ","my phone ", "my homework "]
let where=["on the street ","in the lake ","in front of the office ","in my house "]
let when=["yesterday. ","this morning. ","last night. ","just now. "]

let desRand = Math.floor(Math.random() * descrip.length);
let whoRand = Math.floor(Math.random() * who.length);
let accRand = Math.floor(Math.random() * accion.length);
let whatRand = Math.floor(Math.random() * what.length);
let wherRand = Math.floor(Math.random() * where.length);
let wheRand = Math.floor(Math.random() * when.length);

return descrip[desRand]+""+who[whoRand]+""+accion[accRand]+""+what[whatRand]+""+where[wherRand]+""+when[wheRand]
	
};

