// মডিউল 30 — সব একসাথে — একটা ছোট প্রজেক্ট
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

interface Order {
  readonly id: string;
  total: number;
  status: 'paid' | 'pending' | 'failed';
}

class OrderStore {
  private orders: Order[] = [];

  add(order: Order): void {
    this.orders.push(order);
  }

  paidTotal(): number {
    return this.orders
      .filter(o => o.status === 'paid')
      .reduce((sum, o) => sum + o.total, 0);
  }

  find(id: string): Order | undefined {
    return this.orders.find(o => o.id === id);
  }
}

const store = new OrderStore();

store.add({ id: 'A', total: 500, status: 'paid' });
store.add({ id: 'B', total: 300, status: 'pending' });
store.add({ id: 'C', total: 700, status: 'paid' });

console.log(store.paidTotal());        // 1200
console.log(store.find('B')?.total);   // 300
console.log(store.find('Z'));          // undefined

export {};
