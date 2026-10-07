// תרגיל 5

function calculateOrderTotal(unitPrice, quantity)
{
    const total = unitPrice * quantity;
    return total;
}
const orderTotal1 = calculateOrderTotal(35,4)
console.log(orderTotal1);
const orderTotal2 = calculateOrderTotal(44,8)
console.log(orderTotal2);
const orderTotal3 = calculateOrderTotal(12,2)
console.log(orderTotal3);

function calculateOrderTotal2(unitPrice2, quantity2) 
{
  console.log(unitPrice2 * quantity2);
}
calculateOrderTotal2(20, 3);

//תרגיל 6

function getLetterGrade(grade)
{
    if(grade<0 || grade>100)
        return "invalid grade"; 
    else if(grade>=90)
        return "A";
    else if(grade>=80)
        return "B";
    else if(grade>=70)
        return "C";
    else if(grade>=60)
        return "D";
    else
        return "F";
}
console.log(getLetterGrade(95));
console.log(getLetterGrade(83));
console.log(getLetterGrade(70));
console.log(getLetterGrade(48));
console.log(getLetterGrade(101));

//תרגיל 7

const greet = (name) =>
{
  return `Hello, ${name}`;
}

const helloText = greet("ziv")
console.log(helloText);

const calculateFinalPrice = (price, discountPercent) =>
{ 
  const discount = price * discountPercent / 100; 
  const finalPrice = price - discount; 
  return finalPrice; 
}

const finalprice = calculateFinalPrice(25,10);
console.log(finalprice);

const greet2 = (name) => `Hello, ${name}`; //את הפעולה הזאת אפשר לכתוב בכתיבה מקוצרת

//תרגיל 8

const calculatPrice = (price1, price2) => 
{
    if(price1<price2)
       return price1 / 2 + price2;
    else
        return price1 + price2 / 2;
}
const totalprice = calculatPrice(40,60);
console.log(totalprice);
const totalPrice2 = calculatPrice(70,30);
console.log(totalPrice2);


const isExpensive = (price) => price > 500;
const flag = isExpensive(350);
console.log(flag);
const flag2 = isExpensive(560);
console.log(flag2);

const square = (number) =>  number * number;
const num = square(3);
console.log(num);
const num2 = square(6);
console.log(num2);

//תרגיל 9

const product = 
{
  id: 1,
  name: "Laptop",
  price: 999,
  inStock: true
}
const getProductSummary = (product) => `${product.name} - ${product.price} NIS`;

console.log(getProductSummary(product));

const getAvailability = (product) => 
{
    const status = product.inStock ? "Available" : "Unavailable";
    return status;
}

console.log(getAvailability(product))

//עדיף להעביר  לפונקציה את פרודקט כמשתנה בגלל שהיא יכולה ככה להדפיס כל פרודקט שתתן לה ולא רק אחד ספציפי 
