function Kiemtra(a) {
	if(a % 2 == 0){
		document.write("so " + a + " la so chan")
	}else{
		document.write("so " + a + " la so le")
		document.write("</br>");
	}
}
Kiemtra(25)
function Fibo(n) {
    var f1 = 1;
    var f2 = 1;
    var fn = f1 + f2; 
    if (n == 1 || n == 2)
        document.write("so " + n + " nam trong day fibo từ 1-100");
    	
    else {
        while (fn < n) {
            f1 = f2;
            f2 = fn;
            fn = (f1 + f2);
        }
        if (fn == n) 
            document.write("so " + n + " nam trong day fibo tu 1-100");
        else
            document.write("so " + n + " khong nam trong day fibo từ 1-100");
        	document.write("</br>");
    }
}
Fibo(89);
function Sochinhphuong(n) {
    var a = 1;
    while (a * a < n) {
        a++;
    }
    if (a * a == n) 
        document.write("so " + n + " la so chinh phuong");
    else
    	document.write("so " + n + " khong phai la so chinh phuong");
}
Sochinhphuong(20);

