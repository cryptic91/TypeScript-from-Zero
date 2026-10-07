// মডিউল 12 — Array method — map, filter, find
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

const prices = [100, 250, 500, 80, 300];

const expensive = prices.filter(p => p > 200);
const discounted = expensive.map(p => p * 0.9);

console.log(discounted);   // [225, 450, 270]

export {};
