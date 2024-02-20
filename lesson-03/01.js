const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
	let colorsFiltered = colors.filter(color => color === 'черный' || color === 'красный' || color === 'желтый').join('-')
	return colorsFiltered
}

console.log(createColorString());

