The JavaScript comparison operators are as follows:

Equals (==)
Not Equal (!=)
Strict Equal (===)
Strict Not Equal (!==)
Greater than (>)
Greater than or equal (>=)
Less than (<)
Less than or equal (<=)



10 == 10  // ANSWER: True. It returns true because 10 is equal to 10.

10 != 7 // ANSWER: True. It returns a Truthy value because 10 is not equal to 7.

10 == "10" //ANSWER: True. It returns true because 10 equals 10.

10 === "10" //ANSWER: False. This returns false because 10, which is of type number, is not equal to "10" which is of type string. It compares them strictly by their values and by their type.

10 !== "10" // ANSWER: True. It returns a Truthy value because 10, which is of type number, is not equal to "10", which of type string.

10 > 30  //ANSWER: False. It returns false because 10 is not greater than 30.

10 < 50 //ANSWER: True. This returns a truthy value because 10 is less than 50.

10 >= 70  //ANSWER: False. This will return a falsly value because 10 is not greater than 70, nor is it equal to 70.

10 <= 34 //ANSWER: True. This is true because 10 is less than 34 (even though it's not equal to 34 - it's "less than or equal to").
