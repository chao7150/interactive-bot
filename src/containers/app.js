import React from 'react'
import { connect } from 'react-redux'
import App from '../components/app'
import AppActions from '../actions/app'

// stateから必要なプロパティ変換？
function mapStateToProps(state) {
  return state
}

/*
* dispatch関数(ユーザーアクション)を受けてプロパティ変換
* 要するにthis.props.handleClickでアクセス可能になる
* actionファイルに書かれた処理をまとめてbindActionCreators()で変換すると楽できる
*/
function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch(AppActions.fetchAPI()) }
    // handleClick: () => { dispatch({ type: 'INCREMENT' }) }
  }
}

//connectでReduxとReactのコンポーネントを繋ぐ
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)