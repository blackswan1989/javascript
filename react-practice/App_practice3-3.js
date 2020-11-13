//TODO #3.3 STATE | Planning the Movie Component

import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  //javascript setTimeout을 이용 -> 3초후 we are ready!!가 됨을 확인
  //만들게 될 movie App에서 we are ready대신에 movie를 render하고 map을 만들고 moive를 render하게 될 것이다.
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    //ES6적용 (ES5->this.state.isLoading 방식으로 적어주어야 한다.)
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!!"}</div>;
  }
}

export default App;
