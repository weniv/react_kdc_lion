import { HelloLicat } from './HelloLicat';

function App() {
  return (
    <div>
      <HelloLicat />
    </div>
  );
}





// const HelloLicat = (props) => {
//   return (
//     <div>
//       <h2>{props.value.id}</h2>
//       <strong>{props.value.name}</strong>
//       <HelloLicatTwo value={{ name: props.value.name, id: props.value.id }} />
//     </div>
//   )
// }

// const HelloLicatTwo = (props) => {
//   return (
//     <div>
//       <h2>Two: {props.value.id}</h2>
//       <strong>Two: {props.value.name}</strong>
//     </div>
//   )
// }

export default App;
