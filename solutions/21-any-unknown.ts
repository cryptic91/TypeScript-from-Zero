// মডিউল 21 — any, unknown আর never
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

const data: unknown = 'rakib';

if (typeof data === 'string') {
  console.log(data.toUpperCase());   // RAKIB
} else {
  console.log('string না');
}

export {};
