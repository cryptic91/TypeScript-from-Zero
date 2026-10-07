// মডিউল 17 — interface আর type
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

interface Customer {
  name: string;
  email: string;
  orderCount: number;
}

const c: Customer = {
  name: 'Rakib',
  email: 'rakib@example.com',
  orderCount: 5
};

console.log(c.name, c.orderCount);

export {};
