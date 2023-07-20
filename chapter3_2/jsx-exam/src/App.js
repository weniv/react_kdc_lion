import './App.css'

function App() {
  // const today = new Date();
  // // console.log('today: ', today);
  // const year = today.getFullYear();
  // const month = today.getMonth() + 1;
  // // console.log(year, month);
  // const date = today.getDate();
  // const hour = today.getHours();
  // const min = today.getMinutes();
  // const sec = today.getSeconds();

  // return (
  //   <div style={{ backgroundColor: 'royalblue', color: 'white' }}>
  //     <h1>년 : {year}</h1>
  //     <h2>월/일 : {month}/{date}</h2>
  //     <h3>시간 : {hour}시 {min}분 {sec}초</h3>
  //   </div>
  // );

  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: true },
  ];

  const areas = list.map((item) => {
    return (
      <li key={item.no} className={item.visited ? "list-area-item active" : "list-area-item"}>{item.area}</li>
    )
  })

  return <ul className="list-area">{areas}</ul>

}
export default App;
