import React, {
  Component
} from 'react';
import axios from 'axios';
import Rhead from './rhead.js';
import Rfood from './rfood.js';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      msg: "11111"
    };
    this.checkLogin();
  }
  render() {

    if (this.state.isLoggedIn) {
      return (
        <div className="Home">
          <Rhead headInfo="主页"></Rhead>
          <NumberList></NumberList>
          <Rfood></Rfood>
        </div>
      );
    } else {
      return (
        <div className="Home">
          <Rhead></Rhead>
          <div>还没有登录，请去我登录</div>
          <Rfood></Rfood>
        </div>
      );
    }
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
}
class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };
  }
  render() {
    console.log(this.state.numbers)
    var numbers = this.state.numbers
    var listItems = numbers.map((number, index) =>
      <li className="list-item" key={index}>
          <p className="spabet">
            <span>{number.user}</span>
            <span>{number.type}</span>
          </p>
          <a href={number.url}>
            <p>{number.tit}</p>
            <p>{number.cont}</p>
          </a>
      </li>
    );
    return (
      <ul className="list">{listItems}</ul>
    );
  }
  // componentDidMount() {
  //   this.getList();
  // }
  componentWillMount() {
    this.getList();
  }
  getList() {
    let that = this
    axios.get('/mess/msg')
      .then(function(res) {
        console.log(res)
        that.setState({
          numbers: res.data
        })
        console.log(that.state.numbers)
      })
      .catch(function(res) {
        console.log(res);
      });
  }
}
export default Home;