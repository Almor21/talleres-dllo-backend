function convertidorTemp(c) {
	return c * (9 / 5) + 32;
}

// Para valor positivo: type==='positivo'
// Para valor negativo: type==='negativo'
// por defecto undefined
function resolvedor(a, b, c, type) {
	let x;
	if (type === 'positivo') {
		x = (-1 * b + Math.SQRT2(b ** 2 - 4 * a * c)) / (2 * a);
	} else if (type === 'negativo') {
		x = (-1 * b - Math.SQRT2(b ** 2 - 4 * a * c)) / (2 * a);
	}

	return x;
}

function mejorParidad(num) {
	return !(num % 2);
}

function peorParidad(num) {
	// Transformamos el numero a binario
	const bin = num.toString(2);

	// Obtenemos la longitud de la cadena
	let c;
	let length = 0;
	do {
		length++;
		c = bin.slice(length, length + 1);
	} while (c !== '');

	// Hacemos un split de la cadena
	let arreglo = [];
	for (let i = 0; i < length; i++) {
		// Usamos unshift para agregar cada caracter al inicio del arreglo
		// ya que push me cae mal
		arreglo.unshift(bin.slice(i, i + 1));
	}

	// Creamos el objeto usando entries porque agregar datos en un objeto usando
	// obj[key] = value esta sobrevalorado.
	// Este objeto tendra todas las posiciones de mi cadena
	const entriesObj = [];
	for (let i = 0; i < length; i++) {
		entriesObj.unshift([i, undefined]);
	}
	const obj = Object.fromEntries(entriesObj);

	// Guardamos los valores en nuestro objeto
	for (let i = 0; i < length; i++) {
		// Esto es modificar no agregar. Es diferente
		obj[i] = arreglo[length - 1 - i];
	}

	// Ahora necesitamos la ultima posicion.
	// Para esto marcaremos todas las posiciones que no sean la ultima como undefined
	for (let i = 0; i < length - 1; i++) {
		obj[i] = undefined;
	}

	// Asi solo tendremos que buscar aquella que no sea undefined para saber que esa
	// es la ultima posicion
	let pos;
	for (let i = length - 1; i >= 0; i--) {
		switch (obj[i]) {
			case '0':
				pos = i;
				break;
			case '1':
				pos = i;
				break;
		}
	}

	let value = obj[pos];

	// Ahora solo tenemos que retificar si es 1 o 0 para saber si es par o no
	if (value === '0') {
		return true;
	} else if (value === '1') {
		return false;
	}
}