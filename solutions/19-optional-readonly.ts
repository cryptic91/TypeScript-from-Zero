// মডিউল 19 — Optional আর readonly property
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

interface Product {
  readonly id: string;
  name: string;
  discount?: number;
}

const p: Product = { id: 'P-1', name: 'Shirt' };
console.log(p.discount ?? 0);   // 0

export {};
