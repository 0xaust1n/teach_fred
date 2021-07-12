# Javascript

- runtime  => 運行環境  (Node.js / V8 Engine )
- V8 Engine => 再瀏覽器裡面的一個JS的runtime
> e.g  英文是程式 你是電腦 google翻譯是編譯器  
> google翻譯把英文翻譯成你認得的語言  
> 依照文字的順序讀取

- DOM : Document Object Model (也就是Element)


## Var &　Let & Const
- Var為ES6之前的語法 已經過時所以不再使用
- let為一般命令宣告變量
- const為一般命令宣告變量 賦值後便不能再度賦予新的變量

## 變量提升

JavaScript引擎工作的方式是，先解析程式，獲取所有被宣告的變量，然後再一行一行的執行

這樣造成所有變量宣告的語句都會被提到程式的最上方，這叫做  `Hoisting`

**注意只有宣告變量的語句會提升，表達式則不會**
**注意const & let會防止在聲明之前讀取變量**

```
console.log(a); 
var a = 1;   
//--turn into ↓ --
var a;
console.log(a); // Undefined
a = 1;  //表達式
```