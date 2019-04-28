let numIngresado = prompt("Ingrese un número");

let num = parseInt(numIngresado);

if((num%2)=== 0){
    alert( num + " es par");
}else {
    alert("No es par");
}
let n1 = parseInt(prompt("Ingrese el primer número"));

let n2 = parseInt(prompt("Ingrese el segundo número"));




if (n1>n2){
	alert(`$(n1) es mayor`);
}else if (n1<n2) {
	alert(`$(n2) es mayor`);
}else{
	alert(`$(n1) y $(n2) son iguales`);

}
/*
   BUCLE FOR
*/

for (let c = 0; c <=100 ; c++) {
	console.log (c);
}