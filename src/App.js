import logo from './logo.svg';
import './App.css';
import FuncComp from './FuncComp';
import ClassComp from './Components/ClassComp';
import Stylings from './Components/Stylings/Stylings';
import Header from './Components/Header';
import ListsandKeys from './Components/ListsandKeys';
import Counter from './Components/Counter';

function App() {
  const userData = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      }
    },
    {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    }
    }
  ]

  return (
    <div className="App">
      <Header />
      {/* <FuncComp courseName='ReactJs' userData={userData} /> */}
      {/* <ClassComp courseName='ReactJs' /> */}
      {/* <Stylings /> */}
      {/* <ListsandKeys /> */}
      <Counter />
    </div>
  );
}

export default App;