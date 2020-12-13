import React from "react";

const palete = [
  { color: "purple" },
  { color: "blue" },
  { color: "green" },
  { color: "yellow" },
];

function Potato({ color }) {
  console.log(color);
  return <div>I like {color} potato!</div>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {palete.map((v) => (
        <Potato color={v.color} />
      ))}
      <Potato color="red" count="5" price="{[3, 2, 4, 3, 1]}"></Potato>
      <Potato color="blue" count="5" price="{[3, 2, 4, 3, 1]}"></Potato>
      <Potato color="green" count="5" price="{[3, 2, 4, 3, 1]}"></Potato>
      <Potato color="yellow" count="5" price="{[3, 2, 4, 3, 1]}"></Potato>
    </div>
  );
}

export default App;
