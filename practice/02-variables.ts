// মডিউল 2 — Variable — let আর const
// পর্ব: ভিত্তি
//
// কাজ:
// একটা const দিয়ে product এর নাম রাখো, আর একটা let দিয়ে দাম।
// তারপর দামটা বদলাও আর দুইটাই প্রিন্ট করো।
//
// চালাও:  npx tsx practice/02-variables.ts
// ------------------------------------------------------------

const productName = 'Cotton Shirt';
let price = 1200;

console.log('আগের দাম:', price);

price = 950;
console.log(productName, '— নতুন দাম:', price);

// পরীক্ষা করে দেখলাম const বদলাতে গেলে কী হয়:
// productName = 'Mug';
// → Cannot assign to 'productName' because it is a constant.
// এররটা চালানোর আগেই VS Code-এ লাল দাগ হয়ে দেখায়।

export {};
