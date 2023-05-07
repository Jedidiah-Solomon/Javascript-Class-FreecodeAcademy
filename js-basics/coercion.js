//Data Type conversion

//Firstly: ans is 79
 let a = 7;
 let b = '9';  
 let c = a + b;
 console.log('Answer is:' + c)

//Secondly: Ans is 16
let a = 7;
 let b = '9';
 b = parseInt(b,10);  // the parseInt converts string to number, the (b, 10) means 10 is for base 10, if I want base 8, then I will use (b, 8)
 let c = a + b;
console.log('Answer is:' + c)

//Thirdly: ans is NAN (Not-a-Number)
let d = parseInt('Jedy', 10);
console.log(d);

//Fourthly: Ans is 10
let e = parseInt(10,'Jedy');
console.log(e);

let f = isNAN(d);
console.log(f)