//TODO #3.0 STATE | Class Component and state
//TODO #3.1 STATE | All you nedd to know about state

import React from "react";
import PropTypes from "prop-types";

//extends = 확장하다, 넓어지다, 미치다
//즉 App -> react.Component로 확장 | render method를 가지고 있다.
//function component는 function이고 뭔가를 return해서 screen에 표시되지만 class component는 "class"이다. 하지만 react component로 부터 확장되고  그것을 render method안에 넣으면 screen에 표시되게 된다. react는 자동적으로 모든 class component의 render method를 실행하고자 하기 때문이다.
class App extends React.Component {
  //state에는 바꾸고싶은 data를 넣어준다.
  state = {
    count: 0,
  };

  //state는 setState를 사용한다.
  //setState를 호출 할 때마다 react는 새로운 state와 함께 render function을 호출하게 된다.
  add = () => {
    //console.log("add");
    //this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    //console.log("minus");
    //this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({ count: current.count - 1 }));
  };

  //react component에서 사용하는 유일한 function -> render function
  render() {
    //class속성이기 때문에{state}가 아닌, {this.state.count}형식으로 넣어주어야 한다.
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
