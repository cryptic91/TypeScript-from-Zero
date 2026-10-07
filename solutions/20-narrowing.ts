// মডিউল 20 — Type narrowing — সংকীর্ণ করা
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

function process(v: string | number): number {
  if (typeof v === 'string') {
    return v.length;
  }
  return v * 2;
}

console.log(process('hello'));   // 5
console.log(process(10));        // 20

export {};
