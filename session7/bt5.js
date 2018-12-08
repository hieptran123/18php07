var a;
var b;
function kiemtra(a , b) {
	switch(a){
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
	 	document.write("thang ", a ,"nam" , b ,"co 30 ngay");
	 	break;
	case 2:
		if((b % 4==0) && (b % 100! =0 )){
			document.write("thang 2 ", b ,"co 29 ngay");
		}	
		else{
			document.write("thang 2", b ,"co 28 ngay");
		}
	default:
	 	document.write("thang ",a,"co 31 ngay");
	 	break;
			}
}
kiemtra(7,2000)