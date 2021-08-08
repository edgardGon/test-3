function add(num1, num2){
	return num1 + num2;
}
function subtract(num1, num2){
	return num1-num2;
}
function multi(num1, num2){
	return num1*num2*1;
}
function divide(num1, num2){
	return num1/num2;
}

//para poder usar estas funciones en otro archivo
//hacuendo lo de esta forma se exportar estas funciones en un objecto
/*
exports.add = add;
exports.subtract = subtract;
exports.multi = multi;
exports.divide = divide;
*/

//una segunda foma seria:
//crear un objeto
const Calc = {};

//agregar propiedaes a ese objeto en este caso: funciones ya establceidas
Calc.add = add;
Calc.subtract = subtract;
Calc.multi = multi;
Calc.divide = divide;
//exporta el modulo
module.exports = Calc;

//conclucion funcionara de la misma forma pero esta forma es mas comun

