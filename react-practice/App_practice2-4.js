//TODO #2.4 JSX & PROPS | Protection with PropTypes
//* father component로 부터 전달받은 props가 우리가 예상한 props가 맞는지 확인하는 방법 -> rating
//* VScode의 터미널에 npm i prop-types 입력하여 설치 -> package.json/dependencies의 "prop-types"에서 설치된 내용 확인 가능

import React from "react";
import PropTypes from "prop-types"; //prop-type 설치 후 import해준다.

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

//참조 https://reactjs.org/docs/typechecking-with-proptypes.html
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7,
  },
];

function App() {
  return (
    // dish = object
    // map은 item별로 function을 호출한다.
    // ()=>는 function과 같은 기능이다 (ES6)
    // {}안에 작성하면 자바스크립트언어가 된다.
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;

/*
! console Error
index.js:1 Warning: Each child in a list should have a unique "key" prop. 
Check the render method of `App`. See https://fb.me/react-warning-keys for more information.

! 해결방법
각각 list내의 chile는 unique한 key prop를 가져야 한다.
즉 모든 react의 element들은 유일해야하는데 이들을 list 안으로 집어넣을때,
unique성질을 잃어버리게 된다. react의 모든 element들은 다르게 보일 필요가 있기 때문이다. 따라서 item들에 각각 id를 주어야 한다.
?=> foodILike list들에게 id를 부여해주고, Food에도 key를 설정해주면 된다.
*/
