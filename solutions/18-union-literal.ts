// মডিউল 18 — Union type আর literal type
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

type PaymentMethod = 'card' | 'cod' | 'bkash';

interface Order {
  id: string;
  method: PaymentMethod;
}

const o: Order = { id: 'ORD-1', method: 'bkash' };
console.log(o.method);

export {};
