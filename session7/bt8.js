function solonnhat(a , b , c , d){
	if ((a > b) && (a > c) && (a > d)) {
		document.write(a + " la so lon nhat");
	}
	else if ((b > c) && (b > d)) {
		document.write(b + " la so lon nhat");
	}
	else if (c > d) {
		document.write(c + " la so lon nhat");
	}
	else {
		document.write(d + " la so lon nhat");
	}
	document.write("</br>");
}
function sonhonhat(a , b , c , d){
	if ((a < b) && (a < c) && (a < d)) {
		document.write(a + " la so nho nhat");
	}
	else if ( (b < c) && (b < d)) {
		document.write(b + " la so nho nhat");
	}
	else if (c < d) {
		document.write(c + " la so nho nhat");
	}
	else {
		document.write(d + " la so nho nhat");
	}
}
solonnhat(50,78,3,20);
sonhonhat(50,78,3,20);