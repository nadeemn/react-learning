const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
    "div",
    { id: "parent" },
[    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag") ]
    ),   React.createElement(
        "div",
        { id: "child 2" },
        [React.createElement("h1", {}, "H1 tag"), React.createElement("h2", {}, "H2 tag") ]
      ) ]
  );
  console.log(parent)
root.render(parent);
