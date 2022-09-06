/* CODIGO DEL SIMULADOR DE CUOTAS */

let continuar = 'Y';
let montoBruto = 0;
let cuotas = 0;
let porcentajeInt = 0;
let flagInteres = 'S';
console.log(((5000 * 10)/100)+5000);

const calcularConCuotasIntereses = (montoBruto, cuotas, interes) => {
	let montoTotal = ((montoBruto * interes) / 100) + montoBruto;
	let montoCuota = montoTotal / cuotas;
	return window.alert(
			'Monto total: ' +
				montoTotal +
				'. Numero de cuotas: ' +
				cuotas +
				'. Y el monto a pagar en cada una es: ' +
				montoCuota
	);
};

const calcularConCuotasSinIntereses = (montoBruto, cuotas) => {
	let montoTotal = montoBruto;
	let montoCuota = montoTotal / cuotas;
	return window.alert(
			'Monto total: ' +
				montoTotal +
				'. Numero de cuotas: ' +
				cuotas +
				'. Y el monto a pagar en cada una es: ' +
				montoCuota
	);
};

while (continuar === 'Y') {
	do {
		montoBruto = parseInt(
			prompt('Ingresar el precio de contado del producto a comprar')
		);
		
		if (montoBruto < 1 || Number.isNaN(montoBruto)) {
			window.alert('Ingrese un monto mas alto por favor');
		}
		console.log(montoBruto);
	} while (montoBruto < 1 || Number.isNaN(montoBruto) )


	while (cuotas < 1 || Number.isNaN(cuotas)) {
		cuotas = parseInt(
			prompt(
				'Ingrese las cuotas en las que se va a pagar el producto (Si paga de contado, ingrese 1)'
			)
		);
		
		if (cuotas < 1 || Number.isNaN(cuotas)) {
			window.alert('Ingrese un numero de cuotas mas alto por favor');
		}
		console.log(cuotas);
	}
	

	while (flagInteres !== 'Y' && flagInteres !== 'N') {
		flagInteres = prompt(
			'El producto tiene interes? Si la rta es positiva ingrese Y, sino ingrese N'
		);
		flagInteres = flagInteres.toUpperCase();
		
		console.log(flagInteres === 'Y');
	}

	if (flagInteres === 'Y') {
		while (porcentajeInt <= 0) {
			porcentajeInt = parseInt(
				prompt('Ingrese el porcentaje de interes (sólo el numero, sin el %)')
			);
			if (porcentajeInt <= 0) {
				alert('Ingrese un numero de cuotas mas alto por favor');
			}
		}
		calcularConCuotasIntereses(montoBruto, cuotas, porcentajeInt);
	} else {
		calcularConCuotasSinIntereses(montoBruto,cuotas);
	}
	
	continuar = prompt(
		'Desea continuar? Si la rta es positiva, ingrese Y, sino ingrese cualquier cosa o presione enter'
	);
	continuar = continuar.toUpperCase();
	cuotas = 0;
	porcentajeInt = 0;
	flagInteres = 'S';
}
