import React, {
  Component
} from 'react';
import axios from "axios"
class Register extends Component {
  render() {
    console.log(this)
    return (
      <div className="Login">
        <div>
          <input ref="user"/>
        </div>
        <div>
          <input ref="password" />
        </div>
        <div>
           <button onClick={()=>{this.register()}}>注册</button>
        </div>
      </div>
    );
  }
  register() {
    var params = {
      "username": this.refs.user.value,
      "password": this.refs.password.value
    };
    let that = this
    axios.post('/users/register', params)
      .then(function(res) {
        console.log(res)
        if (res.data.code == 1) {
          alert(res.data.message)
          return
        }
        that.props.history.push('/Login')
      })
      .catch(function(res) {
        console.log(res);
      });
  }
}
export default Register;