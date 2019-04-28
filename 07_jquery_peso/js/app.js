
// Jquery $ puede seleccionar los elementos 
//mediante su id, clase o nombre de etiqueta


//seleccion por nombre de etiqueta 
//la funcion .tex{} sirve para recuperar o asignar 
// texto a una etiqueta
$("h1").text("algo");

//seleccion por clase( . = class)
$("subtitulo").text("Otro parametro");

// seleccion pon id ( # = id)
$("#p1").css("font-size", "1em");


//seleccion por nombre de etiqueta
//asignacion de evento click al boton 
//funcion anonimas que se dispara cuando ocurre el evento
$("button").click ( function(){

	let masa = $("input").val();

	const gMart=3.7;
	const gJup = 24.7;

	let pj = masa * gJup;
	let pm = masa * gMart;

	console.log( pj, pm );

	$("#p1").html( "Tu peso en marte es : "+pm+ "<br>Tu peso en jupiter es: "+pj);

})