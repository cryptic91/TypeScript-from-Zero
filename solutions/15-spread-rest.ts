// মডিউল 15 — Spread আর rest — তিনটা বিন্দু
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

const product = { name: 'Shirt', price: 500, stock: 3 };

const onSale = { ...product, price: 400 };

console.log(product.price);   // 500 — অক্ষত
console.log(onSale.price);    // 400

export {};
