import "./App.css";

const blocks = [
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b3",
    block: "color",
  },
  {
    id: "b4",
    block: `${Math.random()}`,
  },
  {
    id: "b2",
    block: "green",
  },
  {
    id: "b4",
    block: `${Math.random()}`,
  },
  {
    id: "b1",
    block: "yellow",
  },
];

function App() {
  return (
    <div className="App">
      {blocks.map((item) => {
        if (item.block === "color") {
          return (item.block = "lime");
        } else if (+item.block > 0) {
          return (item.block = "red");
        }
        return (
          <div
            key={item.id}
            className="main"
            style={{ backgroundColor: item.block }}
          ></div>
        );
      })}
    </div>
  );
}

export default App;
