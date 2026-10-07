// মডিউল 25 — async / await — Promise এর সহজ রূপ
// সমাধান। নিজে চেষ্টা করার পরেই এটা দেখো।
// ------------------------------------------------------------

function delay(ms: number): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve('শেষ'), ms);
  });
}

async function run() {
  const r = await delay(500);
  console.log(r);            // 'শেষ'

  const wrong = delay(500);  // await ছাড়া
  console.log(wrong);        // Promise { <pending> }
}

run();

export {};
