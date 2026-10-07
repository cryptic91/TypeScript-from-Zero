// মডিউল 14 — Destructuring — ভিতর থেকে টেনে বের করা
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

const order = { id: 'ORD-1', total: 1500, status: 'paid' };

const { id, total } = order;
console.log(id, total);

export {};
