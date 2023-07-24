import { Component } from "react";
import MyComponent from "./MyComponent";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.handleClick} >클릭!!</button>
        <span>{this.state.number}</span>
      </div>
    )
  }

}

function App() {
  return (
    <div>
      <ClassComp />
    </div>
  );
}
export default App;
