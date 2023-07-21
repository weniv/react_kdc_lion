import { Home } from "./Home";

function One() {
  return <p>one</p>
}

function Two() {
  return <p>two</p>
}

function Three() {
  return <p>three</p>
}


function App() {
  return (
    <Home />
  );
}


function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const numComponentsArray = num.map((item, index) => <h1 key={index}>안녕 {name} {item}호</h1>)
  console.log(numComponentsArray);
  return (
    <>
      {numComponentsArray}
    </>
  )
}
export default App;
