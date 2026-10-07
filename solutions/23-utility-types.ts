// মডিউল 23 — Utility type — তৈরি করা টাইপ
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

interface Order {
  id: string;
  total: number;
  status: string;
}

type NewOrder = Omit<Order, 'id'>;

const draft: NewOrder = { total: 1500, status: 'pending' };
console.log(draft);

export {};
