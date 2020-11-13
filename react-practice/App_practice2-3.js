//TODO #2.3 JSX & PROPS | map Recap
//* #2.2와 동일한 화면을 출력할수있다. 하지만 2.2가 function을 별도로 더 추가하지 않았기 때문에 비교적 더 깔끔한 코드라고 할 수 있다.

import React from "react";

function Food({ name, picture }) {
  //console.log(props.fav);
  //ES6 -> props.favorite = ({favorite})
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

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
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  },
];

function renderFood(dish) {
  //console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image} />;
}

function App() {
  return (
    // dish = object
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
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
