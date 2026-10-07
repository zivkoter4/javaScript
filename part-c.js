//תרגיל 10
const categories = ["Electronics", "Fashion", "Books", "Home"];
console.log(categories[0]);
console.log(categories[categories.length-1]);
console.log(categories.includes("Books"));
console.log(categories.indexOf("Fashion"));
console.log(categories.indexOf("sports"));
categories.push("sports");
const deleted = categories.pop();
categories.splice(1,1,"Games");
//הפעולות שמשנות את המערך המקורי הן: push, pop, splice

//תרגיל 11
const stockAmounts = [4,0,7,3,0];
const calculateTotalStock = (arr) =>
{
let total = 0;
for(const amount of arr)
{
    total = total + amount;
}
return total;
}

const countOutOfStock = (array) =>
{
    let counter = 0;
    for(const amount2 of array)
    {
     if(amount2===0)
        counter++;
    }
    return counter;
}

const totalAmount = calculateTotalStock(stockAmounts);
console.log(totalAmount);
const countZero = countOutOfStock(stockAmounts);
console.log(countZero);

const calculateTotalStock2 = (arr2) =>
{
    let totaly = 0;
    for(let i = 0; i < arr2.length; i++)
    {
        totaly = totaly + arr2[i];
    }
    return totaly;
}
console.log(calculateTotalStock2(stockAmounts));

//אינדקס נצטרך כאשר נרצה לעשות פעולות הדורשות לדעת את המיקום במערך ופור...אופ כאשר מה שמעניין אותנו זה רק הערכים במערך

//תרגיל 12
const user = {
id: 1,
firstName: "Dana",
lastName: "Levi",
age: 17
};

console.log(user.firstName + " " + user.age);
user.age = 18;
user.email = "danaLevi@gmail.com";
console.log(`id - ${user.id}, firstname -  ${user.firstName}, lastname - ${user.lastName}, age - ${user.age}, email - ${user.email}`)

console.log(user.Firstname); //הקוד אינו מחזיר את שם המשתמש מכיוון שהשם שאחרי הנקודה אינו זהה בדיוק לשם של התכונה כמו שמופיעה באובייקט
console.log(user.firstName); // מתוקן

//תרגיל 13
const post = {
  id: 101,
  content: "JavaScript practice day",
  author: {
    id: 7,
    name: "Noa",
    username: "@noa_dev"
  },
  comments: [
      {id: 1, user: "@amit", text: "Good luck!" },
      {id: 2, user: "@lior", text: "Nice post" },
  ]
};

console.log(post.author.name + " - " + post.author.username);
console.log(post.comments[0].text);
console.log(post.comments.length);
post.comments.push({id:3, user: "@ziv",text: "Like it!" });

console.log(post.author.name);       //החיזוי שלי: יודפס שם הכותבת נועה
console.log(post.comments[1].user); // החיזוי שלי: יודפס שם כותב התגובה השנייה - ליאור

//תרגיל 14
const products = [
   { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
   { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
   { id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
   { id: 4, name: "Backpack", price: 80, category: "Fashion", inStock: true }
 ];

 console.log(`product 1: id - ${products[0].id}, name - ${products[0].name}, price - ${products[0].price}`);
 console.log(`product 2: id - ${products[1].id}, name - ${products[1].name}, price - ${products[1].price}`);
 console.log(`product 3: id - ${products[2].id}, name - ${products[2].name}, price - ${products[2].price}`);
 console.log(`product 4: id - ${products[3].id}, name - ${products[3].name}, price - ${products[3].price}`);

 const countAvailableProducts = (arr) =>
 {
    let counter = 0;
    for(const productp of arr)
    {
        if(productp.inStock===true)
            counter++;
    }
    return counter;
 }
 
 const getProductNameByld = (products, id) =>
 {
    for(const productp2 of products)
    {
        if(id===productp2.id)
            return productp2.name;
    }
    return "Product not found";
 }
 console.log(getProductNameByld(products, 3));
 console.log(getProductNameByld(products,99));

 //ולא לפי id פעולות איתור, מחיקה ועדכון באפליקציה יתבצעו בדרך כלל לפי
 //שמות בגלל שיכולים להיות כמה שמות זהים ואם תבצע פעולה על אחד מהם זה יבצע על כולם
 //ובנוסף שמות יכולים להשתנות כמו למוצרים והאי-די נשאר קבוע
 