//TODO #4.0 Making THE MOVIE APP | Fetching Movies from API
//YTS에서 만든 API를 사용 -> url이 계속 바뀌기때문에 nico의 proxy주소 이용
//https://yts-proxy.now.sh/list_movies.json (http://yts.lt)

import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  //axios는 늘 빠른것이 아니다. 그래서 javascipt에게 componentDidMount 함수가 끝날 때 까지 약간 시간이 걸릴 수 있다고 말해줄필요가있다 -> async, await 즉 axios가 끝날 때를 "기다렸다가" 계속하게 된다.
  //정리 : getMovies는 axios.get을 사용하지만 asxios.get은 완료되기까지 시간이 조금 필요하기 때문에 await를 넣었다. await키워드를 넣어주기 위해선 외부나 async function을 사용해야 한다.
  getMovies = async () => {
    //axios : fetch위에 있는 작은 layer를 의미한다.
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    //ES6적용 (ES5->this.state.isLoading 방식으로 적어주어야 한다.)
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!!"}</div>;
  }
}

export default App;

/* 참조

function component의 인자로 props 말고 props의 특정 값만 가져올 때는 꼭 curly bracket으로 감싸주세요 당연한 건데 놓쳐가지고 어리둥절 했네요 😇

ex)
function Movies( id, year, title, summary, poster) { ... } // X
function Movies( {id, year, title, summary, poster}) {...} // O

*/
