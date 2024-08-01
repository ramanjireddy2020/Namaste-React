// <div id="parent">
//   <div id="child">
//     <h1>ramani</h1>
//   </div>
// </div>;
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { key: 1 }, "Ramanji Redddy"),
    React.createElement("h2", { key: 2 }, "Ramanji"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { key: 1 }, "Ramanji Redddy"),
    React.createElement("h2", { key: 2 }, "Ramanji"),
  ]),
]);
const header = React.createElement(
  "h1",
  { id: "header" },
  "Hello world from React updated"
);
console.log("parent", parent);
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  parent
);
