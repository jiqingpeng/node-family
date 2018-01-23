import React, {
  Component
} from 'react';
import Register from './Register.js';
import axios from 'axios';
import {
  Link
} from 'react-router-dom';
class My extends Component {
  render() {
    return (
      <div className="Login">
        <div>
          <input ref="user"/>
        </div>
        <div>
          <input ref="password" />
        </div>
        <div>
           <button onClick={()=>{this.login()}}>登陆</button>
        </div>
        <div>
           <Link to="/Register"><span>注册</span></Link>
        </div>
      </div>
    );
  }
  login() {
    var params = {
      "username": this.refs.user.value,
      "password": this.refs.password.value
    };
    let that = this
    axios.post('/users/login', params)
      .then(function(res) {
        console.log(res)
        if (res.data.code == 1) {
          alert(res.data.message)
          return
        }
        that.props.history.push('/My')
      })
      .catch(function(res) {
        console.log(res);
      });
  }

}
export default My;