// মডিউল 8 — Function — ফাংশন
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

function applyDiscount(price: number, percent: number): number {
  return price - (price * percent / 100);
}

console.log(applyDiscount(1000, 20));   // 800

export {};
