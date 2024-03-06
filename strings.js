
export const longitud = string => {
	let recorrido = 0;
	let contador = 0;
	while (string[recorrido]) {
		recorrido++;
		contador++;
	}

	return contador;
};

console.log(longitud('longitud'));

export const substring = (str, start, end) => {
	let newString = '';
	const strElements = longitud(str);
	for (let i = start; i < end && i < strElements; i++) {
		newString += str[i];
	}

	return newString;
};

console.log(substring('longitud', 0, 4));
