var number1 = Number(prompt("Бірінші санды енгіз"));
var number2 = Number(prompt("Екінші санды енгіз"));
var number3 = Number(prompt("Үшінші санды енгіз"));

if (number1 > number2 && number1 > number3){
    alert("Ең үлкен және ең кішкентай санның айырмасы" + (number1 - number2) || (number1 - number3) );
} else if ( number2 > number1 && number2 > number1){
    alert("Ең үлкен және ең кішкентай санның айырмасы" + (number2 - number1) || (number2 - number3) );
} else if (number3 > number2 && number3 > number1){
    alert("Ең үлкен және ең кішкентай санның айырмасы " + (number3 - number2) || (number3 - number1));
}