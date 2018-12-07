var a = 1;
var b = 1;
var c; 
var count = 0;
document.write(a," ",b," ");
function fibonacci ( a , b ) {
	c = a + b ;
	if (c <= 100) {
		document.write(c," ");	
		a = b;
		b = c;
		fibonacci(a,b);
	} else {
		return;
	}
}
fibonacci(a,b);