import React, {
  Component
} from 'react';
class rhead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headInfo: ''
    };
  }
  componentDidMount() {

  }
  render() {
    console.log(this.props.headInfo)
    return (
      <div className="rhead">
        <header className="rhead-header">
          {this.props.headInfo}
        </header>
      </div>
    );
  }
}
export default rhead;