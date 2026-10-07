// //תרגיל 1

// const myName = "ziv";
// const age = 17;
// const isStudent = true;
// const introduction =
//   `My name is ${myName}, I am ${age} years old, student: ${isStudent}`;

//   console.log(introduction);
// console.log(typeof myName);
// console.log(typeof age);
// console.log(typeof isStudent);

// const course = "JavaScript"
// let completedExercises;
// const isReady = false;
// console.log(typeof course);
// console.log(typeof completedExercises);
// console.log(typeof isReady);

// let completedCount = 0;
// completedCount = 1;
// console.log(completedCount); //עדיף let בגלל שביקשו לשנות את הערך שלו

// //תרגיל 2

// const priceText = "120";
// const quantityText = "3";
// const orderNumber = 5021;
// const numberPrice = Number(priceText);
// const numberQuanitity = Number(quantityText);
// console.log(typeof priceText);
// console.log(typeof numberPrice);
// console.log(typeof quantityText);
// console.log(typeof numberQuanitity);

// let totalPrice = orderNumber + numberPrice + numberQuanitity;
// console.log(totalPrice);

// const orderidText = String(orderNumber);
// console.log(typeof orderNumber);
// console.log(typeof orderidText);

// const price = "120";
// const quantity = 3;
// const total = price + price + price; //מקור הבאג הוא שהמשתנה פרייס הוא מטיפוס מחרוזת  
// console.log(total);

// console.log(Number("8") + 2); //הפלט יהיה 10 שזו פעולה חשבונית של 8+2 
// console.log(String(8) + 2); //הפלט יהיה 82 בגלל ש8 מוגדר כמחרוזת אז הפלוס לא משמש כפעולת חשבון אלה כמה שיוצג לאחר ה8

// //תרגיל 3

// const my_age = 17; 
// const has_Permission = true; 
// const is_Registration_Open = true; 
// const participant_Id = 24; 

// if(my_age >= 18 || has_Permission && is_Registration_Open)
// {
//   console.log("eligible");
// }
// else
// {
//   console.log("not eligible");
// }

// if(participant_Id%2===0)
//   console.log("zugi");
// else
//   console.log("e zugi");

// if (is_Registration_Open && participant_Id === 24)
// {
//   console.log("registered");
// }

// if(is_Registration_Open == "false")
// {
//   console.log("closed")
// }
// else if(my_age<18 || has_Permission == "false")
// {
//   console.log("waiting for approval")
// }
// else
//   console.log("registered")

// //תרגיל 4

// const completed = true;
// const status = completed ? "Done" : "In progress";
// console.log(status1); 

// const stock = 7;
// const stockMessage = stock > 0 ? "in stock" : "out of stock";
// console.log(stockMessage);

// const price2 = 750;
// const label = price2 >= 700 ? "Premium" : "Regular";
// console.log(label); //הפלט יהיה פרימיום

// //בטרנרי מתאים יותר להשתמש כאשר יש שתי ערכים שהם האופציות ובאיפ או אלס מתאים יותר שנרצה לבצע פעולות בהתאם לתנאי או שיהיו יותר משתי אופציות 

