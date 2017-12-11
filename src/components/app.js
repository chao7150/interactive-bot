/* メインコンポーネント　*/
import React from 'react';

// 注：JSX構文内のvalueは{}で囲う
// 注：返せるのは一つの要素のみなのでdivで全体を囲う事
export default class App extends React.Component {
  render() {
    return (
        <div>
          <span>{this.props.fuga}</span><br/>
          <button onClick={ () => this.props.handleClick() }>＊増加＊</button>
        </div>
    );
  }
}