/* CODIGO DEL CICLO */

let numFinal = parseInt(
	prompt(
		'Ingresar Numero, se calculará de 0 hasta dicho número si es par o impar'
	)
);

for (let i = 0; i <= numFinal; i++) {
	if (i % 2 == 0) {
		console.log('El numero ', i, ' es par campeón');
	} else {
		console.log('El numero ', i, ' es impar campeón');
	}
}
