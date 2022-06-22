
// importing from files app.css and card.js
import './App.css';
import Card from './card.js';

const boxKey = 4
//built an array of colors
const boxArray = ["red", "orange", "yellow", "green"]

function App() {
  //setting up what i want to be returned
  return (
      [...Array(boxKey)].map((e, i) => <Card
      //defining what i want to be displayed inside the boxes
      Title= {"title"}
      subtitle= {"subtitle"}
      description= {"description"}
      //defining background-color of boxes using the array of colors i created
      boxStyle= {{backgroundColor: boxArray[i], width: "190px"}}
      />)
  );
}
export default App;







