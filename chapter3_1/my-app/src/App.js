import './App.css'

function App() {

  const name = "라이캣!!!!";
  const someStyle = { backgroundColor: "seagreen", color: "white" };

  function myFunc() {
    return 'gooood'
  }

  return (
    <div>
      <h1 style={someStyle} >안녕, {name} 1호</h1>
      <h2>안녕, 라이캣 2호!</h2>
      <div className="newClass" />
      {100 + 1}
      {'hello' + 'world'}
      {myFunc()}
      {name ? 'one' : 'two'}
    </div>
  );
}

export default App;
