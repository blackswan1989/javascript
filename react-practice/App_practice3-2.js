//TODO #3.2 STATE | Component Life Cycle

import React from "react";
//import PropTypes from "prop-types";

class App extends React.Component {
  /*counstructor는 javascript이다. 따라서 class와 javascript를 이해해야만 한다.
  constructor(props) {
    super(props); // error없애기 위함
    console.log("hello");
  }*/

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  //setState 호출하면 -> component를 호출 -> 그리고 render를 먼저 호출한 다음에 ->  i'm rendering을 출력하고 -> componentDidUpdate가 실행된다.
  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just update");
  }

  //componentWillMount는 component가 떠날 때 호출된다.
  componentWillMount() {
    console.log("Goodbye, cruel world");
  }

  //output을 보면 i'm rendering -> component rendered -> add or minus 클릭시 -> i'm rendering -> i just update 출력된다.

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>This number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;

// 참조 : https://reactjs.org/docs/react-component.html
