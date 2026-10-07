// মডিউল 26 — Error handling — try / catch
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

function divide(a: number, b: number): number {
  if (b === 0) throw new Error('শূন্য দিয়ে ভাগ নয়');
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  if (e instanceof Error) console.log('ধরা পড়ল:', e.message);
}

export {};
