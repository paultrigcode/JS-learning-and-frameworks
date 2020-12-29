hello = (val) => "Hello" + val;
console.log(hello("paul")); /* more that one parameters with just a single statement */

hello = val => "Hellooô" +" " +val
console.log(hello("tope")); /* one parameter with one return statement */

hello = () => {
	return "hello world"; /* no parameter with maybe more than one return statement */
}
console.log(hello());


