// মডিউল 9 — Arrow function
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

const applyDiscount = (price: number, percent: number): number =>
  price - (price * percent / 100);

console.log(applyDiscount(1000, 20));

export {};
