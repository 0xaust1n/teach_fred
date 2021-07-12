 // let abc=> is undefined 未定義
// 如果直接呼叫 a => is not define 未曾被定義  

let foo = 100;
const bar = 3.14;
// const 的值是固定
// 從你聲明的那一刻起 他賦予值之後就無法再改變


abc();

function abc() {
  console.log(a);
  var a = 0;
}


//hoisting 變量提升 => 聲明變量會在程式開始之前 先跑完
//視覺化
var a = 1000;
// 變成 ↓
// 程式開始之前
var a;
//程式開始之後
a = 100

