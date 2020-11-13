//TODO #4.1 Making THE MOVIE APP | Rendering The Movies
//YTS에서 만든 API를 사용 -> url이 계속 바뀌기때문에 nico의 proxy주소 이용
//https://yts-proxy.now.sh/list_movies.json (http://yts.lt)

import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    //console.log(movies.data.data.movies); 원하는 내용 확인 -> ES6방식으로 작성 data:{data:{movies },},} -> console.log(movies)로 확인 가능
    //this.setState({movies:movies}) 여기서 둘 중 하나는 setState의 movies이고, 다른 하나는 axios에서 온 movies이다. but 줄여쓰기 가능 -> this.setState({movies})로 작성해줌. -> isLoading추가 -> 콘솔의 네트워크에서 list_movies.json이 동작하면 Loading...화면에서 We are ready!! 로 변경된다.
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  /*
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready!!"}</div>;
  }*/
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;
