# Chapter 1. Background

React Fiber -- React 16 之后的版本

React 开发环境：

1. 引入.js 文件（古老）
2. 通过脚手架工具编码（Grunt，Gulp，Webpack）
3. 使用官方提供的脚手架工具 --> Create-React-App

工程目录文件：

- 项目依赖，安装包，版本号等信息：package-lock.json, package.json, node-modules folder
- public 文件夹：
  - favicon.ico：title 前显示的图标
  - index.html：首页模版
- src 文件夹:
  - index.js：**所有文件的入口**（all in JS）
  - App.test.js：自动化测试文件
  - registerServiceWorker：PWA

JSX 语法：

- 允许在代码中直接使用 html 标签结构 & 用花括号{}写 JS 表达式（非语句）
  - 在 JSX 中使用 JS 表达式需要用花括号{}包裹起来。
  - 要用到 JSX 语法就必须引入 import React from 'react';
- 在 JSX 中写注释的方法：{//Something } 或 { / \* To write comment in JSX \* /}

App 组件（Components）

- 大写字母开头的元素叫组件，小写字母开头则是普通元素。
- 创建实例/使用组件时，constructor()会自动优先执行。
- 一个组件的 render()返回的内容必须有一个 wrapper 元素包裹，如<div><Fragment>

State

- React 的特性：immutable，即 state 中的数据不允许做修改。
- state 负责存储组件中的数据，若要改变组件中 state 存储的数据，需要调用 setState() 对具体项进行赋值，不能直接修改 this.state.value。
- 若要修改 list 等 state 中的数据时，应当将其拷贝一份，修改备份后将新的 list 通过 setState()函数赋值给原数组，否则在之后的性能优化中可能会有问题。

事件绑定

- function.bind(this)改变函数作用域。
- onClick，onChange，className 驼峰名称

ReactDOM

- 加载一个组件，通过 render 把某个组件渲染到页面的指定 DOM 节点上

Callback

1. callback 是一种特殊的函数，这个函数被作为参数传给另一个函数去调用。这样的函数就是回调函数。

   - callback 拆开，就是 call back，在英语里面就是「回拨电话」的意思。

   - 那我们就用打电话为例子来说明一下 callback：

     - 「我打电话给某某」（I call somebody），那么「打电话」的人就是「我」。
     - 「我」在电话里说：你办完某事后，回拨电话给「我」。
     - 某某做完事后，就会「回拨电话给我」（calls back to me），那么「打电话」的人就是「某某」。

2) 用编程来解释的话，是这样的：

   - 「我调用一个函数 f」(I call a function），那么「调用函数」的人是「我」。代码是 f(c)。
   - 「我」让这个函数 f 在执行完后，调用我传给它的另一个函数 c。
   - 函数 f 执行完的时候，就会「调用 c」，也叫做「回调 c」（call c back），调用 c 的人是 f。

3. 好了，解释完了：callback 就是（传给另一个函数调用的）函数。把括号里面的内容去掉，简化成：callback 就是一种函数。

4. Callback 很常见

   `\$button.on('click', function(){})`

- click 后面的 function 就是一个回调，因为「我」没有调用过这个函数，是 jQuery 在用户点击 button 时调用的。

  `div.addEventListener('click', function(){})`

- click 后面的 function 也是一个回调，因为「我」没有调用过这个函数，是浏览器在用户点击 button 时调用的。

5. 一般来说，只要参数是一个函数，那么这个函数就是回调。

6. Callback 有点反直觉: 很多初学者不明白 callback 的用法，因为 callback 有一点「反直觉」。

- 比如说我们用代码做一件事情，分为两步：step1( ) 和 step2( )。

  - 符合人类直觉的代码是：
    step1();
    step2()
  - callback 的写法却是这样的：step1(step2)

- 为什么要这样写？或者说在什么情况下应该用这个「反直觉」的写法？
  - 一般（注意是一般），在 step1 是一个异步任务的时候，就会使用 callback。

组件 Component

- 树形结构，拆分成父组件和若干子组件。
- 父组件可以通过标签属性 attribute 的形式向子组件传递值/函数，
- 子组件通过 this.props.xxx 来接收传值，调用父组件方法改变父组件的数据时，一定要在父组件传值时 bind(this)绑定 this 指向为父组件。

Proptypes（Typechecking）

- 属性校验：要求父组件传的值必须是某种类型/函数，否则无法通过校验。
- 不会阻止程序运行，只提出 warning，开发时的好朋友。
- array, bool, func, number, object, string, symbol, node, element
- instanceOf(message), objectOf(message)...
- arrayOf(PropTypes.number, PropTypes.string) 是 number 或者 string 都可以
- isRequired
