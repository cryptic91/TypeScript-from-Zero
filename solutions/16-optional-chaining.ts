// মডিউল 16 — Optional chaining আর ??
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

interface Address {
  city?: string;
}

interface Customer {
  name: string;
  address?: Address;
}

const order: { id: string; customer?: Customer } = {
  id: 'ORD-1',
  customer: { name: 'Rakib' }
};

const city = order.customer?.address?.city ?? 'Unknown';
console.log(city);   // 'Unknown' — এরর হলো না

export {};
