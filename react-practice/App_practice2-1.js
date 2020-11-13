//TODO #2.1 JSX & PROPS | Reusable Components with JSX + Props

import React from "react";
// "./"는 같은 directory라는 의미이다.

function Food({ favorite }) {
  //console.log(props.fav);
  //ES6 -> props.favorite = ({favorite})
  return <h1>I Love {favorite}</h1>;
}

const foodILike = [{}];

function App() {
  return (
    <div>
      <h1>Hello???</h1>
      <Food favorite="kimchi" />
      <Food favorite="samgiopsal" />
      <Food favorite="ramen" />
      <Food favorite="chukumi" />
      <h2>is this work??</h2>
    </div>
  );
}

export default App;
