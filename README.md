用[Create React App](https://github.com/facebookincubator/create-react-app)初始化项目.<br>
github 地址：[https://github.com/dream-approaching/react-hoc](https://github.com/dream-approaching/react-hoc).

### 定义

* 高阶函数： 接收函数作为输入，或者输出另一个函数的一类函数。<br>
* 高阶组件： 接收 react 组件作为输入，输出一个新的 react 组件的组件<br>
  * 最大的特点是重用组件逻辑
  * 不是由 react 定义出来的功能
  * 而是 react 组合特性衍生出来的一种设计模式
  * 其返回的组件里有自己的生命周期，可以做很多操作，即返回一个相对增强的组件

### 装饰器模式

es7 添加了一个 decorator 属性，使用@符号表示，可以更精简的书写<br>
不过存在兼容性问题，通常是用 babel 编译的，详见[create-react-app + mobx 其中@observer 装饰器报错](https://segmentfault.com/q/1010000010491983)

## 参考

* [https://segmentfault.com/a/1190000010371752](https://segmentfault.com/a/1190000010371752)
* [https://github.com/sunyongjian/blog/issues/25](https://github.com/sunyongjian/blog/issues/25)
* [create-react-app + mobx 其中@observer 装饰器报错](https://segmentfault.com/q/1010000010491983)
