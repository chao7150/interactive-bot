/*
* APIを叩くなどの動作はここに書く、reducerに渡す処理
*/

const axios = require('axios')

//import AppActions from '../actions/app'で呼び出し
export default {
  fetchAPI: () => {
    sendRequest()
    return { type: 'INCREMENT' }
  }
}

function sendRequest(){
  console.log("here")
  axios.get('http://localhost:9000/sample').then(response=>{console.log(response.data)})
}

//import {increment} from '../actions/app' で呼び出し
export function fetchAPI(){
  console.log("im")
  sendRequest();
    return {
        type: 'INCREMENT'
    }
}