// মডিউল 28 — Class — Page Object এর ভিত্তি
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

class Order {
  readonly id: string;
  private prices: number[] = [];

  constructor(id: string) {
    this.id = id;
  }

  addItem(price: number): void {
    this.prices.push(price);
  }

  total(): number {
    return this.prices.reduce((s, p) => s + p, 0);
  }
}

const o = new Order('ORD-1');
o.addItem(500);
o.addItem(300);
console.log(o.id, o.total());   // ORD-1 800

export {};
