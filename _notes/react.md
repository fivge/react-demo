## react

### basic

#### JSX

在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它当保存在变量中或者作为参数传递。

```js
<h1>Shopping List for {this.props.name}</h1>
```

#### 事件绑定

```js
onClick={() => {
          alert("clicked!" + this.props.value);
        }}
```

因为 DOM 元素 `<button>` 是一个内置组件，因此其 onClick 属性在 React 中有特殊的含义。

而对于用户自定义的组件来说，命名就可以由用户自己来定义了。我们给 Square 的 onClick 和 Board 的 handleClick 赋予任意的名称，代码依旧有效。在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。

#### 参数传递

```js
  render() {
    return <button className="square" >{this.props.value}</button>;
  }

<Square value={i} />
```

当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，需要把子组件的 state 数据提升至其共同的父组件当中保存。之后父组件可以通过 props 将状态数据传递到子组件当中。这样应用当中所有组件的状态数据就能够更方便地同步共享了。

> 组件内部

```js
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

   this.setState({ value: 'X' });

{this.state.value}
```

可以通过在 React 组件的构造函数中设置 this.state 来初始化 state。this.state 应该被视为一个组件的私有属性。

> 不可变性

调用 .slice() 方法创建 squares 数组的一个副本，而不是直接在现有的数组上进行修改

###### 简化复杂的功能

不可变性使得复杂的特性更容易实现。

###### 跟踪数据的改变

如果直接修改数据，那么就很难跟踪到数据的改变。跟踪数据的改变需要可变对象可以与改变之前的版本进行对比，这样整个对象树都需要被遍历一次。

跟踪不可变数据的变化相对来说就容易多了。如果发现对象变成了一个新对象，那么我们就可以说对象发生改变了。

###### 确定在 React 中何时重新渲染

不可变性最主要的优势在于它可以帮助我们在 React 中创建 _pure components_。我们可以很轻松的确定不可变数据是否发生了改变，从而确定何时对组件进行重新渲染。

#### 函数组件

如果你想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单

```js
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

- this 指向

- onClick 缩写

#### 保存状态

每当一个列表重新渲染时，React 会根据每一项列表元素的 key 来检索上一次渲染时与每个 key 所匹配的列表项。如果 React 发现当前的列表有一个之前不存在的 key，那么就会创建出一个新的组件。如果 React 发现和之前对比少了一个 key，那么就会销毁之前对应的组件。如果一个组件的 key 发生了变化，这个组件会被销毁，然后使用新的 state 重新创建一份。

key 是 React 中一个特殊的保留属性（还有一个是 ref，拥有更高级的特性）。当 React 元素被创建出来的时候，React 会提取出 key 属性，然后把 key 直接存储在返回的元素上。虽然 key 看起来好像是 props 中的一个，但是你不能通过 this.props.key 来获取 key。React 会通过 key 来自动判断哪些组件需要更新。组件是不能访问到它的 key 的。

我们强烈推荐，每次只要你构建动态列表的时候，都要指定一个合适的 key

> 如果你没有指定任何 key，React 会发出警告，并且会把数组的索引当作默认的 key。但是如果想要对列表进行重新排序、新增、删除操作时，把数组索引作为 key 是有问题的。显式地使用 key={i} 来指定 key 确实会消除警告，但是仍然和数组索引存在同样的问题，所以大多数情况下最好不要这么做。

### Q

#### this.state 和 render 关系

`this.state`、`this.setState`、`render()`

#### vue 中对应的 key 的选择

#### setState

setState({}) {}中的变量才发生变化

---

## JavaScript

### 箭头函数

箭头函数无 this 执行，this 向上查找

### class

在 JavaScript class 中，每次你定义其子类的构造函数时，都需要调用 super 方法。因此，在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。

### array

调用 .slice() 方法创建 squares 数组的一个副本，而不是直接在现有的数组上进行修改
