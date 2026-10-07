// মডিউল 22 — Generic — পুনর্ব্যবহারযোগ্য টাইপ
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

function last<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

console.log(last(['a', 'b', 'c']));   // 'c'
console.log(last([1, 2, 3]));         // 3

export {};
