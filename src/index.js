import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: null
      // value: this.props.value
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.onClick();
          // this.setState({ value: 'X' });
        }}
      >
        {/* {this.state.value} */}
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
      // squares: ['O', null, 'X', 'X', 'X', 'O', 'O', null, null]
    };
  }

  handleClick = i => {
    // this.state.squares[i] = 'X';

    // const squares = this.state.squares;

    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  };

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }

// 用法示例: <ShoppingList name="Mark" />
// ReactDOM.render(<ShoppingList name="Mark" />, document.getElementById("root"));

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
