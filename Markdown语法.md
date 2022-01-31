<!-- [TOC] -->
### 为什么要用Markdown
markdown是一种纯文本标记语言，通过简单的语法规则，可以使普通的文本内容具有一定的格式。它易读易写，10分钟就能入门，应用场景广泛。如GitHub的Readme就是md文档。  
而且md文档可以很方便的转为html、pdf、doc等常见文档格式。

### 怎么书写md？
Markdown文档都以.md扩展名结尾，你可以使用支持md语法的文本编辑器。如typora、vscode等。typora最新版已收费，停留在旧版不升级即可。  
大部分博客网站也都支持md语法，如CSDN、简书、博客园等。  
我个人在使用typora时，当字数过万，则文档的滚动和输入非常卡顿。目前我采用的是vscode + 安装Markdown Preview Enhanced插件。

### 怎么学好md？
如何学好markdown？模仿别人的教程也写一个教程就行了👻~  
其实，本文用md编辑器打开就是一个语法参考手册。
### 换行
Markdown语法直接打一个回车是不会显示换行的。如果你直接回车的话，显示出来的效果只是换行处前后空一格。不仅如此，在Markdown中一段文字无论空多少空格都会被忽略，只渲染出一个空格。  
有四种换行方法：  
1.行尾打两个或两个以上的空格之后回车  
2.使用`\`，然后接着按下`Enter`  
3.使用`<br />`，注意br后面有一个空格。  
4.打两个回车，也就是空出一行  
他们的区别是前三种打出来的效果行间距近，而最后一种是要起一个新段落，行间距大。  
注意看下面这句话和上面的行间距。 

如果你想实现多个空格你只能手动添加空格符号。注意分号不要丢。
```markdown
&emsp;或&#8195; //全角的空格
&ensp;或&#8194; //半角的空格
&nbsp;或&#160; //半角之半角
```
我空了&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很多格子。
### 加注释
支持html注释方式，快捷键 comment + /。语法如下。实际上md文档中极少用到注释。
```markdown
<!--哈哈我是注释，不会在浏览器中显示。--->
```
### 标题
注意`#`后面要空格
```markdown
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
```
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
### 字体样式
1.加粗  
加粗的字体用左右两个*包裹起来
```markdown
**我被加粗了**
```
**我被加粗了**

2.斜体  
斜体的字体用左右一个*包裹起来
```markdown
*我是斜体*
```
*我是斜体*

3.斜体加粗  
斜体加粗的字体用左右三个*包裹起来 
```markdown
***我被斜体加粗***
```
***我被斜体加粗***

4.删除线  
删除的字体用左右两个~~包裹起来
```markdown
~~删除线~~
```
~~删除线~~

### 引用
`>`后空格加上引用的内容，可以多级引用。Markdown允许你偷懒只在整个段落的第一行最前面加上`>`来引用整段。
```markdown
> 一级引用
>> 二级引用
>>> 三级引用
```
> 一级引用
>> 二级引用
>>> 三级引用
### 高亮内容  
用`==`包裹内容即可。
```markdown
这句话中，==我这部分被高亮了==
```
这句话中，==我这部分被高亮了==

### 上标、下标  
输入上标，如x^2^,Markdown代码为`x^2^`  
输入下标，如y~0~,Markdown代码为`y~0~`
### 分割线  
你可以在一行中用三个以上的星号(*)、减号(-)、底线(_)来建立一个分隔线，行内不能有其他东西。注意至少要3个，且不需要连续，有空格也可以
```
***
```
***
### 插入图片
图片的alt，它用来描述图片的关键词，可以不写。最初是当图片因为某种原因不能被显示时而出现的替代文字，后又被用于SEO，可以方便搜索引擎根据alt里面的关键词搜索到。部分md编辑器解析时会将alt当做图片标题显示在图片下方，如[简书网站](https://www.jianshu.com)。  
图片title是鼠标放上去显示的文字。可省略。  
插入本地图片，只需要在基础语法的括号中填入图片的位置路径即可，支持绝对路径和相对路径。强烈建议使用图床上传网络图片。
```markdown
![图片的alt](图片的链接 "图片的title")) 
```

![百度Logo](https://www.baidu.com/img/flexible/logo/pc/result.png "百度一下")

注意，默认图片格式是原始尺寸，如果想自定义图像大小，要用img标签。  
```markdown
<img src="https://www.linux.org/images/logo.png" title="Linux.org" width="50%">
```
<img src="https://www.linux.org/images/logo.png" title="Linux.org" width="50%">  

### 文字超链接
直接输入url就会被处理为链接。也可手动用`<>` 包裹住链接。

```markdown
<https://www.baidu.com/>
````

<https://www.baidu.com/>

1.行内式超链接  
title是鼠标放上去显示的文字，可省略。
```markdown   
[百度一下](https://www.baidu.com/ "点击我进入百度")  
```
[百度一下](https://www.baidu.com/ "点击我进入百度")  

注意，Markdown本身语法不支持链接在新页面中打开（部分平台可实现链接在新页面打开），如果想要在新页面中打开的话可以用html语言的a标签代替。
```markdown
<a href="超链接地址" target="_blank">超链接名</a>
```
其中`target="_blank"`参数决定新标签页打开。  
2.参数式链接  
注意：内容跟链接标注要空一行。
```markdown
我经常去的几个网站[GitHub][1]、[知乎][2]等等。[百度]当然也是

[1]:https://github.com "点我进入GitHub"
[2]:https://www.zhihu.com "点我进入知乎"
[3]:http://www.jianshu.com "简书"
[百度]:http://www.baidu.com "我是百度"
```
我经常去的几个网站[GitHub][1]、[知乎][2]等等。[百度]当然也是

[1]:https://github.com "点我进入GitHub"
[2]:https://www.zhihu.com "点我进入知乎"
[3]:http://www.jianshu.com "简书"
[百度]:http://www.baidu.com "我是百度"
### 图片式超链接
语法很简单，套娃即可。
```Markdown
[![百度Logo](https://www.baidu.com/img/flexible/logo/pc/result.png  "点击图片进百度")](https://www.baidu.com)
```
点击下方图片即可进入百度  
[![百度Logo](https://www.baidu.com/img/flexible/logo/pc/result.png  "点击图片进百度")](https://www.baidu.com)
### 代码块
单行代码  
代码之间分别用一个反引号`(位于1左边的那个按键)包起来即可
```markdown
`printf()` 函数
```
`printf()` 函数  
代码区块  
代码区块使用4个空格或者一个制表符（Tab 键）。但是好像在vscode不是很好用？我一般采用另一种：用 ``` 包裹一段代码，并指定一种语言（也可不指定），支持语法高亮。
```html
如果你在Mardown Preview Enhanced的预览框中出现
<p data-line="xxx" class="sync-line" style="margin:0;"></p>的代码块
解决方法：开头出现，则在代码上面的```前面加空格
若在末尾出现，则在代码末尾的```前面加空格
```

    ```JavaScript
    $(document).ready(function () {
        alert('RUNOOB');
    });
    ```
比较打脸的是为了显示上面这个含有` ``` `的源码，我选中了这一区域使用了tab键来缩进。。
```JavaScript
$(document).ready(function () {
    alert('RUNOOB');
});
```
### 表格  
表格格式很自由，关键字符就是`|`和`-`。制作表格使用`|`来分隔不同的单元格，使用 `-`来分隔表头和其他行。
```markdown
|表头|表头|
|----|----|
|单元格|单元格|
|单元格|单元格|
```
|表头|表头|
|----|----|
|单元格|单元格|
|单元格|单元格|

我们可以设置表格的对齐方式：  
```markdown
-:   设置内容和标题栏居右对齐。  
:-   设置内容和标题栏居左对齐。  
:-:  设置内容和标题栏居中对齐。  
```
实际上这个对齐方式在不同编辑器中可能不生效。很多编辑器统统按照单元居中样式来展示。
```markdown
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

### 列表  
无序列表  
`-` `*` `+` 三个符号在无序列表中地位平等
```markdown
- 第一项
* 第二项
	* 第二项//前面加tab缩进就表示下一级
		* 这又是一级
+ 第三项
```
- 第一项
* 第二项
    * 第二项
		* 这又是一级
+ 第三项

有序列表  
有序列表使用数字并加上`.`号来表示，注意，序号跟内容之间要有空格。很重要的一点是，你在列表标记上使用的数字并不会影响输出的 HTML 结果。
```markdown
你的标记写成：
1.  Bird
1.  McHale
1.  Parish
甚至：
8. Linux
1. JavaScript
4. Vue
```
都是**只按第一个数字**来排序，因此第一个最好是1。
1.  Bird
1.  McHale
1.  Parish

如果你想使用markdown制作字母清单，标准Markdown似乎没有这种能力。你可以采用html实现。
```html
<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
<ol type="a">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

### 复选框  
在无序列表符号`-`或者`+`或者`*`后面，加上`[]`或者`[x]`代表选中或者未选中情况
```markdown
- [ ] 没选中的复选框
- [x] 选中复选框
```
- [ ] 没选中的复选框
- [x] 选中复选框
### 注脚
在需要添加注脚的文字后加上脚注名： `[^注脚名]` 。 然后在文本的任意位置(一般在最后)添加脚注，格式为`注脚名:注脚内容`。
```md
使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2], 你可以使用 Typora[^3] 编辑器进行书写。
[^1]:Markdown是一种纯文本标记语言
[^2]:HyperText Markup Language 超文本标记语言
[^3]:NEW WAY TO READ & WRITE MARKDOWN.
```
点击注脚即可跳转，注脚内容会被追加到文章末尾。  
使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2], 你可以使用 Typora[^3] 编辑器进行书写。
[^1]:Markdown是一种纯文本标记语言
[^2]:HyperText Markup Language 超文本标记语言
[^3]:NEW WAY TO READ & WRITE MARKDOWN.
### 一键生成目录
使用`[TOC]`命令放在文章最开头即可。

生成的链接点一下即可跳转对应位置，类似下图这种。但是部分编辑器不支持，具体可参考[这篇文章](https://www.jianshu.com/p/b0a18eb32d09)。 

另外，很多编辑器都自带一个大纲功能，可以很清晰的看到标题分级。

<img src="https://s4.ax1x.com/2022/01/31/HiYyVA.png" title="Linux.org" width="40%">  

### Markdown进阶学习
#### 支持的 HTML 元素  
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
目前支持的 HTML 元素有：`<kbd> <b> <i> <em> <sup> <sub> <br>`等 ，如

```markdown
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 进入任务管理器
```
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 进入任务管理器  
#### 转义  
Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠`\`转义特殊字符：
```markdown
**文本加粗** 
\*\* 正常显示星号 \*\*
```
\*\* 正常显示星号 \*\*  
Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：
```markdown
\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
```
#### LateX公式    
这个如果展开说篇幅可能和Markdown语法一样长。。  
LaTeX，主要就是用于数学公式的展示，分为行内公式和行间公式。通过一些简单的代码表达出精确的公式表达。读者如感兴趣可自行搜索学习，本文不作展开。
在GitHub上，目前还无法渲染latex公式。（2022.1.31)  
#### 特殊符号

| 特殊字符 |     描述      | 字符的代码 |
| :------: | :-----------: | :--------: |
|          |    空格符     |    `&nbsp;`     |
|    <     |    小于号     |    `&lt;`     |
|    >     |    大于号     |    `&gt;`     |
|    &     |     和号      |    `&amp;`     |
|    ￥    |    人民币     |    `&yen;`     |
|    ©     |     版权      |    `&copy;`     |
|    ®     |   注册商标    |    `&reg;`     |
|    °C    |    摄氏度     |    `&deg;C`    |
|    ±     |    正负号     |    `&plusmn;`     |
|    ×     |     乘号      |    `&times;`     |
|    ÷     |     除号      |    `&divide;`     |

注意，以下内容很多编辑器可能不支持展示。Markdown 规范从来没有支持过直接显示流程图，这只是某些编辑器的扩展功能，调用 graphviz 显示流程图。故只放出源md代码。

#### 高效绘制[流程图]

    ```flow
    st=>start: Start
    op=>operation: Your Operation
    cond=>condition: Yes or No?
    e=>end

    st->op->cond
    cond(yes)->e
    cond(no)->op
    ```

#### 高效绘制[序列图]

    ```seq
    Alice->Bob: Hello Bob, how are you?
    Note right of Bob: Bob thinks
    Bob-->Alice: I am good thanks!
    ```

#### 高效绘制 [甘特图]

    ```gantt
        title 项目开发流程
        section 项目确定
            需求分析       :a1, 2016-06-22, 3d
            可行性报告     :after a1, 5d
            概念验证       : 5d
        section 项目实施
            概要设计      :2016-07-05  , 5d
            详细设计      :2016-07-08, 10d
            编码          :2016-07-15, 10d
            测试          :2016-07-22, 5d
        section 发布验收
            发布: 2d
            验收: 3d
    ```
