import React, {
	Component
} from 'react';
import './App.css';;
class Blog extends Component {
	render() {
		return (
			<div className="Demo">
            	<Welcome name="aa"></Welcome>
      		</div>
		);
	}
}

function Welcome(props) {
	console.log(props)
	return <h1>Hello, {props.name}</h1>;
}

export default Blog;