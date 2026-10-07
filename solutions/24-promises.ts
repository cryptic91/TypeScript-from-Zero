// মডিউল 24 — Promise — এখনো শেষ হয়নি এমন কাজ
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

function delay(ms: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve('শেষ'), ms);
  });
}

delay(1000).then(r => console.log(r));
console.log('আমি আগে');

// আউটপুট: 'আমি আগে' তারপর 'শেষ'

export {};
