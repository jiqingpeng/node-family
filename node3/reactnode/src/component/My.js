import React, {
  Component
} from 'react'
import {
  Link
} from 'react-router-dom';
import Rhead from './rhead.js';
import Rfood from './rfood.js';
import Login from './Login.js';
import axios from 'axios';
import './my.stylus';
class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      msg: ""
    };
    this.checkLogin()

  }
  render() {

    return (
      <div className="My">
        <Rhead headInfo="我"></Rhead>
        <Greeting isLoggedIn={this.state.isLoggedIn} user={this.state.msg}></Greeting>
        <button className="logout" onClick={()=>{this.logout()}}>退出</button>
        <Rfood></Rfood>
      </div>
    );
  }
  componentWillMount() {
    this.setState({
      headInfo: "我"
    })
  }
  checkLogin() {
    let that = this
    axios.get('/users/checkLogin')
      .then(function(res) {
        console.log(res)
        if (res.data.code == 200) {
          console.log(that)
          that.setState({
            isLoggedIn: true,
            msg: res.data.message.username
          });
        }
      })
      .catch(function(res) {
        console.log(res);
      });
  }
  logout() {
    let that = this
    axios.get('/users/logout')
      .then(function(res) {
        console.log(res)
        if (res.data.code == 200) {
          that.setState({
            isLoggedIn: false,
            msg: ''
          });
        }
      })
      .catch(function(res) {
        console.log(res);
      });
  }
}

function Greeting(props) {
  console.log(props)
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div className="my-cont">{props.user}</div>;
  }
  return <div className="my-cont"><Link to="/Login"><span>登陆</span></Link></div>;
}
export default My;