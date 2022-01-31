请注意，JavaScript严格区分大小写，如果弄错了大小写，程序将报错或者运行不正常。
### 数据类型和变量
要特别注意相等运算符`==`。JavaScript在设计时，有两种比较运算符：
第一种是`==`比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
第二种是`===`比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
由于JavaScript这个设计缺陷，不要使用`==`比较，始终坚持使用`===`比较。

另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：
唯一能判断NaN的方法是通过isNaN()函数：
```js
isNaN(NaN); // true
```
**null和undefined**
JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，我们都应该用null。undefined仅仅在判断函数参数是否传递的情况下有用。
**数组**
然而，出于代码的可读性考虑，强烈建议直接使用[]。数组的元素可以通过索引来访问。请注意，索引的起始值为0：
**对象**
JavaScript对象的键都是字符串类型，值可以是任意数据类型。上述person对象一共定义了6个键值对，其中每个键又称为对象的属性
**变量**
变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用数字开头。变量名也不能是JavaScript的关键字，如if、while等。
可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用var申明一次
这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。
静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言
**strict模式**
JavaScript在设计之初，为了方便初学者学习，并不强制要求用var申明变量。这个设计错误带来了严重的后果：如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量：

```js
i = 10; // i现在是全局变量
```
在同一个页面的不同的JavaScript文件中，如果都不用var申明，恰好都使用了变量i，将造成变量i互相影响，产生难以调试的错误结果。
使用var申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内（函数的概念将稍后讲解），同名变量在不同的函数体内互不冲突。
为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。
启用strict模式的方法是在JavaScript代码的**第一行**写上：
```js
'use strict';
```
这是一个字符串，不支持strict模式的浏览器会把它当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JavaScript。

**字符串**
转义字符`\`可以转义很多字符，比如`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\`。
ASCII字符可以以`\x##`形式的`十六进制`表示，例如：
```js
'\x41'; // 完全等同于 'A'
```
还可以用`\u####`表示一个Unicode字符：
```js
'\u4e2d\u6587'; // 完全等同于 '中文'
```
多行字符串
由于多行字符串用`\n`写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用反引号\`...\`表示：
```js
`这是一个
多行
字符串`;
```
注意：反引号在键盘的ESC下方，数字键1的左边：

要把多个字符串连接起来，可以用+号连接：
如果有很多变量需要连接，用+号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量
```js
var name = '小明';
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`;
alert(message);
```
**操作字符串**
```js
var s = 'Hello, world!';//空了一格
s.length; // 13
s[0]; // 'H'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined
```
需要特别注意的是，字符串是**不可变**的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果
JavaScript为字符串提供了一些常用方法，注意，调用这些方法本身不会改变原有字符串的内容，而是返回一个新字符串：
```js
// toUpperCase()把一个字符串全部变为大写：
// toLowerCase()把一个字符串全部变为小写：
// indexOf()会搜索指定字符串出现的下标：
var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1
// substring()返回指定索引区间的子串：
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'
```
**数组**
JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。要取得Array的长度，直接访问`length`属性：
请注意，直接给Array的`length`赋一个新的值会导致Array大小的变化：
```js
var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]
```
Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array
**请注意**，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
```js
var arr = [1, 2, 3];
arr[5] = 'x';
arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
```
大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。
**数组的方法**
`indexOf`
与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置：
```js
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 元素10的索引为0
arr.indexOf(20); // 元素20的索引为1
arr.indexOf(30); // 元素30没有找到，返回-1
arr.indexOf('30'); // 元素'30'的索引为2
// 注意了，数字30和字符串'30'是不同的元素。
```
`slice`
对应String的`substring()`版本，它截取Array的部分元素，然后返回一个新的Array：
```js
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3
arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
```
如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：
`push`和`pop`
push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉。会修改原数组。
空数组继续pop不会报错，而是返回undefined
`unshift和shift`
`unshift()`方法往Array的头部添加若干元素，`shift()`方法则把Array的第一个元素删掉。会修改原数组。
```js
var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]
arr.shift(); 
arr.shift(); 
arr.shift(); // 连续shift 3次
arr; // []
arr.shift(); // 空数组继续shift不会报错，而是返回undefined
arr; // []
```
`sort`
可以对当前Array进行排序，会修改原数组。直接调用时，默认排序顺序是根据字符串UniCode码
```js
var arr = ['B', 'C', 'A'];
arr.sort();
arr; // ['A', 'B', 'C']
```
能否按照我们自己指定的顺序排序呢？完全可以，我们将在后面的函数中讲到。
`reverse`
反转原数组
`splice`
修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素，返回值是被删除的若干元素
splice(index,count,add_items)
```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```
`concat`
把当前的Array和另一个Array连接起来，并返回一个新的Array：
```js
var arr = ['A', 'B', 'C'];
var added = arr.concat([1, 2, 3]);
added; // ['A', 'B', 'C', 1, 2, 3]
arr; // ['A', 'B', 'C']
```
请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
实际上，concat()方法可以接收任意个元素和Array，**并且自动把Array拆开**，然后全部添加到新的Array里：
```js
var arr = ['A', 'B', 'C'];
arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
```
`join`
join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串。
如果Array的元素不是字符串，将自动转换为字符串后再连接。
```js
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'
```
多维数组
如果数组的某个元素又是一个Array，则可以形成多维数组，例如：
`var arr = [[1, 2, 3], [400, 500, 600], '-'];`
上述Array包含3个元素，其中头两个元素本身也是Array。
**对象**
JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。JavaScript对象的键都是字符串类型，值可以是任意数据类型。其中每个键又称为对象的属性
```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
```
JavaScript用一个`{...}`表示一个对象，键值对以`xxx: xxx`形式申明，用`,`隔开。
注意，最后一个键值对不需要在末尾加,，如果加了，有的浏览器（如低版本的IE）将报错。
访问属性是通过`.`操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用`''`括起来。不建议这么书写属性。
```js
var xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
```
xiaohong的属性名`middle-school`不是一个有效的变量，就需要用`''`括起来。访问这个属性也无法使用`.`操作符，必须用`['xxx']`来访问：

也可以用`xiaohong['name']`来访问xiaohong的name属性，不过`xiaohong.name`的写法更简洁。
我们在编写JavaScript代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过`object.prop`的形式访问一个属性了。
如果访问一个不存在的属性会返回什么呢？JavaScript规定，访问不存在的属性不报错，而是返回undefined：
由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或使用`delete`删除属性
```js
var xiaoming = {
    name: '小明'
};
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.school; // 删除一个不存在的school属性也不会报错
```
如果我们要检测xiaoming是否拥有某一属性，可以用`in`操作符
```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    height: 1.70,
    score: null
};
'name' in xiaoming; // true
'grade' in xiaoming; // false
```
不过要小心，如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的：
```js
'toString' in xiaoming; // true
```
因为`toString`定义在`object`对象中，而所有对象最终都会在`原型链`上指向`object`，所以xiaoming也拥有`toString`属性。
要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法：
```js
var xiaoming = {
    name: '小明'
};
xiaoming.hasOwnProperty('name'); // true
xiaoming.hasOwnProperty('toString'); // false
```
**条件判断**
JavaScript使用`if () { ... } else { ... }`来进行条件判断。其中else语句是可选的。
如果语句块只包含一条语句，那么可以省略{}，但是强烈不建议这么做。
```js
var age = 20;
if (age >= 18)
    alert('adult');
else
    console.log('age < 18'); // 添加一行日志
    alert('teenager'); // <- 这行语句已经不在else的控制范围了
```
**多行条件判断**
如果还要更细致地判断条件，可以使用多个if...else...的组合：
```js
var age = 3;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}
```
上述多个`if...else...`的组合实际上相当于两层`if...else...`：
```js
var age = 3;
if (age >= 18) {
    alert('adult');
} else {
    if (age >= 6) {
        alert('teenager');
    } else {
        alert('kid');
    }
}
```
但是我们通常把else if连写在一起，来增加可读性。这里的else略掉了{}是没有问题的，**因为它只包含一个if语句**。注意最后一个单独的else不要略掉{}。
请注意，if...else...语句的执行特点是二选一，在多个if...else...语句中，如果某个条件成立，则后续就不再继续判断了。
```js
// 代码显示的是teenager：
var age = 20;
if (age >= 6) {
    console.log('teenager');
} else if (age >= 18) {
    console.log('adult');
} else {
    console.log('kid');
}
```
如果if的条件判断语句结果不是true或false怎么办？
JavaScript把`null`、`undefined`、`0`、`NaN`和空字符串`''`视为`false`，其他值一概视为`true`













