var a=10;
var b=3;
var operator="*";


document.write("---Operations using switch---");
document.write("<br>");
document.write("---Multiple value of 10 and 3---");
document.write("<br>");
switch(operator){
	case "+":
		document.write(a+b);
	break;
	case "-":
		document.write(a-b);
	break;
	case "*":
		document.write(a*b);
	break;
	case "/":
		document.write(a/b);
	break;
	case "%":
		document.write(a%b);
	break;
	default:
		document.write("please enter correct Symbol");
}







