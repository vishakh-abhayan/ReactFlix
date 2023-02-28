import Header from "./Components/Header/Header";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/rowpost/Rowpost";
import { Popular, Action, Horror } from "./Urls";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Rowpost url={Popular} title="Most Popular" />
      <Rowpost url={Action} title="Action" isSmall />
      <Rowpost url={Horror} title="Horror" isSmall />
    </div>
  );
}

export default App;
